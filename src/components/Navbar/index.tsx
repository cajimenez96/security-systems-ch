"use client"
import { useState } from "react";
import { links } from "./Navbar.data";
import { AiOutlineMenu, AiOutlineClose  } from "react-icons/ai";
import Image from "next/image";
import styles from "./navbar.module.css";
import avatar from "../../../public/assets/avatar.png";
import Link from "next/link";
import { Motion } from "../Motion";

const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);

  const openMenu = () => setNav(!nav);
  
  return (
    <Motion>
      <nav className={styles.navbar}>
        <Link href="#" className={styles.containerLogo}>
            <Image src={avatar} alt="Avatar" className={styles.avatar} />
            <p className={styles.name}>Carlos Jimenez</p>
        </Link>
        
        <div className={styles.menu} onClick={openMenu}>
          {!nav ? <AiOutlineMenu fill="#ffff" className={styles.bottonMenu} /> : <AiOutlineClose fill="#ffff" className={styles.bottonMenu}/> }
        </div>

        <ul className={`${styles.list} ${nav ? styles.open : styles.close}`}>
          {links.map(element => (
            <Link href={element.url} key={element.id}>
              {element.name}
            </Link>
          ))}
        </ul>
      </nav>
    </Motion>
  );
};

export default Navbar;
