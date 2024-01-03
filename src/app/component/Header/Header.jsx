"use client"

import style from './header.module.css'
import Nav from '../Navbar/Nav'
import { useEffect, useState } from 'react'

const Header = () => {

    const [data, setData] = useState()

    const fetchData = async () => {
        const res = await fetch('/api')
        const jsonData = await res.json()
        setData(jsonData.parsedData)
    }

    useEffect(() => {
        fetchData()
    }, [])



    return (
        <section>
            <div className={style.head}>
                <div className="text-danger absolute bottom-0 ps-20 pb-5 text-white ">
                    {
                        data && <>
                            <h1 className="name font-bold">{data.instructor.name}</h1>
                            <h3 className='text-3xl font-extrabold'>{data.course.title}</h3>
                        </>
                    }
                </div>
            </div>
            <Nav />
        </section>
    )
}

export default Header