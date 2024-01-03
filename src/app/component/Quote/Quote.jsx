import Image from 'next/image';
import React from 'react'

const Quote = ({ data }) => {

    console.log(data.testimonial.reviewer_name);

    return (
        <div className="quote grid place-items-center bg-slate-300 w-4/5 mx-auto mt-10 mb-5 py-10 ">
            <p className='w-3/5 font-bold text-lg'> &#8216;&#8216;{data.testimonial.text}&#8217;&#8217;</p>
            <div className='flex mt-5'>
                <div className='grid place-items-center'>
                    <Image src="/img.jpg" height={20} width={20} alt="pic" className="rounded-full me-10" />
                </div>
                <div>
                    <p className='font-semibold '>{data.testimonial.reviewer_name}</p>
                    <p>{data.testimonial.reviewer_designation}</p>
                </div>
            </div>
        </div>
    )
}

export default Quote;