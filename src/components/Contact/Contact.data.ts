export const  contact = {
  nombre: { 
    id: 0,
    label: "Nombre completo",
    name: "fullName",
    inputType: "text",
    placeholder: "",
    pattern:"^[A-Za-z0-9 ]{3,20}$",
    required:true,
    error:"Debe ingresar un nombre entre 3 y 40 caracteres"
  },
  correo: {
    id: 1,
    label: "Correo electrónico",
    name: "email",
    inputType: "email",
    placeholder: "",
    pattern :"^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$",
    required:true,
    error:"Debe ingresar un correo electrónico válido"
  },
  asunto: {
    id: 2,
    label: "Asunto",
    name: "subject",
    inputType: "text",
    placeholder: "",
    pattern:"^[A-Za-z0-9 ]{3,20}$",
    required:true,
    error:"Debe ingresar una consulta entre 3 y 20 caracteres"
  },
  
  mensaje: {
    id: 3,
    label: "Mensaje",
    name: "message",
    inputType: "textarea",
    placeholder: "",
    pattern:"^[A-Za-z0-9 ]{3,300}$",
    required:true,
    error:"Debe ingresar un mensaje válido entre 3 y 300 caracteres."
  }
}