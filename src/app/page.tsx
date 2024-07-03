import styles from "./page.module.css";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import About from "@/components/About";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar/>
      <div className={styles.container}>
        <About />
        <Contact />
      </div>
    </main>
  );
}
