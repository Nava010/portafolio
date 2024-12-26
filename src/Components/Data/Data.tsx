import { FaFacebook } from "react-icons/fa6";
import { BiLogoInstagram } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoAngular } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoHtml5 } from "react-icons/io5";
import WorkingCenterGroup from "../../Images/WorkingCenterGroup.png";
import Platzi from "../../Images/Platzi.png";
import Webhelp from "../../Images/Webhelp.png";
import SCC from "../../Images/SCC.png"



export const icons = [
    {id: 1, icon: FaFacebook, url:"https://www.facebook.com/pablonavarreteB", color: "#1877F2" },
    {id: 2, icon: BiLogoInstagram, url:"https://www.instagram.com/pablonavarreteb/", color: "#8134AF" },
    {id: 3, icon: FaLinkedinIn, url:"https://www.linkedin.com/in/pablo-navarrete-bonilla-791799331/", color: "#0A66C2" },
    {id: 4, icon: IoLogoGithub, url:"https://github.com/Nava010", color: "#181717" },
]

export const contactIcons = [
    {id: 1 , icon: BiLogoGmail, color:"#D14836", text: "navarretebonillapablo@gmail.com"},
    {id: 2 , icon: FaLinkedinIn, url:"https://www.linkedin.com/in/pablo-navarrete-bonilla-791799331/", color:"#0A66C2", text: "LINKENDIN"},
    {id: 3 , icon: IoLogoGithub, url:"https://github.com/Nava010", color:"#181717", text: "GIT HUB"}
]
export const tabs = [
    { id: 1, label: 'PORTAFOLIO', active: false , hrefId: "#portfolio"},
    { id: 2, label: 'ACERCA DE MI', active: false, hrefId: "#aboutMe"},
    { id: 3, label: 'EXPERIENCIAS LABORALES', active: false, hrefId: "#workExperience" },
    { id: 4, label: 'CONTACTO', active: false, hrefId: "#contact" }
  ];
export const works = [
    {id:1, url: "/portafolio/Documents/77010240 - CERTIFICADO DE TRABAJO.pdf", img: WorkingCenterGroup, text:"Es mi primera experiencia laboral, hubo un excelente ambiente laboral y me acople a las normas y metas de la empresa", alt: "WorkingCenterGroup"  },
    {id:2, url: "/portafolio/Documents/SCC.pdf", img: SCC, text:"Fue mi segunda experiencia laboral ya contaba con experiencia previa y fue mas facil acoplarme a los objetivos de la empresa",alt: "Platzi"  },
    {id:3, url: "/portafolio/Documents/CertificadoTrabajo (91).pdf", img: Webhelp, text:"Es mi ultima carta de recomendacion, enfocado a servicios de atencion a cliente y area de ventas de call center",alt: "Webhelp"  },
    {id:4, url: "/portafolio/Documents/diploma-desarrollo-web.pdf", img: Platzi, text:"Mi diploma por completar el curso online de la Escuela de Desarrollo Web",alt: "Platzi" }
]
export const languageIcons = [
    {id:1, icon: IoLogoJavascript, title:"JAVASCRIPT", text: "Un lenguaje de programación dinámico y versátil diseñado principalmente para el desarrollo web. Permite crear páginas interactivas y dinámicas al manipular el DOM, interactuar con servidores mediante APIs y manejar eventos del usuario.", color: "#F7DF1E"},
    {id:2, icon: RiReactjsLine, title:"REACT", text: "Una biblioteca de JavaScript desarrollada por Facebook para construir interfaces de usuario de manera eficiente y declarativa. Permite crear componentes reutilizables que manejan su propio estado, lo que facilita el desarrollo de aplicaciones web dinámicas y rápidas.", color: "#61DAFB"},
    {id:3, icon: IoLogoAngular, title:"ANGULAR", text: "Un framework de desarrollo web de código abierto creado por Google. Está diseñado para construir aplicaciones web modernas y dinámicas, especialmente del lado del cliente, utilizando TypeScript como lenguaje base.", color: "#DD0031"},
    {id:4, icon: IoLogoCss3 , title:"CSS", text: "Un lenguaje utilizado para definir la presentación y el diseño de un documento HTML. Permite controlar aspectos como los colores, fuentes, márgenes, espaciados, y la disposición de los elementos en una página web. ", color: "#1572B6"},
    {id:5, icon: IoLogoHtml5, title:"HTML", text: "Es el lenguaje estándar utilizado para crear y estructurar contenido en la web. Se utiliza para definir elementos como encabezados, párrafos, imágenes, enlaces, tablas y otros componentes de una página web. ", color: "#E34F26"}
]
