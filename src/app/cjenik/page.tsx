import React from 'react';

import { SERVICES } from '@/lib/config';

export default function CjenovnikPage() {
  return (
    <main className='min-h-screen bg-neutral-light py-12'>
      <div className='layout'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h1 className='h1 text-primary-600 mb-4'>Cjenovnik usluga</h1>
          <p className='text-neutral-medium max-w-2xl mx-auto'>
            Profesionalne usluge po pristupačnim cijenama. Sve cijene su u KM
            (Konvertibilna marka).
          </p>
        </div>

        {/* Žene Section */}
        <section className='mb-16'>
          <h2 className='h2 text-primary-600 mb-8 text-center'>
            Usluge za žene
          </h2>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {/* Šišanje + Feniranje */}
            <div className='bg-white rounded-lg shadow-lg p-6'>
              <h3 className='h3 text-primary-500 mb-6'>Šišanje + Feniranje</h3>
              <div className='space-y-4'>
                {SERVICES.zene.sisanje.map((service, index) => (
                  <div
                    key={index}
                    className='flex justify-between items-center py-2 border-b border-neutral-200 last:border-b-0'
                  >
                    <div>
                      <span className='font-medium'>{service.name}</span>
                      <span className='text-sm text-neutral-medium ml-2'>
                        ({service.duration})
                      </span>
                    </div>
                    <span className='font-bold text-primary-600'>
                      {service.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Feniranje */}
            <div className='bg-white rounded-lg shadow-lg p-6'>
              <h3 className='h3 text-primary-500 mb-6'>Feniranje</h3>
              <div className='space-y-4'>
                {SERVICES.zene.feniranje.map((service, index) => (
                  <div
                    key={index}
                    className='flex justify-between items-center py-2 border-b border-neutral-200 last:border-b-0'
                  >
                    <div>
                      <span className='font-medium'>{service.name}</span>
                      <span className='text-sm text-neutral-medium ml-2'>
                        ({service.duration})
                      </span>
                    </div>
                    <span className='font-bold text-primary-600'>
                      {service.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Talasi */}
            <div className='bg-white rounded-lg shadow-lg p-6'>
              <h3 className='h3 text-primary-500 mb-6'>Talasi</h3>
              <div className='space-y-4'>
                {SERVICES.zene.talasi.map((service, index) => (
                  <div
                    key={index}
                    className='flex justify-between items-center py-2 border-b border-neutral-200 last:border-b-0'
                  >
                    <div>
                      <span className='font-medium'>{service.name}</span>
                      <span className='text-sm text-neutral-medium ml-2'>
                        ({service.duration})
                      </span>
                    </div>
                    <span className='font-bold text-primary-600'>
                      {service.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Farbanje */}
            <div className='bg-white rounded-lg shadow-lg p-6'>
              <h3 className='h3 text-primary-500 mb-6'>
                Farbanje + Šišanje + Feniranje
              </h3>
              <div className='space-y-4'>
                {SERVICES.zene.farbanje.map((service, index) => (
                  <div
                    key={index}
                    className='flex justify-between items-center py-2 border-b border-neutral-200 last:border-b-0'
                  >
                    <div>
                      <span className='font-medium'>{service.name}</span>
                      <span className='text-sm text-neutral-medium ml-2'>
                        ({service.duration})
                      </span>
                    </div>
                    <span className='font-bold text-primary-600'>
                      {service.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Minival */}
            <div className='bg-white rounded-lg shadow-lg p-6'>
              <h3 className='h3 text-primary-500 mb-6'>Minival</h3>
              <div className='space-y-4'>
                {SERVICES.zene.minival.map((service, index) => (
                  <div
                    key={index}
                    className='flex justify-between items-center py-2 border-b border-neutral-200 last:border-b-0'
                  >
                    <div>
                      <span className='font-medium'>{service.name}</span>
                      <span className='text-sm text-neutral-medium ml-2'>
                        ({service.duration})
                      </span>
                    </div>
                    <span className='font-bold text-primary-600'>
                      {service.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Balayage */}
            <div className='bg-white rounded-lg shadow-lg p-6'>
              <h3 className='h3 text-primary-500 mb-6'>Balayage</h3>
              <div className='space-y-4'>
                {SERVICES.zene.balayage.map((service, index) => (
                  <div
                    key={index}
                    className='flex justify-between items-center py-2 border-b border-neutral-200 last:border-b-0'
                  >
                    <div>
                      <span className='font-medium'>{service.name}</span>
                      <span className='text-sm text-neutral-medium ml-2'>
                        ({service.duration})
                      </span>
                    </div>
                    <span className='font-bold text-primary-600'>
                      {service.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tretmani */}
            <div className='bg-white rounded-lg shadow-lg p-6 lg:col-span-2'>
              <h3 className='h3 text-primary-500 mb-6'>Tretmani</h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {SERVICES.zene.tretmani.map((service, index) => (
                  <div
                    key={index}
                    className='flex justify-between items-center py-2 border-b border-neutral-200 last:border-b-0'
                  >
                    <div>
                      <span className='font-medium'>{service.name}</span>
                      <span className='text-sm text-neutral-medium ml-2'>
                        ({service.duration})
                      </span>
                    </div>
                    <span className='font-bold text-primary-600'>
                      {service.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Muškarci Section */}
        <section className='mb-16'>
          <h2 className='h2 text-primary-600 mb-8 text-center'>
            Usluge za muškarce
          </h2>
          <div className='bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto'>
            <div className='space-y-4'>
              {SERVICES.muskarci.map((service, index) => (
                <div
                  key={index}
                  className='flex justify-between items-center py-3 border-b border-neutral-200 last:border-b-0'
                >
                  <div>
                    <span className='font-medium'>{service.name}</span>
                    <span className='text-sm text-neutral-medium ml-2'>
                      ({service.duration})
                    </span>
                  </div>
                  <span className='font-bold text-primary-600'>
                    {service.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dodatne usluge Section */}
        <section className='mb-16'>
          <h2 className='h2 text-primary-600 mb-8 text-center'>
            Dodatne usluge
          </h2>
          <div className='bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto'>
            <div className='space-y-4'>
              {SERVICES.dodatne.map((service, index) => (
                <div
                  key={index}
                  className='flex justify-between items-center py-3 border-b border-neutral-200 last:border-b-0'
                >
                  <div>
                    <span className='font-medium'>{service.name}</span>
                    <span className='text-sm text-neutral-medium ml-2'>
                      ({service.duration})
                    </span>
                  </div>
                  <span className='font-bold text-primary-600'>
                    {service.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <div className='text-center bg-primary-500 rounded-lg p-8 text-white'>
          <h3 className='h3 mb-4'>Rezervirajte svoj termin</h3>
          <p className='mb-6 opacity-90'>
            Kontaktirajte nas za rezervaciju ili upite o uslugama
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href='tel:+38761106522'
              className='bg-white text-primary-500 px-6 py-3 rounded-lg font-medium hover:bg-neutral-100 transition-colors'
            >
              📞 Pozovi nas
            </a>
            <a
              href='https://instagram.com/frizerski.salon.be.in'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-accent-silver text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-neutral-300 transition-colors'
            >
              📱 Instagram
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
