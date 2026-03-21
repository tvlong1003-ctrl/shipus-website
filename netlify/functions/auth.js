const { GoogleSpreadsheet } = require('google-spreadsheet');
const jwt = require('jsonwebtoken');

exports.handler = async (event) => {
        if (event.httpMethod !== "POST") return { statusCode: 405, body: "Method Not Allowed" };
        const { phone, code, password, isGuest } = JSON.parse(event.body);

        // 1. Ket noi Google Sheet
        const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);
        await doc.useServiceAccountAuth({
                  client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
                  private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        });
        await doc.loadInfo();
        const sheet = doc.sheetsByTitle['Users'];
        const rows = await sheet.getRows();

        // 2. Tim nguoi dung
        const user = rows.find(row => row.phone === phone);
        if (!user) {
                  return { statusCode: 401, body: JSON.stringify({ msg: "So dien thoai khong ton tai" }) }; "So dien thoai khong ton tai" }) };
        }

        // 3. Kiem tra kich ban A hoac B
        let authenticated = false;
        if (isGuest) {
                  authenticated = (user.customer_code === code);
        } else {
                  authenticated = (user.password === password); 
        }
        if (authenticated) {
                  const token = jwt.sign({ phone: user.phone, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });
                  return {
                              statusCode: 200,
                              body: JSON.stringify({ msg: "Thanh cong", token, userName: user.name }), token, userName: user.name })
                  };
        } else {
                  return { statusCode: 401, body: JSON.stringify({ msg: "Thong tin dang nhap khong chinh xac" }) }; "Thong tin dang nhap khong chinh xac" }) };
        }
};
