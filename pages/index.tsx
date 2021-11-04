import Layout from '../components/Layout'
import Image from 'next/image'

import {useState, useEffect} from 'react';

import { ServicesList } from '../shared/service-list';
import { Service } from '../shared/types';

export default function Home()
{
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices([...ServicesList]);
  }, [ServicesList])

  return (
    <Layout>
      <section className="pt-32 min-h-screen section-container bg-gradient-to-br from-red-900 to-blue-500">
        <div className="section-spaced flex justify-evenly items-center">
          <div className="flex flex-col gap-8 mb-36">
            <h2 className="text-2xl text-white font-semibold">Find the perfect <span className="font-normal italic">freelance</span> services for your business</h2>
            <div className="flex">
              <input placeholder="Try 'building mobile app'" type="text" className="text-xs w-full rounded-tl rounded-bl px-4 py-2 outline-none"/>
              <button className="font-bold bg-green-500 hover:bg-green-600 duration-100 text-xs text-white rounded-tr rounded-br py-2 px-2">Search</button>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-white text-sm">Popular:</span>
              <a href="#" className="button__search-suggestion">Website Design</a>
              <a href="#" className="button__search-suggestion">Wordpress</a>
              <a href="#" className="button__search-suggestion">Logo Design</a>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center bg-gray-200 p-8 gap-8">
          <span className="text-gray-400 font-semibold">Trusted by:</span>
          <Image width={100} height={60} src="/img/logos/facebook.png" alt="Facebook logo" />
          <Image width={100} height={60} src="/img/logos/google.png" alt="Google logo" />
          <Image width={100} height={60} src="/img/logos/netflix.png" alt="Netflix logo" />
          <Image width={100} height={60} src="/img/logos/paypal.png" alt="Paypal logo" />
        </div>
      </section>

      <section className="section-container bg-white">
        <div className="section-spaced gap-8 flex flex-col">
          <h2 className="section-header">Popular professional services</h2>
          <div className="flex gap-4 w-full">
            {services.map((service: Service) =>
            {
              return (
                <div key={service.id} className="service__image">
                  <div className="service__text">
                    <span className="service__text__subtitle">{service.subtitle}</span>
                    <span className="service__text__title">{service.title}</span>
                  </div>
                  <Image className="h-full" src={service.imageRef} width={280} height={340} alt={service.imageAlt} />
                  <div className="service__backdrop"></div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-container bg-green-50">
        <div className="section-spaced flex flex-row justify-between">
          <div className="flex flex-col w-1/2">
            <h2 className="section-header">
              A whole world of freelance talent at your fingertips
            </h2>
            <ul>
              <li>
                <h3 className="text-xl font-bold mb-2 mt-8 text-gray-600">
                  <span className="mr-3">✓</span>
                  The best for every budget
                </h3>
                <p className="text-lg text-gray-700 font-light">Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
              </li>
              <li>
                <h3 className="text-xl font-bold mb-2 mt-8 text-gray-600">
                  <span className="mr-3">✓</span>
                  Quality work done quickly
                  </h3>
                <p className="text-lg text-gray-700 font-light">Find the right freelancer to begin working on your project within minutes.</p>
              </li>
              <li>
                <h3 className="text-xl font-bold mb-2 mt-8 text-gray-600">
                  <span className="mr-3">✓</span>
                  Protected payments, every time
                  </h3>
                <p className="text-lg text-gray-700 font-light">Always know what you'll pay upfront. Your payment isn't released until you approve the work.</p>
              </li>
              <li>
                <h3 className="text-xl font-bold mb-2 mt-8 text-gray-600">
                  <span className="mr-3">✓</span>
                  24/7 support
                  </h3>
                <p className="text-lg text-gray-700 font-light">Questions? Our round-the-clock support team is available to help anytime, anywhere.</p>
              </li>
            </ul>
          </div>
          <Image className="object-cover w-1/2" src="/img/services-images/women-laptop.webp" width={400} height={400} alt="Happy women in front of a computer"></Image>
        </div>
      </section>
    </Layout>
  )
}
