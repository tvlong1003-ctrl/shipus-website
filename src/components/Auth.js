import React, { useState } from 'react';

const Auth = () => {
    const [formData, setFormData] = useState({ phone: '', code: '', password: '' });
    const [isGuest, setIsGuest] = useState(true);

    const handleLogin = async (e) => {
          e.preventDefault();
          try {
                  const response = await fetch('/.netlify/functions/auth', {
                            method: 'POST',
                            body: JSON.stringify({ ...formData, isGuest }),
                  });

            const result = await response.json();

            if (response.ok) {
                      localStorage.setItem('shipus_token', result.token);
                      alert("Chao mung " + result.userName + " quay tro lai!");
                      window.location.href = "/tracking"; 
            } else {
                      alert(result.msg);
            }
          } catch (error) {
                  alert("Co loi ket noi he thong!");
          }
    };

    return (
          <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
              <h2 className="text-2xl font-bold mb-6 text-center">Dang nhap Shipus</h2>
          <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">So dien thoai</label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
                </div>
{isGuest ? (
              <div>
                <label className="block text-sm font-medium text-gray-700">Ma khach hang</label>
               <input
                 type="text"
                 className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                 value={formData.code}
                onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                required
              />
                  </div>
          ) : (
                        <div>
                          <label className="block text-sm font-medium text-gray-700">Mat khau</label>
              <input
                type="password"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
              />
                  </div>
          )}
          <div className="flex items-center space-x-2">
                        <input
              type="checkbox"
              checked={isGuest}
              onChange={(e) => setIsGuest(e.target.checked)}
            />
                            <span className="text-sm">Dang nhap bang ma khach hang</span>
                </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
          >
                          Dang nhap
              </button>
              </form>
              </div>
              </div>
  );
};

export default Auth;
