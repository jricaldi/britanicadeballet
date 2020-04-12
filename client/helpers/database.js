import React from "react";
import Scroll from "react-scroll";

import profesoraMilagros from "../images/profesora-milagros.jpg";
import profesoraDiana from "../images/profesora-diana.jpg";
import profesoraMargarita from "../images/profesora-margarita.jpg";

import clasesEnLinea from "../images/clases/clasesEnLinea.jpg";
import ballet from "../images/clases/ballet-2017.jpg";
import musica from "../images/clases/musica.jpg";
import danzaContemporanea from "../images/clases/danzaContemporanea.jpg";
import musicoterapia from "../images/clases/musicoterapia.jpg";

const Slink = Scroll.Link;

export const dataProfesoras = [
  {
    name: "Margarita",
    extraName: "Untiveros",
    details:
      "Desde 1995 es directora de la Academia Británica de Ballet, diplomada como profesora de la Royal Academy of Dance de Inglaterra. Inicia sus estudios de danza clásica a temprana edad en la Asociación Choriartium en Lima con la maestra Lucy Telge y paralelamente lleva cursos de música con Teresa Costa. En Caracas forma parte del grupo de danza de la Academia Interamericana de Ballet con el maestro Mario Ignisci y continúa sus estudios musicales en el conservatorio Juan José Landaeta de Caracas, tomando clases de perfeccionamiento de piano con la destacada pianista norteamericana Harriet Seher. Debido a su trayectoria musical y su afinidad por diversos idiomas ha implementado desde el año 2014 clases individuales de piano, violín y canto así como clases de alemán, ingles e italiano. Esta expansión extra-curricular permite a nuestras alumnas formarse en dichos rubros y tomar clases individuales antes o después de sus clases de ballet en nuestra academia.",
    image: profesoraMargarita,
    showSchedules: true,
    schedules: [
      {
        name: "Avanzadas",
        time: "Lunes y Miércoles 5:30pm - 7:00pm"
      },
      {
        name: "Adolescentes & Adultas principiantes",
        time: ["Lunes y Miércoles 7:00pm - 8:00pm", "Sabados 12:00pm - 1:30pm"]
      }
    ]
  },
  {
    name: "Milagros",
    extraName: "Nugent",
    details:
      "Se dedica a la enseñanza del ballet clásico y tap desde 1991 en nuestra academia. Inició sus estudios de ballet en la Academia de Ballet Miraflores. Culminó sus estudios en la Academia Británica de Ballet bajo la dirección de la Sra. Rosina Müller. Aprende el método de la Royal Academy of Dance de Londres. En el año 1988 se incorpora a la Cía. Danza Viva donde permanece hasta el año 1991. Actualmente es parte del staff de profesores de la Escuela Independiente Danza Viva y dicta clases en diversos nidos y colegios.",
    image: profesoraMilagros,
    showSchedules: true,
    schedules: [
      {
        name: "3 años",
        time: "Martes y Jueves 3:45pm - 4:30pm"
      },
      {
        name: "5 años",
        time: "Martes y Jueves 4:30pm - 5:30pm"
      },
      {
        name: "8 - 11 años",
        time: "Martes y Jueves 5:30pm - 6:30pm"
      }
    ]
  },
  {
    name: "Diana",
    extraName: "Untiveros",
    details:
      "Inicia sus estudios de ballet clásico a temprana edad en nuestra Academia con diferentes maestras, entre ellas Rosina Müller. Paralelamente lleva cursos de música. En enero del 2014 culmina sus estudios de Musicología e Italiano en Alemania. Además de enseñar ballet y tap, es profesora particular de piano, canto e idiomas en la Academia Británica de Ballet.",
    image: profesoraDiana,
    showSchedules: true,
    schedules: [
      {
        name: "4 años",
        time: "Lunes y Miércoles 3:30pm - 4:30pm"
      },
      {
        name: "6 & 7 años",
        time: "Lunes y Miércoles 4:30pm - 5:30pm"
      },
      {
        name: "5 & 6 años",
        time: "Sábados 10:00am - 11:00am"
      },
      {
        name: "3 & 4 años",
        time: "Sábados 11:00am - 12:00pm"
      }
    ]
  }
];

