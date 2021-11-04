import Head from 'next/head'
import Image from 'next/image'

import Nav from './Nav.jsx'

import { useState, useEffect } from 'react';

export default function Layout({ children })
{
    return (
        <>
            <Head></Head>

            <Nav/>

            <main className="min-h-screen w-full flex flex-col box-border">
                {children}
            </main>

            <footer>
            </footer>
        </>
    )
}
