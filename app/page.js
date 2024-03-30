import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
   
   <div className={styles.topHomeSection}>
<div className={styles.bookOnline}>
  <h1>Welcome to Beauty With Bandhana</h1>
  <p>Experience our most potent and rapid peel,utilizing a unique three-acid approach for personalized deep exfoliation.</p>
  
  <Link href="https://www.fresha.com/a/beauty-with-bandhana-morley-289-benara-road-kixb51p0/booking?employeeId=2807218"><button>BOOK ONLINE SERVICES</button></Link>
</div>
   </div>
    </main>
  );
}
