'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-brand-accent/30 via-white to-brand-accent/10">
      <div className="container-width section-padding">
        <div className="max-w-3xl mx-auto lg:mx-0">
          <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6">
            <span className="block text-brand-secondary">Supporting Local</span>
            <span className="block text-brand-primary animate-fade-in-up">Cancer Patients</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl animate-fade-in">
            Join us for the annual Craven Cancer Classic golf tournament. 
            Help us make a difference in the lives of local cancer patients 
            through the Carolina East Foundation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Link href="/donate" className="btn-primary">
              Donate Now
            </Link>
            <Link href="/sponsors" className="btn-secondary">
              Become a Sponsor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
