import { motion } from 'motion/react';
import { useState } from 'react';

const characters = [
  { id: 'R', name: '록시 페레즈', color: 'var(--color-sunset)' },
  { id: 'D', name: '다프네 켄싱턴', color: 'var(--color-sunset)' },
  { id: 'C', name: '쳇 플린', color: 'var(--color-sunset)' },
  { id: 'N', name: '내쉬 킨케이드', color: 'var(--color-ocean)' },
  { id: 'A', name: '아드리안 베인', color: 'var(--color-ocean)' }
];

export function GalleryView() {
  const [selectedChar, setSelectedChar] = useState<string>('R');

  const images = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="pb-32 pt-12 px-4 sm:px-6 max-w-5xl mx-auto"
    >
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight text-[var(--color-sunset)] mb-2">Gallery</h1>
        <p className="text-sm font-medium text-[var(--color-ocean)] uppercase tracking-widest">Image Archive</p>
      </header>

      <div className="flex flex-wrap gap-2 mb-10 border-b border-[var(--color-beige-dark)] pb-6 block">
        {characters.map(char => (
          <button
            key={char.id}
            onClick={() => setSelectedChar(char.id)}
            className={`px-5 py-2.5 rounded-full font-bold text-[0.95rem] transition-colors shadow-sm ${
              selectedChar === char.id 
                ? 'bg-[var(--color-sunset)] text-white border-transparent' 
                : 'bg-white border border-[var(--color-beige-dark)] text-gray-600 hover:border-[var(--color-sunset)]'
            }`}
          >
            {char.name}
          </button>
        ))}
      </div>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
        {images.map(num => (
          <div key={`${selectedChar}_${num}`} className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm border border-[var(--color-beige-dark)] bg-white group">
            <img 
              src={`https://gbe88.uk/Apt/${selectedChar}_${num}.webp`}
              alt={`${characters.find(c => c.id === selectedChar)?.name} - ${num}`}
              className="w-full h-auto block"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
