import Head from 'next/head'
import Image from 'next/image'

export default function Layout({ children })
{
    return (
        <>
            <Head></Head>

            <nav className="bg-transparent flex justify-between w-full px-12 py-6 fixed text-white">
                <Image width={100} height={60} src="/img/logos/fiverr.svg" alt="Fiverr logo" />
                <ul className="flex gap-8 items-center">
                    <li>Fiverr Business</li>
                    <li>Explore</li>
                    <li>English</li>
                    <li>EUR</li>
                    <li>Become a seller</li>
                    <li>Sign In</li>
                    <li>Join</li>
                </ul>
            </nav>

            <main className="min-h-screen w-full flex flex-col">
                {children}
            </main>

            <footer>
                hola footer
            </footer>
        </>
    )
}
