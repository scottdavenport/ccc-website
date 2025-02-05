'use client';

import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';
import sponsorsData from '@/data/sponsors.json';

interface Sponsor {
  name: string;
  logo: string;
  link: string;
}

interface SponsorTier {
  tier: string;
  amount: number | null;
  sponsors: Sponsor[];
}

export default function SponsorCarousel() {
  const [activeTier, setActiveTier] = useState(0);
  const { sponsorTiers } = sponsorsData;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    beforeChange: (_: number, next: number) => setActiveTier(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          fade: false,
        }
      }
    ]
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-width">
        <h2 className="text-4xl font-bold text-center mb-8 text-brand-primary">Our Sponsors</h2>
        
        {/* Tier Navigation */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex justify-start md:justify-center space-x-4 min-w-max px-4">
            {sponsorTiers.map((tier, index) => (
              <button
                key={tier.tier}
                onClick={() => {
                  setActiveTier(index);
                  if (typeof (window as any)?.slickGoTo === 'function') {
                    (window as any).slickGoTo(index);
                  }
                }}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeTier === index
                    ? 'bg-brand-primary text-white'
                    : 'bg-white text-brand-secondary hover:bg-brand-accent/10'
                }`}
              >
                {tier.tier}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel */}
        <Slider {...settings} className="sponsor-carousel">
          {sponsorTiers.map((tier) => (
            <div key={tier.tier} className="px-4">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-semibold text-brand-primary mb-2">
                  {tier.tier}
                </h3>
                {tier.amount && (
                  <p className="text-brand-secondary mb-6">
                    ${tier.amount.toLocaleString()}+
                  </p>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {tier.sponsors.map((sponsor) => (
                    <Link
                      href={sponsor.link}
                      key={sponsor.name}
                      className="group block bg-white rounded-lg p-4 transition-all hover:shadow-md"
                    >
                      <div className="aspect-[3/2] relative mb-4">
                        <Image
                          src={sponsor.logo}
                          alt={`${sponsor.name} logo`}
                          fill
                          className="object-contain transition-transform group-hover:scale-105"
                        />
                      </div>
                      <h4 className="text-center text-brand-secondary group-hover:text-brand-primary transition-colors">
                        {sponsor.name}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
