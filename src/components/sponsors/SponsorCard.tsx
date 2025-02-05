'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface SponsorProps {
  sponsor: {
    name: string;
    logo: string;
    link: string;
  };
  priority?: boolean;
}

const SponsorCard = ({ sponsor, priority = false }: SponsorProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-center hover:shadow-lg"
    >
      <a 
        href={sponsor.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-full h-full flex flex-col items-center"
      >
        <div className="relative w-full h-24 mb-2">
          <Image
            src={sponsor.logo}
            alt={`${sponsor.name} logo`}
            fill
            className="object-contain"
            priority={priority}
          />
        </div>
        <p className="text-sm text-gray-600 text-center mt-2">{sponsor.name}</p>
      </a>
    </motion.div>
  );
};

export default SponsorCard;
