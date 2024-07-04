"use client"
import { motion } from "framer-motion";
import styles from "./particleBackground.module.css"

const generateParticles = () => {
  const particles = [];
  for (let i = 0; i < 200; i++) {
    const size = Math.random() + 5;
    particles.push(
      <motion.div
        className={styles.particle}
        key={i}
        initial={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight*2,
          opacity: 0,
        }}
        animate={{
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight*2,
          opacity: Math.random(),
          scale: [0, 1, 0],
          transition: {
            duration: Math.random() * 10 + 5,
            repeat: Infinity,
            repeatType: 'loop',
          },
        }}
        style={{
          width: size,
          height: size,
        }}
      />
    );
  }
  return particles;
};

const ParticlesBackground = () => <div className={styles.container} id="tsparticles">{generateParticles()}</div>;

export default ParticlesBackground;
