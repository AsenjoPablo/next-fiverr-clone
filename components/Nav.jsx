import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Nav()
{
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenu = () =>
    {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <>
            <nav className="z-30 flex flex-row p-4 px-8 items-center justify-between w-full bg-white fixed border-b-2">
                <Link href="/">
                    <div className="cursor-pointer flex flex-row gap-2 items-center hover:opacity-60 duration-200">
                        <div className="hidden md:flex">
                            <Image
                                className="hidden"
                                src="/images/logos/logo-small.svg"
                                alt="pizza place logo"
                                height="40"
                                width="40" />
                        </div>
                        <span className="text-2xl tracking-widest uppercase">Il ristorante</span>
                    </div>
                </Link>

                <button className="md:hidden flex flex-col justify-center" onClick={handleMenu}>
                    <Image src="/img/icons/burger-icon.svg" height="32px" width="32px" alt="burger icon"></Image>
                </button>

                <ul className="hidden md:flex flex-row items-center gap-4">
                    <li>
                        <Link href="/locales">
                            <button className="text-primary text-lg hover:text-primary-light duration-150">
                                Dónde estamos
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link href="/carta">
                            <button className="text-white bg-primary p-2 px-4 rounded-lg text-lg hover:text-white hover:bg-primary-light duration-150">
                                Ver carta
                            </button>
                        </Link>
                    </li>
                </ul>
            </nav>

            {
                // responsive menu when toggled
            }
            <div className={(!isMenuOpen ? '-translate-y-96' : 'translate-y-0') + " z-20 bg-white fixed top-16 right-0 w-screen duration-500 md:hidden"}>
                <ul className="flex flex-col p-4 gap-4">
                    <li className="flex flex-col justify-end">
                        <Link href="/locales">
                            <button className="text-2xl self-end text-black flex hover:text-primary-light duration-150">
                                Dónde estamos
                            </button>
                        </Link>
                    </li>
                    <li className="flex flex-col justify-end">
                        <Link href="/carta">
                            <button className="text-2xl self-end text-primary flex font-bold  hover:bg-primary-light duration-150">
                                Ver carta
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
    </>
    )
}