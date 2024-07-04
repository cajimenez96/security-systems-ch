"use client"
import { links, title } from "./Navbar.data";
import Image from "next/image";
import styles from "./navbar.module.css";
import avatar from "../../../public/assets/avatar.png";
import Link from "next/link";
import { Motion } from "../Motion";

const Navbar = () => {
  
  return (
    <Motion>
      <nav className={styles.navbar}>
        <Link href="#" className={styles.containerLogo}>
            <Image src={avatar} alt="Avatar" className={styles.avatar} />
            <p className={styles.name}>{title}</p>
        </Link>


        <ul className={styles.list}>
          {links.map(element => (
            <Link href={element.url} key={element.id} className={styles.link}>
              {element.name}
            </Link>
          ))}
        </ul>

      </nav>
    </Motion>
  );
};

export default Navbar;
