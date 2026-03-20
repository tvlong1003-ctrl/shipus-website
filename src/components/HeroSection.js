import React from 'react';

function HeroSection() {
    const scrollToCalculator = () => {
          const calculatorSection = document.getElementById('calculator');
          if (calculatorSection) {
                  calculatorSection.scrollIntoView({ behavior: 'smooth' });
          }
    };

  return (
        <section className="relative h-[80vh] flex items-center justify-center bg-primary-dark overflow-hidden">
          <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('/BackGroud.jpg')" }}
      ></div>

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="container relative z-10 mx-auto px-6 text-center text-white">
                <div className="max-w-3xl mx-auto">
                  <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-extrabold leading-tight tracking-tight">
                    Van chuyen hang My 
            <span className="block italic text-primary-accent mt-2 tracking-wide font-normal text-3xl sm:text-5xl md:text-6xl">ve Viet Nam an toan</span>
        </h1>

          <p className="mt-8 text-lg md:text-xl font-sans text-gray-200 font-light leading-relaxed max-w-2xl mx-auto">
                    Hop tac cung chung toi de mang tron the gioi hang My den tan cua nha ban chi voi vai click chuot don gian.
        </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <button className="bg-primary-accent hover:bg-orange-700 text-white font-bold py-4 px-10 rounded-md text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 active:scale-95 uppercase tracking-widest">
                      BAT DAU GUI HANG
        </button>

            <button 
              onClick={scrollToCalculator}
              className="bg-transparent hover:bg-white/10 text-white border border-white/40 font-bold py-4 px-10 rounded-md text-lg transition-all backdrop-blur-sm uppercase tracking-widest"
            >
                              TRA CUU CUOC PHI
                </button>

                </div>
                </div>
                </div>
                </section>
  );
}

export default HeroSection;
