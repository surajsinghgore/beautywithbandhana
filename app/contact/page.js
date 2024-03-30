import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { MdLocationOn } from "react-icons/md";
import { IoTimeOutline ,IoCallSharp } from "react-icons/io5";
export default function Home() {
  return (
    <main className={styles.main}>
   
<h2>Contact</h2>

<div className={styles.map}>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3388.155280339509!2d115.9256708!3d-31.875194200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32b1380f788bff%3A0x7dc4c8363d5b4c09!2sBeautywithbandhana!5e0!3m2!1sen!2sin!4v1711795304706!5m2!1sen!2sin"   referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>


<div className={styles.address}>
{/* location */}
<li>
    <div className={styles.left}><i><MdLocationOn /></i></div>
    <div className={styles.right}>
        <h3>Our Location</h3>
        <p>Hair District, shop 5/289 Benara Rd Cnr, Beechboro Rd N,Morley WA 6062</p>
    </div>
</li>

{/* timing */}
<li>
    <div className={styles.left}><i><IoTimeOutline /></i></div>
    <div className={styles.right}>
        <h3>Opening Hours</h3>
        <p>Mon - Fri: 9.30 am - 4:30 pm <br/> 
        Sat: Closed<br/>
        Sun: Closed <br/>
        (Easter Monday): Closed
        </p>
    </div>
</li>

{/* call */}
<li>
    <div className={styles.left}><i><IoCallSharp  /></i></div>
    <div className={styles.right}>
        <h3>Get In Touch</h3>
        <p> 0450 698 030 <br/>
        bandhana@beautywithb.<br/> com.au
        </p>
    </div>
</li>
</div>

   {/* footer */}
   <footer>
   Copyright ©2024 All rights reserved | This template is made with 💖 by <span>BEAUTY WITH BANDHANA</span>
   </footer>
    </main>
  );
}
