import Image from "next/legacy/image";
import Link from "next/link";
import { FaFacebookF ,FaInstagram} from "react-icons/fa";
import { CiMail } from "react-icons/ci";
export default function index() {
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
  <div className="line active"><Link href="/"> <hr /></Link></div>
  <div className="text"><Link href="/">HOME</Link></div>
  </li>
  {/* services */}
  <li>
  <div className="line" style={{width:"53%"}}><Link href="/"> <hr /></Link></div>
  <div className="text"><Link href="/">OUR SERVICES</Link></div>
  </li>

   {/* ABOUT US */}
   <li>
  <div className="line" style={{width:"62%"}}><Link href="/"> <hr /></Link></div>
  <div className="text"><Link href="/">ABOUT US</Link></div>
  </li>

  {/* ABOUT US */}
  <li>
  <div className="line" style={{width:"63%"}}><Link href="/"> <hr /></Link></div>
  <div className="text"><Link href="/">CONTACT</Link></div>
  </li>

  {/* LOCATION */}
  <li>
  <div className="line"><Link href="/"> <hr /></Link></div>
  <div className="text"><Link href="/">TIME</Link></div>
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
