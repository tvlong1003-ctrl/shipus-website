import React from 'react';
import { MessageCircle } from 'lucide-react';

function SocialContact() {
 // THÔNG TIN CỦA BẠN - HÃY SỬA Ở ĐÂY
 const phoneZalo = "0916758391"; // Số điện thoại Zalo của bạn (viết liền)
 const facebookPageID = "shipus.net"; // ID trích xuất từ https://www.facebook.com/shipus.net

 return (
 <div className="fixed bottom-6 right-6 z-[100] flex flex-col space-y-4">
 
 {/* NÚT ZALO - Hiệu ứng rung nhẹ thu hút chú ý */}
 <a 
 href={`https://zalo.me/${phoneZalo}`} 
 target="_blank" 
 rel="noopener noreferrer"
 className="group relative flex items-center justify-center w-14 h-14 bg-[#0068ff] text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-bounce-slow"
 title="Chat qua Zalo"
 >
 <span className="absolute -left-24 bg-white text-[#0068ff] px-3 py-1 rounded-lg text-sm font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
 Zalo ngay!
 </span>
 {/* Icon Zalo (Dùng SVG cho chuẩn màu thương hiệu) */}
 <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
 <path d="M22.002 11.233c0-3.37-3.328-6.104-7.436-6.104-4.108 0-7.436 2.734-7.436 6.104 0 3.37 3.328 6.104 7.436 6.104 4.108 0 7.436-2.734 7.436-6.104zm-11.458 2.05h-.955l.178-1.528h-.904l-.178 1.528h-.955l.235-2.022h.955l-.178 1.528h.904l.178-1.528h.955l-.235 2.022zm3.328 0h-1.91l.235-2.022h.955l-.235 2.022zm2.083 0h-.955l.235-2.022h.955l-.235 2.022z" />
 </svg>
 </a>

 {/* NÚT MESSENGER FACEBOOK */}
 <a 
 href={`https://m.me/${facebookPageID}`} 
 target="_blank" 
 rel="noopener noreferrer"
 className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-[#006AFF] to-[#00B2FF] text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
 title="Chat qua Facebook"
 >
 <span className="absolute -left-32 bg-white text-[#006AFF] px-3 py-1 rounded-lg text-sm font-bold shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
 Nhắn Facebook!
 </span>
 <MessageCircle size={32} fill="white" stroke="none" />
 </a>

 </div>
 );
}

export default SocialContact;