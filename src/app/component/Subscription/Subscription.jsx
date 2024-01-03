import { MdOutlineOndemandVideo } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import style from './subscription.module.css'

const Subscription = () => {
    return (
        <div className={`bg-slate-200 py-5 px-10 h-fit ${style.subscription}`}>
            <p className="font-semibold">Course fees</p>
            <p className="font-bold text-3xl">&#8377; 5000</p>
            <div>
                <h5 className="font-bold text-lg mt-3">What's included: </h5>
                <ul>
                    <li>
                        <i><MdOutlineOndemandVideo /></i>
                        5 on-demand videos
                    </li>
                    <li>
                        <i><MdOutlineOndemandVideo /></i>
                        2 live stream session
                    </li>
                    <li>
                        <i><MdOutlineOndemandVideo /></i>
                        Live Q&A with NITYANAND CHARAN DAS
                    </li>
                    <li>
                        <i><FaWhatsapp /></i>
                        An active whatsapp community
                    </li>
                </ul>
            </div>
            <button className="bg-violet-600 w-full text-white rounded-3xl py-2 font-semibold mt-7">Register today</button>
        </div>
    )
}

export default Subscription;