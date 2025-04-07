'use client';

import React, { useState } from 'react';

const HeroSection: React.FC = () => {
  type ContentKey = 'aboutUs' | 'visionMission' | 'specialty';

  const [selectedContent, setSelectedContent] = useState<ContentKey>('aboutUs');

  const content: Record<ContentKey, { title: string; description: string; list?: string[] }> = {
    aboutUs: {
      title: 'Tentang Perusahaan',
      description: 'PT Anugerah Kalibrasi Pratama adalah perusahaan yang bergerak di bidang jasa sertifikasi dan kalibrasi peralatan ukur yang diakreditasi oleh Komite Akreditasi Nasional (KAN) sesuai dengan standar ISO/IEC 17025. Didirikan pada 15 Februari 2025, perusahaan ini berkomitmen untuk memberikan layanan kalibrasi yang akurat, terpercaya, dan sesuai dengan standar internasional. Sebagai mitra bagi industri dan laboratorium di berbagai sektor, PT Anugerah Kalibrasi Pratama menghadirkan solusi kalibrasi yang memastikan keakuratan dan konsistensi alat ukur. Dengan dukungan tenaga ahli berpengalaman dan peralatan kalibrasi modern, kami berupaya untuk menjaga kualitas pengukuran yang optimal guna mendukung efisiensi operasional dan kepatuhan terhadap regulasi yang berlaku.',
    },
    visionMission: {
      title: 'Visi dan Misi',
      description: 'Menjadi perusahaan kalibrasi terkemuka di Indonesia yang memberikan layanan berkualitas tinggi sesuai dengan standar internasional.',
      list: [
        'Menyediakan layanan kalibrasi yang akurat, cepat, dan sesuai dengan standar ISO/IEC 17025.',
        'Meningkatkan kompetensi industri melalui konsultasi dan pelatihan di bidang kalibrasi.',
        'Mengembangkan inovasi dalam layanan kalibrasi untuk mendukung kebutuhan industri yang terus berkembang.',
        'Menjaga kepuasan pelanggan dengan layanan profesional dan solusi yang tepat.',
        'Berkontribusi dalam peningkatan kualitas industri nasional melalui kepatuhan terhadap standar pengukuran global.'
      ]
    },
    specialty: {
      title: 'Keahlian Kami',
      description: 'Di PT Anugerah Kalibrasi Pratama, kami bangga dengan keahlian kami dalam kalibrasi, memastikan pengukuran yang presisi dan andal sesuai dengan standar ISO/IEC 17025. Tim profesional kami berkomitmen untuk memberikan layanan kalibrasi berkualitas tinggi untuk berbagai industri.',
      list: [
        'Layanan Kalibrasi Terakreditasi',
        'Tim Berpengalaman & Bersertifikasi',
        'Solusi Kalibrasi yang Komperhensif',
        'Peralatan Canggih & Modern',
        'Komitmen terhadap Kualitas & Akurasi',
        'Pendekatan Berorientasi Pelanggan'
      ]
    },
  };

  return (
    <section className="bg-light-grey py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center mt-64">
        <h1 className="text-4xl font-bold text-[#163868] mb-8">Welcome to Anugerah Kalibrasi Pratama</h1>
        <div className="w-full bg-white shadow-lg rounded-lg">
          <div className="flex justify-around mb-4 py-6 ">
            <button
              className={`px-4 py-2 rounded ${selectedContent === 'aboutUs' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-[#163868]'}`}
              onClick={() => setSelectedContent('aboutUs')}
            >
              About Us
            </button>
            <button
              className={`px-4 py-2 rounded ${selectedContent === 'visionMission' ? 'bg-blue-600 text-white ' : 'bg-gray-200 text-[#163868]'}`}
              onClick={() => setSelectedContent('visionMission')}
            >
              Vision and Mission
            </button>
            <button
              className={`px-4 py-2 rounded ${selectedContent === 'specialty' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-[#163868]'}`}
              onClick={() => setSelectedContent('specialty')}
            >
              Specialty
            </button>
          </div>
          <div className="text-justify">
            <h2 className="text-2xl text-center font-semibold text-[#163868]">{content[selectedContent].title}</h2>
            <div className="p-8">
              <p className="mt-2 text-gray-700">{content[selectedContent].description}</p>
              {content[selectedContent].list && (
                <ul className="list-disc list-inside text-gray-700 mt-4">
                  {content[selectedContent].list.map((item, index) => (
                    <li key={index} className="mt-1">{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;