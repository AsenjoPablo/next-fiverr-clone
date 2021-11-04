import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Nav()
{
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenu = () =>
    {
        setIsMenuOpen(!isMenuOpen);
    }

    const [isNavColored, setIsNavColored] = useState(false);
    const updateNavbar = () => window.scrollY > 130 ? setIsNavColored(true) : setIsNavColored(false)
    useEffect(() =>
    {
        updateNavbar();
        window.addEventListener('scroll', updateNavbar)
    })

    return (
        <>
            <nav className="flex flex-row p-4 px-8 items-center justify-between w-full fixed duration-150 z-30 bg-white shadow">
                <Link href="/">
                    <span className="text-2xl tracking-widest uppercase">Corporation</span>
                </Link>

                <button className="md:hidden flex flex-col justify-center" onClick={handleMenu}>
                    <Image src="/img/icons/burger-icon.svg" height="32px" width="32px" alt="burger icon"></Image>
                </button>

                <ul className="hidden md:flex flex-row items-center gap-4">
                    <li>
                        <Link href="/">
                            <button className="text-purple-900 text-lg hover:text-purple-400 duration-150">
                                Dónde estamos
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <button className="text-white bg-purple-500 p-2 px-4 rounded-lg text-lg hover:text-white hover:bg-purple-400 hover:shadow duration-150">
                                Empezar
                            </button>
                        </Link>
                    </li>
                </ul>
            </nav>

            {
                // responsive menu when toggled
            }
            <div className={(!isMenuOpen ? '-translate-y-96' : 'translate-y-0') + " bg-white z-20 fixed top-16 right-0 w-screen duration-500 md:hidden"}>
                <ul className="flex flex-col p-4 gap-4">
                    <li className="flex flex-col justify-end">
                        <Link href="/">
                            <button className="text-lg self-end text-black flex">
                                Dónde estamos
                            </button>
                        </Link>
                    </li>
                    <li className="flex flex-col justify-end">
                        <Link href="/">
                            <button className="text-lg self-end text-black flex font-medium">
                                Empezar
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
    </>
    )
}