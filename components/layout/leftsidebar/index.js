"use client";
import Image from "next/legacy/image";
import Link from "next/link";
import { FaFacebookF ,FaInstagram} from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { usePathname } from 'next/navigation';

export default function Index() {
  const currentPage = usePathname();
  return (
    <div className="leftsidebar">
      {/* top icon section */}

<div className="innerMain">
{/* brand name section */}
<div className="brandName">

{/* logo section */}
<div className="logo">
  <Image src={"/logo.png"} alt="logo image" layout="fill" priority/>
</div>
{/* brand name */}
<div className="brandNameText">
 <h2>
 BeautyWithBandhana
 </h2>
 <p>Radiate beauty, illuminate your soul.</p>
</div>
</div>


{/* main links */}
<div className="mainLinks">
{/* bg image */}
<div className="bgImageBanner">
<Image src={"/leftsidebanner.jpg"} alt="leftsidebanner image" className="leftsidebarImage" layout="fill" priority/>
</div>
{/* home */}
  <li>
  <div className={(currentPage=="/")?"line active":"line"}><Link href="/"> <hr /></Link></div>
  <div className="text"><Link href="/">HOME</Link></div>
  </li>
  {/* services */}
  <li>
  <div className={(currentPage=="/services")?"line active":"line"} style={{width:"53%"}}><Link href="/services"> <hr /></Link></div>
  <div className="text"><Link href="/services">OUR SERVICES</Link></div>
  </li>

   {/* ABOUT US */}
   <li>
  <div className={(currentPage=="/about")?"line active":"line"} style={{width:"62%"}}><Link href="/"> <hr /></Link></div>
  <div className="text"><Link href="/">ABOUT US</Link></div>
  </li>

  {/* ABOUT US */}
  <li>
  <div className={(currentPage=="/contact")?"line active":"line"} style={{width:"63%"}}><Link href="/contact"> <hr /></Link></div>
  <div className="text"><Link href="/contact">CONTACT</Link></div>
  </li>

  {/* LOCATION */}
  <li>
  <div className={(currentPage=="/time")?"line active":"line"}><Link href="/time"> <hr /></Link></div>
  <div className="text"><Link href="/time">TIME</Link></div>
  </li>
</div>
</div>




{/* social media links */}

<div className="bottomIcons">

  <div className="icons">
  <Link href="https://www.facebook.com/beautywithbandana/"><li title="Facebook"><i><FaFacebookF /></i></li></Link>

<Link href="https://www.instagram.com/beautywithbandhana/"><li title="Instagram"><i><FaInstagram/></i></li></Link>

<Link href="mailto: Bandhana@beautywithb.com.au"><li title="Send Message"><i><CiMail/></i></li></Link>

  </div>
  <div className="rightLine">
<hr />
  </div>
</div>

    </div>
  )
}
