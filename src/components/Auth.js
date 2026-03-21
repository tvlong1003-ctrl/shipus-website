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
                                    alert("Ch\u00e0o m\u1eebng " + result.userName + " quay tr\u1edf l\u1ea1i!");
                                    window.location.href = "/tracking"; 
                        } else {
                                    alert(result.msg);
                        }
              } catch (error) {
                        alert("C\u00f3 l\u1ed1i k\u1ebft n\u1ed1i h\u1ec7 th\u1ecfng!");
              }
      };
      return (
              <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                  <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Dang nhap he thong ShipUS</h2>
          </div>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                  <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={handleLogin}>
                      <div>
                        <label className="block text-sm font-medium text-gray-700">So dien thoai</label>
                  <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
          </div>
    {isGuest ? (
                      <div>
                        <label className="block text-sm font-medium text-gray-700">Ma khach hang</label>
                     <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" value={formData.code} onChange={(e) => setFormData({ ...formData, code: e.target.value })} required />
        </div>
                 ) : (
                                   <div>
                                     <label className="block text-sm font-medium text-gray-700">Mat khau</label>
                     <input type="password" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} required />
                     </div>
                 )}
                <div className="flex items-center space-x-2">
                  <input type="checkbox" checked={isGuest} onChange={(e) => setIsGuest(e.target.checked)} />
              <span className="text-sm">Dang nhap bang ma khach hang (Guest)</span>
    </div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">Dang nhap</button>
    </form>
    </div>
    </div>
    </div>
  );
};
export default Auth;
