'use client';

import React from 'react';

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: 'Jasa Kalibrasi ISO/EIC 17025',
      description: 'Alat ukur yang terakreditasi untuk memastikan keakuratan dan keandalan pengukuran sesuai standar internasional.',
    },
    {
      title: 'Konsultasi Kalibrasi',
      description: 'Pendampingan teknis dan solusi optimal untuk memastikan sistem kalibrasi di perusahaan Anda berjalan sesuai regulasi dan standar yang berlaku.',
    },
    {
      title: 'Training Sertifikasi Kalibrasi',
      description: 'Pelatihan bagi tenaga kerja untuk meningkatkan pemahaman dan keterampilan dalam proses kalibrasi serta sertifikasi peralatan ukur.',
    },
  ];

  return (
    <section className="bg-light-grey py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-[#163868] text-center mb-8">Pelayanan Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-[#163868]">{service.title}</h3>
              <p className="mt-2 text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;