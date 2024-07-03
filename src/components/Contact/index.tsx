"use client"
import { FormEvent } from "react";
import Button from "../Button";
import Heading from "../Heading";
import Input from "../Input";
import styles from "./contact.module.css";
import { Motion } from "../Motion";

const Contact = () => {

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('envio de formulario');
    
  }

  return (
    <Motion>
      <section className={styles.container} id="contact">
        <div className={styles.formContainer}>

          <Heading level={3} className={styles.formTitle}>
            ¿Querés contactarte conmigo?
          </Heading>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div>
              <Input type="text" label="Nombre completo" />
              <Input type="email" label="Correo electronico" />
              <Input type="text" label="Asunto" />
              <Input type="textarea" label="Mensaje" />
            </div>

            <div className={styles.button}>
              <Button type="submit">Enviar</Button>
            </div>
          </form>
            
        </div>
      </section>
    </Motion>
  )
}

export default Contact;