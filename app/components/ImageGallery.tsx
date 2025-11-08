'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryImage {
  url: string;
  title: string;
  description: string;
}

const images: GalleryImage[] = [
  {
    url: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800&auto=format&fit=crop',
    title: 'Arquitetura Imperial',
    description: 'Palácio da Cidade Proibida, símbolo do poder imperial chinês',
  },
  {
    url: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&auto=format&fit=crop',
    title: 'Arte Budista',
    description: 'Estátuas budistas que Wu Zetian patrocinou durante seu reinado',
  },
  {
    url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop',
    title: 'Caligrafia Imperial',
    description: 'A arte da escrita chinesa, valorizada na corte imperial',
  },
  {
    url: 'https://images.unsplash.com/photo-1570214476695-19bd84b3f6fa?w=800&auto=format&fit=crop',
    title: 'Templos Sagrados',
    description: 'Templos construídos sob o patrocínio de Wu Zetian',
  },
  {
    url: 'https://images.unsplash.com/photo-1604608281808-5159a76c4f18?w=800&auto=format&fit=crop',
    title: 'Dragão Imperial',
    description: 'O dragão, símbolo do poder imperial na dinastia Tang',
  },
  {
    url: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=800&auto=format&fit=crop',
    title: 'Jardins Imperiais',
    description: 'Jardins que adornavam os palácios da época',
  },
];

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 text-imperial-gold">
          A China Imperial
        </h2>
        <p className="text-center text-gray-300 text-lg mb-16 max-w-3xl mx-auto">
          Explore a arte, arquitetura e cultura da época de Wu Zetian
        </p>

        {/* Grid de imagens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl cursor-pointer transform transition-all duration-500 hover:scale-105 hover:z-10"
              onClick={() => setSelectedImage(image)}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay com informações */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-serif font-bold text-imperial-gold mb-2">
                    {image.title}
                  </h3>
                  <p className="text-gray-200 text-sm">
                    {image.description}
                  </p>
                </div>

                {/* Borda decorativa */}
                <div className="absolute inset-0 border-2 border-imperial-gold/0 group-hover:border-imperial-gold/60 transition-all duration-300 rounded-xl" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de visualização */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-imperial-gold transition-colors p-2"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>

          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="mt-6 text-center">
              <h3 className="text-3xl font-serif font-bold text-imperial-gold mb-3">
                {selectedImage.title}
              </h3>
              <p className="text-gray-300 text-lg">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}
