import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { MdLocationOn } from "react-icons/md";
import { IoTimeOutline ,IoCallSharp } from "react-icons/io5";
export default function Home() {
  return (
    <main className={styles.main}>
   
<h2>About Us</h2>

<div className={styles.about}>
<div className={styles.left}>
    <div className={styles.image}>
<Image src="/about.jpeg" alt="about" layout="fill" priority />
    </div>
</div>
<div className={styles.right}>
    <p>If you are looking for the best beauty services ranging from threading, facial, haircuts and more, you can walk in here. Graduating from the best beauty schools, and working with top beauty professionals we have mastered the skills of delivering the best beauty and spa services in town.
Over the years we have served hundreds of happy clients who trust us for their look for important occasions like weddings, corporate parties, concerts, events and more. So, whether it is a quick touch-up or detailed beauty therapies, we are here to help you.</p>
<Link href={"https://www.fresha.com/a/beauty-with-bandhana-morley-289-benara-road-kixb51p0/booking?menu=true"}><button>BOOK ONLINE SERVICE</button></Link>
</div>
</div>

   {/* footer */}
   <footer>
   Copyright ©2024 All rights reserved | This template is made with 💖 by <span>BEAUTY WITH BANDHANA</span>
   </footer>
    </main>
  );
}
