const { GoogleSpreadsheet } = require('google-spreadsheet');
const jwt = require('jsonwebtoken');

exports.handler = async (event) => {
    if (event.httpMethod !== "GET") return { statusCode: 405, body: "Method Not Allowed" };

    const authHeader = event.headers.authorization;
    if (!authHeader) return { statusCode: 401, body: JSON.stringify({ msg: "Thi\u1ebfu quy\u1ec1n truy c\u1eadp" }) };

    try {
          const token = authHeader.split(' ')[1];
          const decoded = jwt.verify(token, process.env.JWT_SECRET);
          const userPhone = decoded.phone;

      const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);
          await doc.useServiceAccountAuth({
                  client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
                  private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
          });
          await doc.loadInfo();

      // Gia su sheet co ten la 'Tracking'
      const sheet = doc.sheetsByTitle['Tracking'] || doc.sheetsByIndex[1]; 
      const rows = await sheet.getRows();

      const userRows = rows.filter(row => row.phone === userPhone);

      const trackingData = userRows.map(row => {
              let status = "\u0110ang x\u1eed l\u00fd \u23f3";
              if (row.Done) {
                        status = "\u0110\u00e3 giao h\u00e0ng th\u00e0nh c\u00f4ng \u2705";
              } else if (row['CODE Deli VN']) {
                        status = "\u0110ang v\u1ec1 Vi\u1ec7t Nam \u2708\ufe0f";
              } else if (row['Track US']) {
                        status = "\u0110\u00e3 nh\u1eadn t\u1ea1i kho M\u1ef9 \ud83c\uddfa\ud83c\uddf8";
              }

                                              return {
                                                        order: row.Order,
                                                        description: row.Description,
                                                        trackUS: row['Track US'],
                                                        trackEMS: row['Track EMS'],
                                                        codeDeliVN: row['CODE Deli VN'],
                                                        status: status
                                              };
      });

      // Gom nhom theo Order
      const groupedData = trackingData.reduce((acc, curr) => {
              if (!acc[curr.order]) acc[curr.order] = [];
              acc[curr.order].push(curr);
              return acc;
      }, {});

      return {
              statusCode: 200,
              body: JSON.stringify({ data: groupedData })
      };

    } catch (error) {
          return { statusCode: 401, body: JSON.stringify({ msg: "Phi\u00ean \u0111\u0103ng nh\u1eadp h\u1ebft h\u1ea1n" }) };
    }
};
