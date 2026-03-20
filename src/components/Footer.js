import React from 'react';
import { MapPin, Phone, Mail, Award, CheckCircle } from 'lucide-react';

function Footer() {
    return (
          <footer className="bg-primary-dark text-white py-24 px-6 md:px-0 border-t border-white/5 font-sans">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left">
              <div className="space-y-6">
                <h3 className="text-sm font-bold text-primary-accent uppercase tracking-widest mb-4">THONG TIN LIEN HE</h3>
            <div className="space-y-4">
                  <p className="flex items-center justify-center md:justify-start text-base text-gray-400 font-light hover:text-white transition-colors cursor-pointer leading-relaxed group">
                    <MapPin size={20} className="mr-3 text-primary-accent group-hover:scale-110 transition-transform" strokeWidth={1.5} /> 
                    Kho US: Portland / OR / USA.
      </p>
              <p className="flex items-center justify-center md:justify-start text-base text-gray-400 font-light hover:text-white transition-colors cursor-pointer leading-relaxed group">
                    <Phone size={20} className="mr-3 text-primary-accent group-hover:scale-110 transition-transform" strokeWidth={1.5} /> 
                    Hotline: 0916.758.391
      </p>
              <p className="flex items-center justify-center md:justify-start text-base text-gray-400 font-light hover:text-white transition-colors cursor-pointer leading-relaxed group">
                    <Mail size={20} className="mr-3 text-primary-accent group-hover:scale-110 transition-transform" strokeWidth={1.5} /> 
                    Email: info@shipus.net
      </p>
      </div>
      </div>
          <div className="space-y-6">
                <h3 className="text-sm font-bold text-primary-accent uppercase tracking-widest mb-4">CAM KET DICH VU</h3>
            <ul className="space-y-4">
                  <li className="flex items-center justify-center md:justify-start text-base text-gray-400 font-light hover:text-white transition-colors group">
                    <CheckCircle size={18} className="mr-3 text-primary-accent group-hover:scale-110 transition-transform" strokeWidth={2} />
                    Mua hang My phi ship re nhat thi truong
      </li>
              <li className="flex items-center justify-center md:justify-start text-base text-gray-400 font-light hover:text-white transition-colors group">
                    <CheckCircle size={18} className="mr-3 text-primary-accent group-hover:scale-110 transition-transform" strokeWidth={2} />
                    Bao hiem hang hoa 100%
      </li>
              <li className="flex items-center justify-center md:justify-start text-base text-gray-400 font-light hover:text-white transition-colors group">
                    <CheckCircle size={18} className="mr-3 text-primary-accent group-hover:scale-110 transition-transform" strokeWidth={2} />
                    Van chuyen nhanh tu 7-10 ngay
      </li>
      </ul>
      </div>
          <div className="space-y-6">
                <h3 className="text-sm font-bold text-primary-accent uppercase tracking-widest mb-4">CHUYEN GIA LOGISTICS</h3>
            <div className="flex items-center justify-center md:justify-start space-x-4 bg-white/5 p-6 rounded-2xl border border-white/5 hover:border-primary-accent/30 transition-all duration-300">
                  <div className="bg-primary-accent/10 p-4 rounded-xl">
                    <Award className="text-primary-accent" size={32} strokeWidth={1.5} />
      </div>
              <div>
                    <p className="text-lg font-medium text-white">shipus.net</p>
                <p className="text-sm text-gray-400">Since 2015</p>
      </div>
      </div>
      </div>
      </div>
        <div className="mt-20 pt-8 border-t border-white/5 text-center">
              <p className="text-sm text-gray-500 font-light tracking-wide uppercase">
                (c) 2026 shipus.net. All rights reserved.
      </p>
      </div>
      </footer>
    );
}
export default Footer;
