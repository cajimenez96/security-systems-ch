import Heading from "../Heading";
import { data } from "./About.data";
import styles from "./about.module.css";
import logo from "../../../public/assets/logo.jpg";
import Image from "next/image";
import Text from "../Text";
import { Motion } from "../Motion";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <Motion>
        <Heading level={1} className={styles.title}>
          {data.name}
        </Heading>
      </Motion>
      <div className={styles.containerInfo}>
        <div className={styles.description}>
          <Motion>
            <Text>{data.description}</Text>
          </Motion>
          <Motion>
            <Heading level={6} className={styles.interestsTitle}>{data.aditional}</Heading>
            <ul>
              {data.interests.map(i => (
                <li key={i.id}>{i.name}</li>
              ))}
            </ul>
          </Motion>
        </div>
        <Image src={logo} alt={data.name} className={styles.image} />
      </div>
    </section>
  )
}

export default About;
