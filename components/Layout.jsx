import Head from 'next/head'
import Image from 'next/image'

import Nav from './Nav.jsx'

import { useState, useEffect } from 'react';

export default function Layout({ children })
{
    const [isNavColored, setIsNavColored] = useState(false);
    const updateNavbar = () => window.scrollY > 130 ? setIsNavColored(true) : setIsNavColored(false)
    useEffect(() =>
    {
        updateNavbar();
        window.addEventListener('scroll', updateNavbar)
    })
    return (
        <>
            <Head></Head>

            {/* <nav
                className={`${isNavColored ? 'bg-white text-gray-800 shadow' : 'bg-transparent text-white'} z-50 flex justify-between w-full px-12 fixed duration-300`}>
                <Image width={100} height={60} src={`${isNavColored ? '/img/logos/fiverr-black.svg' : '/img/logos/fiverr.svg'}`} alt="Fiverr logo" />
                <ul className="flex gap-8 items-center">
                    <li>Fiverr Business</li>
                    <li>Explore</li>
                    <li>English</li>
                    <li>EUR</li>
                    <li>Become a seller</li>
                    <li>Sign In</li>
                    <li>Join</li>
                </ul>
            </nav> */}

            <Nav/>

            <main className="min-h-screen w-full flex flex-col box-border">
                {children}
            </main>

            <footer>
            </footer>
        </>
    )
}
