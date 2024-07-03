import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar/>
      <Contact />
    </main>
  );
}
