'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-width px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link 
            href="/" 
            className="font-heading text-2xl font-bold text-gray-900 hover:text-primary transition-colors"
          >
            Craven Cancer Classic
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="nav-link">
              About
            </Link>
            <Link href="#tournament" className="nav-link">
              Tournament
            </Link>
            <Link href="#sponsors" className="nav-link">
              Sponsors
            </Link>
            <Link href="#contact" className="nav-link">
              Contact
            </Link>
            <Link href="/donate" className="btn-primary !py-2 !px-4">
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
