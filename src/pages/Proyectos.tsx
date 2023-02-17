import { Grid } from '@nextui-org/react'
import React from 'react'
import { CardProject, CardProjectVideo } from '../components/ui'
import { IProjects } from '../interfaces/projects'

import pokePage from "../assets/projects/pokePage.png";
import bSale from "../assets/projects/bSale.png";
import ionic from "../assets/projects/ionic.mp4";


export const Proyectos = () => {

    const proyectos:IProjects[] = [
        {
            title: 'Poke App',
            subTitle: 'Proyecto realizado en NextJS (SSG) y Typescript',
            description: 'Al ingresar veras un card con los pokemons de la primera generacion y lo podras agregar a favoritos',
            img:pokePage,
            link: 'https://poke-nextjs-ts.vercel.app/',
            repo:'https://github.com/Robbyfuu/poke-nextjs-ts'
        },
        {
            title: 'bSale Prueba',
            subTitle: 'Proyecto Realizado en Javascript Vanilla',
            description: 'Al ingresar veras card de productos y los puedes agregar al carrito de compras',
            img:bSale,
            link: 'https://bsaletest-roberto-arce.netlify.app/#',
            repo:'https://github.com/Robbyfuu/bSale'
        },

    ]
    const proyectosVideo:IProjects[] = [
        {
            title: 'bSale Prueba',
            subTitle: 'Proyecto Realizado en Ionic6 y Angular',
            description: 'Proyecto consite en una app para reservar horas para un gym',
            img:ionic,
            link: 'https://bsaletest-roberto-arce.netlify.app/#',
            repo:'https://github.com/Robbyfuu/gimnasio-tsm-transfer-'
        },
        {
            title: 'bSale Prueba',
            subTitle: 'Proyecto Realizado en ReactJS',
            description: 'Proyecto es un app para administrar a los colaboradores de una empresa donde se le pueden agregar vacaciones, licencias, salario, etc.(POR MOTIVOS DE PRIVACIDAD NO SE MOSTRARA EL CODIGO)',
            img:'https://www.youtube.com/embed/MYhEavUds0o',
            link: 'https://bsaletest-roberto-arce.netlify.app/#',
            repo:'https://github.com/Robbyfuu?tab=repositories'
        }
    ]
  return (
    <Grid.Container gap={2} justify="center">
        {proyectos.map((project,key) => (
            <Grid xs={12} sm={6} key={key}>
                <CardProject project={project} />    
            </Grid>))}
        {proyectosVideo.map((project,key) => (
            <Grid xs={12} sm={6} key={key}>
                <CardProjectVideo project={project} />
            </Grid>))}

  </Grid.Container>
  )
}
