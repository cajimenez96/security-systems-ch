"use client"
import { FormEvent, useEffect, useState } from "react";
import Button from "../Button";
import Heading from "../Heading";
import Input from "../Input";
import { contact } from "./Contact.data";
import { Motion } from "../Motion";
import { useFormik } from 'formik';
import styles from "./contact.module.css";
import { FormData } from "./Contact.types";
import { contactSchema } from "./Contact.schema";
import Alert from "../Alert";

const INITIAL_STATE: FormData = {
  fullName: '',
  email: '',
  subject: '',
  message: '',
}

const Contact = () => {
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const sanitizedId = (id: number) => id.toString();

  const formik = useFormik<FormData>({
    initialValues: INITIAL_STATE,
    validationSchema: contactSchema,
    onSubmit: async (form: FormData) => {
      setShowAlert(true);
    }
  });

  useEffect(() => {
    setTimeout(() => setShowAlert(false), 30000);
  }, [showAlert])

  return (
    <Motion>
      <section className={styles.container} id="contact">
        <div className={styles.formContainer}>

          <Heading level={3} className={styles.formTitle}>
            ¿Querés contactarte conmigo?
          </Heading>

          <form onSubmit={formik.handleSubmit} className={styles.form}>
            <div>
              <Input
                label={contact.nombre.label}
                id={sanitizedId(contact.nombre.id)}
                name={contact.nombre.name}
                type={contact.nombre.inputType}
                handleChange={formik.handleChange}
                error={formik.errors.fullName}
                hasError={formik.touched.fullName}
                placeholder={contact.nombre.placeholder}
              />
              
              <Input
                label={contact.correo.label}
                id={sanitizedId(contact.correo.id)}
                name={contact.correo.name}
                type={contact.correo.inputType}
                handleChange={formik.handleChange}
                error={formik.errors.email}
                hasError={formik.touched.email}
                placeholder={contact.correo.placeholder}
              />
              
              <Input
                label={contact.asunto.label}
                id={sanitizedId(contact.asunto.id)}
                name={contact.asunto.name}
                placeholder={contact.asunto.placeholder}
                type={contact.asunto.inputType}
                handleChange={formik.handleChange}
                error={formik.errors.subject}
                hasError={formik.touched.subject}
              />
             
              <Input
                label={contact.mensaje.label}
                id={sanitizedId(contact.mensaje.id)}
                name={contact.mensaje.name}
                placeholder={contact.mensaje.placeholder}
                type={contact.mensaje.inputType}
                handleChange={formik.handleChange}
                error={formik.errors.message}
                hasError={formik.touched.message}
              />
            </div>

            <div className={styles.button}>
              <Button type="submit">Enviar</Button>
            </div>
            <Alert show={showAlert}>
              <p>Mensaje enviado con éxito</p>
            </Alert>
          </form>
            
        </div>
      </section>
    </Motion>
  )
}

export default Contact;