import { Card, Grid, Text, Link } from "@nextui-org/react";
import React from "react";
import { ISoftware } from "../../interfaces";
import { CardInfo } from "../ui";
import oracleSql from "../../assets/software/oracleSql.png";
import sqlServer from "../../assets/software/sqlserver.png";
import mysql from "../../assets/software/mysql.png";
import mongodb from "../../assets/software/mongodb.png";
import github from "../../assets/software/github.png";
import java from "../../assets/software/java.png";
import cSharp from "../../assets/software/cSharp.png";
import typescript from "../../assets/software/ts.png";
import javascript from "../../assets/software/javascript.png";
import react from "../../assets/react.svg";
import nextjs from "../../assets/software/nextjs.png";
import node from "../../assets/software/node.png";
import ionic from "../../assets/software/ionic.png";



export const ConInformaticos:React.FC = () => {
  const software: ISoftware[] = [
    {
      img: oracleSql,
      title: "Oracle SQL 11g",
      subTitle: "oracle.com",
      description:
        "Oracle SQL proporciona una arquitectura sencilla, elegante y eficaz para acceder, definir y mantener los datos. Utilice SQL con Oracle y PHP, Java, Python, .NET, Hadoop, Node.js o APEX.",
      link: "https://www.oracle.com/cl/database/technologies/appdev/sql.html",
    },
    {
      img: sqlServer,
      title: "SQL Server",
      subTitle: "microsoft.com",
      description:
        "Microsoft SQL Server es un sistema de gestión de base de datos relacional, desarrollado por la empresa Microsoft.",
      link: "https://www.microsoft.com/es-es/sql-server/sql-server-2019",
    },
    {
      img: mysql,
      title: "MySQL",
      subTitle: "mysql.com",
      description:
        "MySQL es un sistema de gestión de bases de datos relacional desarrollado bajo licencia dual: Licencia pública general/Licencia comercial por Oracle Corporation y está considerada como la base de datos de código abierto más popular del mundo, y una de las más populares en general junto a Oracle y Microsoft SQL Server, todo para entornos de desarrollo web.",
      link: "https://www.mysql.com/es/",
    },
    {
      img: mongodb,
      title: "MongoDB",
      subTitle: "mongodb.com",
      description:
        "MongoDB es un sistema de base de datos NoSQL, orientado a documentos y de código abierto.",
      link: "https://www.mongodb.com/es",
    },
    {
      img: github,
      title: "Github",
      subTitle: "github.com",
      description:
        "GitHub es una forja (plataforma de desarrollo colaborativo) para alojar proyectos utilizando el sistema de control de versiones Git. Se utiliza principalmente para la creación de código fuente de programas de ordenador. ",
      link: "https://www.github.com",
    },
    {
      img: java,
      title: "Java",
      subTitle: "java.com",
      description:
        "Java es una plataforma informática de lenguaje de programación creada por Sun Microsystems en 1995. Ha evolucionado desde sus humildes comienzos hasta impulsar una gran parte del mundo digital actual, ya que es una plataforma fiable en la que se crean muchos servicios y aplicaciones.",
      link: "https://www.java.com/es/",
    },
    {
      img: cSharp,
      title: "C#",
      subTitle: "microsoft.com",
      description:
        "C# es un lenguaje de programación multiparadigma desarrollado y estandarizado por la empresa Microsoft como parte de su plataforma .NET, que después fue aprobado como un estándar por la ECMA (ECMA-334) e ISO (ISO/IEC 23270). C# es uno de los lenguajes de programación diseñados para la infraestructura de lenguaje común",
      link: "https://learn.microsoft.com/es-es/dotnet/csharp/",
    },

    {
      img: typescript,
      title: "Typescript",
      subTitle: "typescriptlang.org",
      description:
        "TypeScript es un lenguaje de programación libre y de código abierto desarrollado y mantenido por Microsoft. Es un superconjunto de JavaScript, que esencialmente añade tipos estáticos y objetos basados en clases.",
      link: "https://www.typescriptlang.org/es/",
    },
    {
      img: javascript,
      title: "Javacript",
      subTitle: "oracle.com",
      description:
        "JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, basado en prototipos, imperativo, débilmente tipado y dinámico.",
      link: "https://www.oracle.com/cl/database/technologies/appdev/sql.html",
    },
    {
      img: react,
      title: "React",
      subTitle: "reactjs.org",
      description:
        "Una biblioteca de JavaScript para construir interfaces de usuario",
      link: "https://es.reactjs.org/",
    },
    {
      img: nextjs,
      title: "NextJS",
      subTitle: "nextjs.org",
      description:
        "Next.js es un marco web de desarrollo front-end de React de código abierto creado por Vercel que habilita funcionalidades como la representación del lado del servidor y la generación de sitios web estáticos para aplicaciones web basadas en React. Es un marco listo para producción que permite a los desarrolladores crear rápidamente sitios JAMstack estáticos y dinámicos y es ampliamente utilizado por muchas grandes empresas.",
      link: "https://nextjs.org/",
    },
    {
      img: ionic,
      title: "Ionic 6",
      subTitle: "ionicframework.com",
      description:
        "Ionic es un SDK completo de código abierto para el desarrollo de aplicaciones móviles híbridas creado por Max Lynch, Ben Sperry y Adam Bradley de Drifty Co. en 2013.",
      link: "https://ionicframework.com/",
    },
    {
      img: node,
      title: "Express NodeJS",
      subTitle: "expressjs.com",
      description:
        "Express.js o simplemente Express, es un entorno de trabajo para aplicaciones web para el programario Node.js, de código abierto y con licencia MIT. Se utiliza para desarrollar aplicaciones web y APIs. ",
      link: "https://expressjs.com/es/",
    },
  ];

  return (
    <Grid>
      
        <Card.Header>
          <Text h3>Conocimientos Informáticos</Text>
        </Card.Header>
        <Card.Body>
          <Grid.Container gap={2}>
            {software.map((soft: ISoftware, index) => (
              <CardInfo software={soft} key={index} />
            ))}
          </Grid.Container>
        </Card.Body>
     
    </Grid>
  );
};
