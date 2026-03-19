import React, { useState } from 'react';

function ShippingCalculator() {
  const [weight, setWeight] = useState('');
  const [itemType, setItemType] = useState('Hàng thường');
  const [totalCost, setTotalCost] = useState(0);
  const [showDiscount, setShowDiscount] = useState(false);

  const calculateShipping = () => {
    const kg = parseFloat(weight);
    if (isNaN(kg) || kg <= 0) {
      setTotalCost(0);
      setShowDiscount(false);
      return;
    }

    let cost = 0;
    setShowDiscount(false);

    // Xử lý logic tính giá chính xác cho từng loại hàng
    if (itemType === 'Điện tử') {
      setTotalCost('Liên hệ báo giá');
      return;
    } 
    
    if (itemType === 'Hàng thường') {
      if (kg > 5) {
        cost = kg * 250000;
        setShowDiscount(true); // Chỉ bật ưu đãi cho hàng thường > 5kg
      } else {
        cost = kg * 260000;
      }
    } else if (itemType === 'Mỹ phẩm') {
      cost = kg * 300000; // Mỹ phẩm giữ nguyên giá
    }

    setTotalCost(cost.toLocaleString('vi-VN') + ' VNĐ');
  };

  return (
    // Dùng bg-surface (nền xám cực nhẹ) để làm nền tổng, giúp Card màu trắng nổi bật hẳn lên
    <section id="calculator" className="bg-surface py-20 px-6 relative -mt-20 z-20 overflow-hidden">
      <div className="container mx-auto max-w-5xl bg-white p-10 md:p-14 rounded-3xl shadow-soft border border-gray-100 flex flex-col md:flex-row items-center gap-12 transition-all transform hover:-translate-y-1 duration-300">
        
        {/* Cột chữ (Trái) */}
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-serif font-extrabold text-primary-dark tracking-tight leading-tight">
            Tính toán cước phí nhanh
          </h2>
          <p className="mt-6 text-lg text-gray-500 font-sans font-light leading-relaxed">
            Ước tính chi phí vận chuyển của bạn chỉ trong vài giây với công cụ tính toán thông minh của Shipus.net. Minh bạch, không phí ẩn.
          </p>
        </div>

        {/* Cột Form tính toán (Phải) */}
        <div className="md:w-1/2 w-full space-y-6 bg-gray-50/50 p-8 md:p-10 rounded-2xl border border-gray-100/50 shadow-sm">
          
          <div className="text-left">
            <label htmlFor="weight" className="block text-gray-700 text-sm font-semibold uppercase tracking-wider mb-2">
              Cân nặng (kg)
            </label>
            <input
              type="number"
              id="weight"
              // Tối ưu UI: Ô nhập liệu bo góc, viền mỏng, có focus ring
              className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-accent/30 focus:border-primary-accent shadow-sm text-lg font-bold transition-all text-primary-dark placeholder-gray-400"
              placeholder="Nhập số kg..."
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div className="text-left">
            <label htmlFor="itemType" className="block text-gray-700 text-sm font-semibold uppercase tracking-wider mb-2">
              Loại hàng hóa
            </label>
            <select
              id="itemType"
              // Tối ưu UI: Tương đồng với ô input ở trên
              className="w-full p-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-accent/30 focus:border-primary-accent shadow-sm text-lg font-medium transition-all text-primary-dark appearance-none cursor-pointer"
              value={itemType}
              onChange={(e) => setItemType(e.target.value)}
            >
              <option value="Hàng thường">Hàng thường (Quần áo, đồ gia dụng)</option>
              <option value="Mỹ phẩm">Mỹ phẩm, Nước hoa, Túi xách</option>
              <option value="Điện tử">Điện tử cao cấp (Laptop, iPhone)</option>
            </select>
          </div>

          <button
            onClick={calculateShipping}
            // Tối ưu UI: Nút bấm màu Gradient cam sang đỏ, bo góc
            className="w-full bg-gradient-to-r from-primary-accent to-orange-600 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all active:scale-95 uppercase tracking-widest mt-4"
          >
            TÍNH CƯỚC PHÍ
          </button>

          {/* Kết quả hiển thị */}
          {totalCost !== 0 && (
            <div className="mt-8 p-6 bg-white border border-primary-accent/30 text-primary-dark rounded-xl shadow-inner animate-fade-in text-center">
              <p className="text-sm font-medium uppercase tracking-widest text-gray-400 mb-1">Tổng tiền dự tính</p>
              <p className="text-3xl md:text-4xl font-serif font-extrabold text-primary-accent">{totalCost}</p>
              {showDiscount && (
                <p className="mt-3 text-sm text-orange-600 bg-orange-50 py-2 px-4 rounded-lg inline-block font-medium">
                  ✨ Đã áp dụng ưu đãi giảm còn 250k/kg!
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default ShippingCalculator;