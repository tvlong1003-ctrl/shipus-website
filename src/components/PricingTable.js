import React from 'react';

function PricingTable() {
  // Tối ưu: Tách riêng phần số (price) và đơn vị (unit) để dễ dàng style kích cỡ khác nhau
  const pricingItems = [
    {
      category: "HÀNG PHỔ THÔNG",
      items: "Quần áo, giày dép, đồ gia dụng",
      price: "260.000",
      unit: "VNĐ/kg",
      highlight: false
    },
    {
      category: "TP CHỨC NĂNG",
      items: "Sữa, Đồ em bé",
      price: "280.000",
      unit: "VNĐ/kg",
      highlight: false
    },
    {
      category: "MỸ PHẨM",
      items: "Nước hoa, Túi xách hiệu",
      price: "300.000",
      unit: "VNĐ/kg",
      highlight: true
    },
    {
      category: "ĐIỆN TỬ CAO CẤP",
      items: "Laptop, iPhone",
      price: "Liên hệ",
      unit: "báo giá",
      highlight: false
    },
  ];

  return (
    <section className="py-24 px-6 bg-surface relative" id="pricing">
      <div className="container mx-auto text-center max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-serif font-extrabold text-primary-dark tracking-tight leading-tight uppercase">
            Bảng giá dịch vụ ưu đãi
        </h2>
        <p className="mt-6 text-lg text-gray-500 font-sans font-light max-w-2xl mx-auto leading-relaxed">
            Chúng tôi cam kết bảng giá minh bạch, không phát sinh chi phí ẩn cho từng loại mặt hàng cụ thể.
        </p>

        {/* Tối ưu Responsive: gap-6 cho mobile, gap-8 cho tablet, gap-10 cho PC */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {pricingItems.map((item, index) => (
            // Tối ưu: Thêm h-full và hover:-translate-y-2
            <div 
              key={index} 
              className={`bg-white p-8 md:p-10 rounded-3xl shadow-soft border ${item.highlight ? 'border-primary-accent border-2 ring-4 ring-primary-accent/10' : 'border-gray-100'} flex flex-col h-full transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden group`}
            >
              {item.highlight && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-primary-accent to-orange-500 text-white py-1.5 px-5 text-xs font-bold uppercase tracking-widest rounded-bl-2xl shadow-md">
                  Hot
                </div>
              )}
              
              <div className="text-center flex-grow flex flex-col">
                <h3 className="text-sm font-sans font-bold text-gray-400 tracking-widest mb-3">{item.category}</h3>
                <p className="text-gray-500 text-sm mb-6 font-light leading-relaxed">({item.items})</p>
                
                {/* Tối ưu: Dùng mt-auto để luôn đẩy giá xuống đáy thẻ, ép thẳng hàng. Tách style số và chữ */}
                <div className="mt-auto">
                  <p className="text-4xl font-serif font-extrabold text-primary-dark tracking-tighter transition-colors group-hover:text-primary-accent leading-none">
                    {item.price}
                    <span className="block text-sm font-sans font-medium text-gray-400 tracking-normal mt-2 group-hover:text-primary-accent/70 transition-colors">
                      {item.unit}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner Ưu đãi đặc biệt */}
        <div className="mt-20 p-8 md:p-12 bg-white border border-primary-accent/40 shadow-xl text-primary-dark rounded-3xl max-w-3xl mx-auto relative overflow-hidden flex flex-col items-center group hover:border-primary-accent transition-colors duration-300">
          <div className="absolute -left-10 -top-10 w-32 h-32 bg-orange-50 rounded-full z-0 transform group-hover:scale-110 transition-transform duration-500"></div>
          <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-orange-50 rounded-full z-0 transform group-hover:scale-110 transition-transform duration-500"></div>
          
          <div className="z-10 relative">
            <h4 className="text-sm md:text-base font-sans font-bold uppercase tracking-widest text-primary-accent mb-3">Ưu đãi cực đặc biệt</h4>
            <p className="text-2xl md:text-3xl font-serif font-extrabold text-primary-dark leading-snug">
              Giảm ngay xuống <span className="text-orange-600 underline decoration-orange-200 decoration-4 underline-offset-8">250.000đ/kg</span> cho kiện hàng trên 5kg!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingTable;