import Layout from '../components/Layout'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout>
      <section className="pt-32 min-h-screen section-container bg-gradient-to-br from-red-900 to-blue-500">
        <div className="section-spaced w-1/2">
          <h2 className="text-5xl text-white font-semibold">Find the perfect <span className="font-normal italic">freelance</span> services for your business</h2>
          <div className="flex">
            <input placeholder="Try 'building mobile app'" type="text" className="w-full rounded-tl rounded-bl px-4 py-2 outline-none"/>
            <button className="font-bold bg-green-500 hover:bg-green-600 duration-100 text-white rounded-tr rounded-br py-3 px-5">Search</button>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white text-sm">Popular:</span>
            <a href="#" className="button__search-suggestion">Website Design</a>
            <a href="#" className="button__search-suggestion">Wordpress</a>
            <a href="#" className="button__search-suggestion">Logo Design</a>
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
        <div className="section-spaced">
          <h2 className="section-header">Popular professional services</h2>
          <div className="flex gap-4 w-full">
            <div className="service__image">
              <div className="service__text">
                <span className="service__text__subtitle">Unlock growth online</span>
                <span className="service__text__title">SEO</span>
              </div>
              <Image className="h-full" src="/img/services-images/seo.webp" width={280} height={340} alt="seo" />
              <div className="service__backdrop"></div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
