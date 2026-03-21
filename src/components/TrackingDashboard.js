import React, { useState, useEffect } from 'react';
import { Package, Truck, CheckCircle, Clock, Copy, LogOut, ArrowLeft } from 'lucide-react';

const TrackingDashboard = () => {
    const [trackingData, setTrackingData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
          const fetchTracking = async () => {
                  const token = localStorage.getItem('shipus_token');
                  if (!token) {
                            window.location.href = "/";
                            return;
                  }

                  try {
                            const response = await fetch('/.netlify/functions/get-tracking', {
                                        headers: { 'Authorization': `Bearer ${token}` }
                            });
                            const result = await response.json();
                            if (response.ok) {
                                        setTrackingData(result.data);
                            } else {
                                        setError(result.msg);
                            }
                  } catch (err) {
                            setError("Kh\u00f4ng th\u1ec3 k\u1ebf t n\u1ed1i d\u1eef li\u1ec7u");
                  } finally {
                            setLoading(false);
                  }
          };

                  fetchTracking();
    }, []);

    const copyToClipboard = (text) => {
          navigator.clipboard.writeText(text);
          alert(" \u0110\u00e3 sao ch\u00e9p: " + text);
    };

    const handleLogout = () => {
          localStorage.removeItem('shipus_token');
          window.location.href = "/";
    };

    if (loading) return <div className="flex justify-center items-center h-screen"> \u0110ang t\u1ea3i d\u1eef li\u1ec7u... </div>;
    if (error) return <div className="text-red-500 text-center mt-10">{error}</div>;

    return (
          <div className="min-h-screen bg-gray-50 pb-12">
            <nav className="bg-white shadow-sm px-4 py-4 flex justify-between items-center">
              <h1 className="text-xl font-bold text-blue-600">ShipUS Tracking</h1>
          <div className="flex space-x-4">
                <button onClick={() => window.location.href = "/"} className="flex items-center text-gray-600 hover:text-blue-600">
                  <ArrowLeft className="w-4 h-4 mr-1" /> Trang ch\u1ee7
      </button>
            <button onClick={handleLogout} className="flex items-center text-red-600 hover:text-red-700">
                  <LogOut className="w-4 h-4 mr-1" /> \u0110\u0103ng xu\u1ea5t
      </button>
      </div>
      </nav>

        <div className="max-w-4xl mx-auto px-4 mt-8">
              <h2 className="text-2xl font-bold mb-6"> Qu\u1ea3n l\u00fd \u0111\u01a1n h\u00e0ng </h2>

  {trackingData && Object.keys(trackingData).length > 0 ? (
              Object.keys(trackingData).map(orderId => (
                            <div key={orderId} className="bg-white rounded-lg shadow-md p-6 mb-6">
                              <div className="flex justify-between items-center border-b pb-4 mb-4">
                                <span className="text-lg font-semibold text-blue-800"> \u0110\u01a1n h\u00e0ng: #{orderId} </span>
    </div>

                <div className="space-y-6">
  {trackingData[orderId].map((item, idx) => (
                      <div key={idx} className="relative pl-8 border-l-2 border-blue-200 pb-4 last:pb-0">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500"></div>
                                                 <div className="flex flex-col md:flex-row md:items-start justify-between">
                          <div className="flex-1">
                            <p className="font-medium text-gray-800">{item.description || "Kh\u00f4ng c\u00f3 m\u00f4 t\u1ea3"}</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 text-sm">
                             {item.trackUS && (
                                                           <div className="bg-gray-50 p-2 rounded flex justify-between items-center">
                                                           <span>Track US: <span className="font-mono">{item.trackUS}</span></span>
                                                           <button onClick={() => copyToClipboard(item.trackUS)} className="text-blue-500 hover:text-blue-700 ml-2">
                                    <Copy className="w-4 h-4" />
    </button>
    </div>
                             )}
  {item.trackEMS && (
                                <div className="bg-gray-50 p-2 rounded flex justify-between items-center">
                                  <span>Track EMS: <span className="font-mono">{item.trackEMS}</span></span>
                                <button onClick={() => copyToClipboard(item.trackEMS)} className="text-blue-500 hover:text-blue-700 ml-2">
                                  <Copy className="w-4 h-4" />
  </button>
  </div>
                          )}
{item.codeDeliVN && (
                              <div className="bg-gray-50 p-2 rounded flex justify-between items-center">
                                <span>Deli VN: <span className="font-mono">{item.codeDeliVN}</span></span>
                                <button onClick={() => copyToClipboard(item.codeDeliVN)} className="text-blue-500 hover:text-blue-700 ml-2">
                                  <Copy className="w-4 h-4" />
  </button>
  </div>
                           )}
</div>
  </div>
                      <div className="mt-4 md:mt-0 md:ml-6 flex items-center">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                            item.status.includes('\u2705') ? 'bg-green-100 text-green-700' : 
                            item.status.includes('\u2708') ? 'bg-blue-100 text-blue-700' : 'bg-yellow-100 text-yellow-700'
}`}>
{item.status}
</span>
  </div>
  </div>
  </div>
                ))}
                  </div>
                  </div>
          ))
        ) : (
                    <div className="bg-white p-10 rounded-lg text-center shadow">
                      <Package className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                        <p className="text-gray-500">B\u1ea1n ch\u01b0a c\u00f3 \u0111\u01a1n h\u00e0ng n\u00e0o c\u1ea7n theo d\u00f5i.</p>
            </div>
        )}
</div>
          </div>
  );
};

export default TrackingDashboard;
