import Image from "next/legacy/image";
import Link from "next/link";

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
  <div className="line"><Link href="/"> <hr /></Link></div>
  <div className="text"><Link href="/">HOME</Link></div>
  </li>
  {/* services */}
  <li>
  <div className="line" style={{width:"53%"}}><hr /></div>
  <div className="text">OUR SERVICES</div>
  </li>
</div>
</div>
    </div>
  )
}
