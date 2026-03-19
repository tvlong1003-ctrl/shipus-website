import React from 'react';
import { MapPin, Phone, Mail, Award, CheckCircle } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-primary-dark text-white py-24 px-6 md:px-0 border-t border-white/5 font-sans">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left">
        
        {/* Thông tin liên hệ - Tối ưu: Thêm hiệu ứng hover rực rỡ hơn */}
        <div className="space-y-6">
          <h3 className="text-sm font-bold text-primary-accent uppercase tracking-widest mb-4">THÔNG TIN LIÊN HỆ</h3>
          <div className="space-y-4">
            <p className="flex items-center justify-center md:justify-start text-base text-gray-400 font-light hover:text-white transition-colors cursor-pointer leading-relaxed group">
              <MapPin size={20} className="mr-3 text-primary-accent group-hover:scale-110 transition-transform" strokeWidth={1.5} /> 
              Kho US: 13337 SE Ellis St / Portland / OR / USA
            </p>
            <p className="flex items-center justify-center md:justify-start text-base text-gray-400 font-light hover:text-white transition-colors cursor-pointer leading-relaxed group">
              <Phone size={20} className="mr-3 text-primary-accent group-hover:scale-110 transition-transform" strokeWidth={1.5} /> 
              Hotline: 0986.003.777
            </p>
            <p className="flex items-center justify-center md:justify-start text-base text-gray-400 font-light hover:text-white transition-colors cursor-pointer leading-relaxed group">
              <Mail size={20} className="mr-3 text-primary-accent group-hover:scale-110 transition-transform" strokeWidth={1.5} /> 
              Email: Shipusnet1@gmail.com
            </p>
          </div>
        </div>

        {/* Cam kết - Giữ nguyên sự uy tín */}
        <div className="space-y-6">
          <h3 className="text-sm font-bold text-primary-accent uppercase tracking-widest mb-4">CAM KẾT CỦA CHÚNG TÔI</h3>
          <div className="space-y-4">
            <p className="flex items-center justify-center md:justify-start text-base text-gray-400 font-light leading-relaxed">
              <Award size={20} className="mr-3 text-primary-accent" strokeWidth={1.5} /> 
              Bảo hiểm: Đền bù 100% giá trị hàng hóa nếu thất lạc/hư hỏng.
            </p>
            <p className="flex items-center justify-center md:justify-start text-base text-gray-400 font-light leading-relaxed">
              <CheckCircle size={20} className="mr-3 text-primary-accent" strokeWidth={1.5} /> 
              Thời gian: Hàng về 7-14 ngày làm việc.
            </p>
            <p className="flex items-center justify-center md:justify-start text-base text-gray-400 font-light leading-relaxed">
              <CheckCircle size={20} className="mr-3 text-primary-accent" strokeWidth={1.5} /> 
              Hỗ trợ thanh toán hộ Amazon, eBay, Sephora miễn phí công mua.
            </p>
          </div>
        </div>

        {/* Liên kết nhanh - ĐÃ SỬA LỖI HREF TẠI ĐÂY */}
        <div className="space-y-6">
          <h3 className="text-sm font-bold text-primary-accent uppercase tracking-widest mb-4">LIÊN KẾT NHANH</h3>
          <ul className="space-y-4">
            {/* Đã thay href="#" bằng href="/" để xóa cảnh báo Build */}
            <li>
              <a href="/" className="text-sm text-gray-400 font-light hover:text-primary-accent transition-colors">Về chúng tôi</a>
            </li>
            <li>
              <a href="/" className="text-sm text-gray-400 font-light hover:text-primary-accent transition-colors">Chính sách bảo mật</a>
            </li>
            <li>
              <a href="/" className="text-sm text-gray-400 font-light hover:text-primary-accent transition-colors">Điều khoản dịch vụ</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Dòng bản quyền dưới cùng */}
      <div className="mt-20 pt-8 border-t border-white/5 text-center text-gray-600 text-[10px] md:text-xs font-light tracking-widest uppercase">
        &copy; {new Date().getFullYear()} Shipus.net - Dịch vụ vận chuyển Mỹ-Việt cao cấp. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;