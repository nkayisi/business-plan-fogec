
import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-[#0f4260] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-1.5">
          {/* Logo FOGEC */}
          <div className='flex items-center gap-5'>
            <img src="/Logo-Fogec.png" alt="" className='w-36 h-auto' />
            <p className="hidden md:block text-sm text-slate-50">
              Business Plan
            </p>
          </div>

          {/* Navigation */}
          <nav className="md:flex space-x-8 items-center">
            {/* <a
              href="#partenariat"
              className="font-medium transition-colors duration-200 text-slate-50 hover:text-[#eed020]"
            >
              Partenariat
            </a> */}
            <Button
              variant="outline"
              className="font-medium transition-colors duration-200 border border-[#00aced] text-[#00aced] bg-transparent hover:bg-[#00aced] hover:text-slate-50"
            >
              Se connecter
            </Button>
          </nav>

          {/* Mobile menu button */}
          {/* <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="font-medium transition-colors duration-200 text-slate-50 hover:text-[#eed020]"
            >
              Menu
            </Button>
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