export const dataClases = [
  {
    name: "Clases en línea",
    details: (
      <>
        Ofrecemos clases remotas grupales e individuales tanto de&nbsp;
        <Slink to="id-clases-ballet" smooth="easeInOutCubic" offset={-75}>
          ballet
        </Slink>
        ,&nbsp;
        <Slink to="id-clases-musica" smooth="easeInOutCubic" offset={-75}>
          música
        </Slink>{" "}
        e idiomas. Chequea nuestros horarios de clases grupales&nbsp;
        <Slink
          to="id-clases-ballet-horarios"
          smooth="easeInOutCubic"
          offset={-75}
        >
          acá.
        </Slink>{" "}
        Para una mejor interacción entre profesora & alumnas y asegurar la
        privacidad de nuestra comunidad, dictamos las clases usando{" "}
        <a href="https://zoom.us" target="_blank">
          zoom
        </a>
        .
      </>
    ),
    noColunmsText: true,
    image: clasesEnLinea,
    showSchedules: true,
    showClass: true,
    enableSendEmails: false,
    scrollId: "id-clases-en-linea",
    schedules: [
      {
        name:
          'Solicita más información a nuestro correo: <a style="color:#3e3a3a" href="mailto:britanicaballet@gmail.com?Subject=Consulta%20de%20horarios-clases%20privadas">britanicaballet@gmail.com</a>'
      }
    ]
  },
  {
    name: "Ballet",
    details:
      "Entendemos que al ser parte del desarrollo artístico de nuestras alumnas, estamos formando el crecimiento humano en cada una de ellas. Tenemos el privilegio de cumplir esta labor  desde 1956. Seguimos la metodología de ballet clásico de la Royal Academy of Dance de Inglaterra que introdujo a Lima nuestra fundadora la maestra inglesa Rosina Müller. Fuimos los primeros en introducir el Tap en el Perú y es por eso que a partir del grado Pre-primary 2 nuestras alumnas se forman con dos tipos de danza: la hora de clase se divide en 45min de ballet y 15min de Tap. Nuestras alumnas se benefician con descuentos en clases individuales de música. Ofrecemos clases de piano, canto y teoría musical en nuestra academia.",
    image: ballet,
    showSchedules: true,
    showClass: true,
    enableSendEmails: false,
    scrollId: "id-clases-ballet",
    schedules: [
      {
        name: "Lunes y Miércoles",
        time: [
          "3:30pm - 4:30pm (4 años)",
          "4:30pm - 5:30pm (6 & 7 años)",
          "5:30pm - 7:00pm (Avanzadas)",
          "7:00pm - 8:00pm (Adolescentes y Adultas principiantes)"
        ]
      },
      {
        name: "Martes y Jueves",
        time: [
          "3:45pm - 4:30pm (3 años)",
          "4:30pm - 5:30pm (5 años)",
          "5:30pm - 6:30pm (8 - 11 años)"
        ]
      },
      {
        name: "Sábados",
        time: [
          "10:00am - 11:00am (5 & 6 años)",
          "11:00am - 12:00pm (3 & 4 años)",
          "12:00pm - 1:30pm (Adolescentes y Adultas principiantes)"
        ]
      }
    ]
  },
  {
    name: "Música",
    details:
      'Expande tu desarrollo artístico con nuestras clases individuales de música. Ofrecemos clases de piano, canto, violín y teoría musical en nuestra academia. Nuestros profesores son musicólogos graduados de la Universidad de Heidelberg - Alemania. Solicita los horarios disponibles escribiéndonos al siguiente correo: <a style="color:#3e3a3a" href="mailto:britanicaballet@gmail.com?Subject=Consulta%20de%20horarios-clases%20privadas">britanicaballet@gmail.com</a>',
    image: musica,
    showSchedules: true,
    showClass: true,
    enableSendEmails: false,
    scrollId: "id-clases-musica",
    schedules: [
      {
        name: "Niños desde los 4 años, adolescentes y adultos"
      }
    ]
  },
  {
    name: "Danza",
    extraName: "Contemporánea",
    details:
      "Desarrolla tu creatividad y sensibilidad artística aprendiendo las técnicas básicas de la Danza Contemporánea. Si sientes motivación por expresarte mediante el cuerpo, deseas cargarte de energía, mantenerte en forma e iniciarte dentro de esta bella disciplina, solicita una clase de prueba con nosotros.",
    image: danzaContemporanea,
    showSchedules: true,
    showClass: false,
    enableSendEmails: false,
    scrollId: "id-clases-danza",
    schedules: [
      {
        name: "Adolescentes & Adultas principiantes",
        time: "Jueves 6:30pm - 8:00pm"
      }
    ]
  },
  {
    name: "Musicoterapia",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    image: musicoterapia,
    showSchedules: false,
    showClass: false,
    enableSendEmails: false,
    schedules: [
      {
        name: "5 años en adelante"
      }
    ]
  }
];
