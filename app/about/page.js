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
<div className={styles.left}></div>
<div className={styles.right}></div>
</div>

   {/* footer */}
   <footer>
   Copyright ©2024 All rights reserved | This template is made with 💖 by <span>BEAUTY WITH BANDHANA</span>
   </footer>
    </main>
  );
}
