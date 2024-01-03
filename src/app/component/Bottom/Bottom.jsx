import Image from "next/image"
import Link from "next/link"
import { FaInstagramSquare, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Bottom = ({ data }) => {
    const { facebook, twitter, youtube, instagram } = data.instructor.social_media

    return (
        <div className="bottom px-20 mt-16">
            <h3 className='font-bold text-2xl'>About the Instructor</h3>
            <div className="flex mt-5">
                <Image src="/img.jpg" height={100} width={100} alt="pic" className="rounded-full me-10" />
                <div>
                    {data.about_instructor.html_content}
                </div>
            </div>

            <div className="icon flex justify-evenly ms-20 mt-5">
                {facebook && <Link href={'/'} > <i><FaFacebook /></i> Facebook</Link>}
                {twitter && <Link href={'/'} ><i><FaTwitter /></i>Twitter</Link>}
                {youtube && <Link href={'/'} ><i><FaYoutube /></i>Youtube</Link>}
                {instagram && <Link href={'/'} ><i><FaInstagramSquare /></i>Instagram</Link>}
            </div>
        </div>
    )
}

export default Bottom