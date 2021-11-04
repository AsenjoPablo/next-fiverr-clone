import Layout from '../components/Layout'
import Image from 'next/image'
import Link from 'next/link'

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
        <div className="section-spaced flex items-center">
          <div className="flex flex-col gap-8">
            <h2 className="text-2xl md:text-4xl text-white font-semibold">Find the perfect <span className="font-normal italic">freelance</span> services for your business</h2>
            <div className="flex flex-col items-end gap-2 sm:flex-row">
              <input placeholder="Try 'building mobile app'" type="text" className="max-w-xl text-xs w-full rounded px-4 py-2 outline-none"/>
              <button className="font-bold bg-green-500 hover:bg-green-600 duration-100 text-xs md:text-md text-white rounded py-2 px-3">Search</button>
            </div>
            <div className="flex flex-col sm:flex-row items-start gap-2">
              <span className="text-white text-sm md:text-xl">Popular:</span>
              <a href="#" className="button__search-suggestion">Website Design</a>
              <a href="#" className="button__search-suggestion">Wordpress</a>
              <a href="#" className="button__search-suggestion">Logo Design</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center bg-gray-200 p-8">
          <span className="text-gray-400 font-semibold">Trusted by:</span>
          <div className="flex gap-2">
            <Image width={100} height={60} src="/img/logos/facebook.png" alt="Facebook logo" />
            <Image width={100} height={60} src="/img/logos/google.png" alt="Google logo" />
            <Image width={100} height={60} src="/img/logos/netflix.png" alt="Netflix logo" />
            <Image width={100} height={60} src="/img/logos/paypal.png" alt="Paypal logo" />
          </div>
        </div>
      </section>

      <section className="section-container bg-white">
        <div className="section-spaced gap-8 flex flex-col">
          <h2 className="section-header">Popular professional services</h2>
          <div className="flex flex-col md:flex-row gap-4">
            {services.map((service: Service) =>
            {
              return (
                <div key={service.id} className="service__image">
                  <div className="service__text">
                    <span className="service__text__subtitle">{service.subtitle}</span>
                    <span className="service__text__title">{service.title}</span>
                  </div>
                  <Image src={service.imageRef} width={600} height={600} alt={service.imageAlt} />
                  <div className="service__backdrop"></div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-container bg-gray-100">
        <div className="section-spaced flex flex-col md:flex-row gap-4 justify-between">
          <div className="flex flex-col">
            <h2 className="section-header">
              A whole world of freelance talent at your fingertips
            </h2>
            <ul>
              <li>
                <h3 className="font-bold mb-2 mt-8 text-gray-600">
                  <span className="mr-3">✓</span>
                  The best for every budget
                </h3>
                <p className="text-sm text-gray-700 font-light">Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
              </li>
              <li>
                <h3 className="font-bold mb-2 mt-8 text-gray-600">
                  <span className="mr-3">✓</span>
                  Quality work done quickly
                  </h3>
                <p className="text-sm text-gray-700 font-light">Find the right freelancer to begin working on your project within minutes.</p>
              </li>
              <li>
                <h3 className="font-bold mb-2 mt-8 text-gray-600">
                  <span className="mr-3">✓</span>
                  Protected payments, every time
                  </h3>
                <p className="text-sm text-gray-700 font-light">Always know what you'll pay upfront. Your payment isn't released until you approve the work.</p>
              </li>
              <li>
                <h3 className="font-bold mb-2 mt-8 text-gray-600">
                  <span className="mr-3">✓</span>
                  24/7 support
                  </h3>
                <p className="text-sm text-gray-700 font-light">Questions? Our round-the-clock support team is available to help anytime, anywhere.</p>
              </li>
            </ul>
          </div>
          <Image className="object-cover" src="/img/services-images/women-laptop.webp" width={400} height={400} alt="Happy women in front of a computer"></Image>
        </div>
      </section>



      <section className="section-container bg-gray-200 text-gray-700">
        <div className="section-spaced flex flex-col">
          <div className="flex flex-col md:flex-row md:items-start gap-16 py-12 justify-between items-center">
            <ul className="flex flex-col gap-4">
              <li className="font-bold">Categories</li>
              <li><a href="#">Graphics and design</a></li>
              <li><a href="#">Graphics and design</a></li>
              <li><a href="#">Graphics and design</a></li>
              <li><a href="#">Graphics and design</a></li>
            </ul>
            <ul className="flex flex-col gap-4">
              <li className="font-bold">Categories</li>
              <li><a href="#">Graphics and design</a></li>
              <li><a href="#">Graphics and design</a></li>
            </ul>
            <ul className="flex flex-col gap-4">
              <li className="font-bold">Categories</li>
              <li><a href="#">Graphics and design</a></li>
              <li><a href="#">Graphics and design</a></li>
              <li><a href="#">Graphics and design</a></li>
            </ul>
            <ul className="flex flex-col gap-4">
              <li className="font-bold">Categories</li>
              <li><a href="#">Graphics and design</a></li>
              <li><a href="#">Graphics and design</a></li>
              <li><a href="#">Graphics and design</a></li>
              <li><a href="#">Graphics and design</a></li>
              <li><a href="#">Graphics and design</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 items-center justify-between md:flex-row border-gray-300 border-t-2 w-full py-12">
            <Link href="/">
              <span className="text-2xl tracking-widest uppercase">Corporation</span>
            </Link>
            <div className="flex gap-4">
              <span>media</span>
              <span>media</span>
              <span>media</span>
              <span>media</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
