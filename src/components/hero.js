import heroimg from '../assets/hero2.svg';
import { FaLinkedin} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";


export default function Hero(){

return <section className='flex  flex-col md:flex-row bg-lightlaven  mx-6  py-20 md:py-28  px-6 rounded-b-2xl  text-black  '>
    <div className='md:w-1/2  text-4xl font-chalk    md:pt-12 text-center md:mr-14 md:leading-snug text-black flex flex-col' >
    <h1 >Hey !<br/>I'm Mohamed<span className='text-white font-marker hover:text-black cursor-pointer'> Haaroon,</span>
    <p className='text-2xl font-mono mt-2'>a dedicated frontend developer.</p>
     </h1>
     <div className='flex  mx-auto  md:justify-center mt-6'>
        <a href='#' className='ml-12 mr-10 text-black hover:text-white'><FaLinkedin size={40}/></a>
        <a href='#' className=' mr-16 md:mr-10 text-black hover:text-white'><AiFillInstagram size={40}/></a>
     </div>
     </div>
     <img  className=" md:w-1/2 mr-5 pt-8 md:pt-1 " src={heroimg}/>
    </section>
}  