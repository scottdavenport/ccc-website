'use client';

import { useState } from 'react';
import SponsorCard from './SponsorCard';
import sponsorsData from '@/data/sponsors.json';

interface Sponsor {
  name: string;
  logo: string;
  link: string;
}

interface SponsorTier {
  tier: string;
  amount: number;
  sponsors: Sponsor[];
}

const SponsorShowcase = () => {
  const [selectedTier, setSelectedTier] = useState<string>('all');
  const { sponsorTiers } = sponsorsData;

  const filteredSponsors = selectedTier === 'all'
    ? sponsorTiers
    : sponsorTiers.filter(tier => tier.tier === selectedTier);

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-8">Our Sponsors</h2>
      
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <button
          onClick={() => setSelectedTier('all')}
          className={`px-4 py-2 rounded-full transition-colors ${
            selectedTier === 'all'
              ? 'bg-primary text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          All Sponsors
        </button>
        {sponsorTiers.map((tier) => (
          <button
            key={tier.tier}
            onClick={() => setSelectedTier(tier.tier)}
            className={`px-4 py-2 rounded-full transition-colors ${
              selectedTier === tier.tier
                ? 'bg-primary text-white'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {tier.tier}
          </button>
        ))}
      </div>

      {/* Champion Sponsors Hero Section */}
      {(selectedTier === 'all' || selectedTier === 'Champion Sponsors') && (
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center mb-6">Champion Sponsors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {sponsorTiers
              .find(tier => tier.tier === 'Champion Sponsors')
              ?.sponsors.map((sponsor, idx) => (
                <SponsorCard key={sponsor.name} sponsor={sponsor} priority />
              ))}
          </div>
        </div>
      )}

      {/* Other Sponsors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredSponsors
          .filter(tier => tier.tier !== 'Champion Sponsors')
          .map(tier => (
            <div key={tier.tier} className="space-y-6">
              <h3 className="text-xl font-semibold col-span-full">{tier.tier}</h3>
              {tier.sponsors.map((sponsor) => (
                <SponsorCard key={sponsor.name} sponsor={sponsor} />
              ))}
            </div>
          ))}
      </div>
    </section>
  );
};

export default SponsorShowcase;
