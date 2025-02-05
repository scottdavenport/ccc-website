'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-primary-lighter via-white to-primary-light">
      <div className="container-width section-padding">
        <div className="max-w-3xl mx-auto lg:mx-0">
          <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tight mb-6">
            <span className="block">Supporting Local</span>
            <span className="block text-primary">Cancer Patients</span>
          </h1>
          
          <p className="text-xl text-gray-700 mb-8 max-w-2xl">
            Join us for the annual Craven Cancer Classic golf tournament. 
            Help us make a difference in the lives of local cancer patients 
            through the Carolina East Foundation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
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
