'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import style from './nav.module.css'

const Nav = () => {

    const pathname = usePathname()
    return (
        <>
            <nav className='p-2 ms-10 flex justify-evenly w-1/2 uppercase nav'>
                <Link className={`link ${pathname === '/' ? 'active' : ''}`} href={'/'}>About</Link>
                <Link className={`link ${pathname === '/instructor' ? 'active' : ''}`} href={'/instructor'}>Instructor</Link>
                <Link className={`link ${pathname === '/reviews' ? 'active' : ''}`} href={'/reviews'}>Reviews</Link>
            </nav>
        </>
    )
}

export default Nav