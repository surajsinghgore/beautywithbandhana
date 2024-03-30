import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { MdLocationOn } from "react-icons/md";
import { IoTimeOutline ,IoCallSharp } from "react-icons/io5";
export default function Home() {
  return (
    <main className={styles.main}>
   
<h2>Timing</h2>
<div className={styles.timing}>
<div className={styles.top}>Opening Hours</div>
<li>
<div className={styles.day}>
Monday
</div>
<div className={styles.time}>
    9:30 am - 4:30 pm
</div>
<div className={styles.btn}>

<Link href="https://www.fresha.com/a/beauty-with-bandhana-morley-289-benara-road-kixb51p0/booking?menu=true"><button>Book Now</button></Link>
</div>
</li>

<li>
<div className={styles.day}>
Tuesday
</div>
<div className={styles.time}>
    9:30 am - 4:30 pm
</div>
<div className={styles.btn}>

<Link href="https://www.fresha.com/a/beauty-with-bandhana-morley-289-benara-road-kixb51p0/booking?menu=true"><button>Book Now</button></Link>
</div>
</li>

<li>
<div className={styles.day}>
Wednesday
</div>
<div className={styles.time}>
    9:30 am - 4:30 pm
</div>
<div className={styles.btn}>

<Link href="https://www.fresha.com/a/beauty-with-bandhana-morley-289-benara-road-kixb51p0/booking?menu=true"><button>Book Now</button></Link>
</div>
</li>


<li>
<div className={styles.day}>
Thursday
</div>
<div className={styles.time}>
    9:30 am - 4:30 pm
</div>
<div className={styles.btn}>

<Link href="https://www.fresha.com/a/beauty-with-bandhana-morley-289-benara-road-kixb51p0/booking?menu=true"><button>Book Now</button></Link>
</div>
</li>


<li>
<div className={styles.day}>
Friday
</div>
<div className={styles.time}>
    9:30 am - 4:30 pm
</div>
<div className={styles.btn}>

<Link href="https://www.fresha.com/a/beauty-with-bandhana-morley-289-benara-road-kixb51p0/booking?menu=true"><button>Book Now</button></Link>
</div>
</li>


<li>
<div className={styles.day}>
Saturday
</div>
<div className={styles.time}>
   Closed
</div>
<div className={styles.btn}>


</div>
</li>

<li>
<div className={styles.day}>
Sunday
</div>
<div className={styles.time}>
   Closed
</div>
<div className={styles.btn}>


</div>
</li>


<li>
<div className={styles.day}>
(Easter Monday)
</div>
<div className={styles.time}>
   Closed
</div>
<div className={styles.btn}>


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
