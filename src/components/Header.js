import React from 'react';
import { Phone, Menu } from 'lucide-react';

function Header() {
    return (
          <header className="sticky top-0 z-50 bg-white border-b border-gray-50 py-2 md:py-3 shadow-soft transition-all">
            <div className="container mx-auto px-6 flex justify-between items-center">

              <div className="flex items-center">
                <img 
            src="/LOGO SHIPUS.png" 
            alt="Shipus.net Logo" 
            className="h-10 md:h-12 transition-transform hover:scale-105 object-contain cursor-pointer" 
            onClick={() => window.location.href = '/'}
            />
              </div>

        <nav className="hidden md:flex space-x-8 items-center font-sans">
                        <a href="/" className="text-sm font-semibold text-primary-dark hover:text-primary-accent transition-colors tracking-wide uppercase">
                          TRANG CHỦ
              </a>
            <a href="#pricing" className="text-sm font-semibold text-primary-dark hover:text-primary-accent transition-colors tracking-wide uppercase">
                          BẢNG GIÁ
              </a>
            <a href="#guide" className="text-sm font-semibold text-primary-dark hover:text-primary-accent transition-colors tracking-wide uppercase">
                          HƯỚNG DẪN
              </a>
            <a href="#calculator" className="text-sm font-semibold text-primary-dark hover:text-primary-accent transition-colors tracking-wide uppercase">
                          TRA CỨU
              </a>
              </nav>

        <div className="flex items-center space-x-4">
                        <button className="hidden sm:flex bg-primary-accent hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-md items-center space-x-2 transition-all shadow-md active:scale-95 text-sm uppercase tracking-widest">
                          <Phone size={16} strokeWidth={2} />
                          <span>Lien he</span>
              </button>

          <button className="md:hidden text-primary-dark hover:text-primary-accent transition-colors p-2 -mr-2">
                          <Menu size={28} strokeWidth={2} />
              </button>
              </div>

              </div>
              </header>
    );
}

export default Header;
