import React from 'react';
import { UserPlus, Package, CreditCard, Home } from 'lucide-react';

function ProcessSection() {
  const steps = [
    {
      icon: <UserPlus size={36} strokeWidth={1.5} />,
      number: "01",
      title: "ĐĂNG KÝ",
      description: "Gia nhập cộng đồng Shipus.net và nhận ngay địa chỉ kho chuyên nghiệp tại Mỹ."
    },
    {
      icon: <Package size={36} strokeWidth={1.5} />,
      number: "02",
      title: "GỬI KHO MỸ",
      description: "Gửi món hàng yêu thích của bạn đến địa chỉ kho uy tín của chúng tôi tại Portland, OR, USA."
    },
    {
      icon: <CreditCard size={36} strokeWidth={1.5} />,
      number: "03",
      title: "THANH TOÁN",
      description: "Hệ thống thanh toán minh bạch, tiện lợi sau khi kiện hàng đã về tới kho Việt Nam."
    },
    {
      icon: <Home size={36} strokeWidth={1.5} />,
      number: "04",
      title: "NHẬN HÀNG",
      description: "Thảnh thơi tận hưởng niềm vui mua sắm, chúng tôi giao hàng tận tay trên toàn quốc."
    },
  ];

  return (
    <section className="py-24 px-6 bg-white overflow-hidden relative" id="guide">
      <div className="container mx-auto text-center relative z-10 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-serif font-extrabold text-primary-dark tracking-tight leading-tight uppercase">
            Quy trình vận chuyển chuyên nghiệp
        </h2>
        <p className="mt-6 text-lg text-gray-500 font-sans font-light max-w-2xl mx-auto leading-relaxed">
            Chỉ với 4 bước đơn giản, kiện hàng của bạn sẽ được vận chuyển từ Mỹ về tới cửa nhà bạn một cách an toàn và nhanh chóng.
        </p>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 relative">
          
          {/* Đường kẻ mảnh kết nối giữa các bước (chỉ hiển thị trên desktop). Đã căn chỉnh chạy ngang tâm của các icon (top-24) */}
          <div className="hidden lg:block absolute top-24 left-1/2 w-[calc(100%-8rem)] h-[2px] bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 -z-10 transform -translate-x-1/2"></div>
          
          {/* Dùng h-full để ép các thẻ bằng nhau nếu text dài ngắn khác nhau */}
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center p-8 bg-white border border-gray-100 rounded-3xl shadow-soft transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:border-primary-accent/30 relative overflow-hidden group h-full">
              
              {/* Số thứ tự mờ phía sau - Tối ưu: Đổi màu khi hover */}
              <span className="absolute -top-4 -right-4 text-8xl font-serif font-extrabold text-gray-50 group-hover:text-primary-accent/5 transition-colors duration-500 z-0 select-none">
                {step.number}
              </span>
              
              <div className="z-10 flex flex-col items-center flex-grow">
                {/* Vòng tròn bọc Icon: Chuyển màu rực rỡ khi hover */}
                <div className="w-24 h-24 rounded-full bg-orange-50 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary-accent transition-all duration-300 shadow-sm">
                  <div className="text-primary-accent group-hover:text-white transition-colors duration-300">
                    {step.icon}
                  </div>
                </div>
                
                <h3 className="text-lg md:text-xl font-sans font-bold text-primary-dark tracking-widest mb-4 uppercase">
                  {step.title}
                </h3>
                <p className="text-gray-500 font-sans font-light text-base leading-relaxed text-center px-2 mt-auto">
                  {step.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;