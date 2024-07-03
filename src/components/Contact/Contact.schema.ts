import * as Yup from "yup";
import { contact } from "./Contact.data";

export const contactSchema = Yup.object().shape({
  fullName: Yup.string().matches(new RegExp(contact.nombre.pattern), contact.nombre.error).required(contact.nombre.error),
  email: Yup.string().email(contact.correo.error).matches(new RegExp(contact.correo.pattern), contact.correo.error).required(contact.correo.error),
  subject: Yup.string().required(contact.asunto.error),
  message: Yup.string().matches(new RegExp(contact.mensaje.pattern), contact.mensaje.error).required(contact.mensaje.error),
});