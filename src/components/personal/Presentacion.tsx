import { Grid, Card,Text, Spacer } from "@nextui-org/react";
import React from "react";

export const Presentacion:React.FC = () => {
  return (
    <Grid>
      <Card>
        <Card.Header>
            <Text h3>Presentación</Text>
        </Card.Header>
        <Card.Body>
        Ingeniero Informático egresado del Instituto Profesional DUOC UC, soy una persona perseverante, planificada y orientada a obtener resultados, buena relación interpersonal, creativa, analítica, de aprendizaje rápido y gran capacidad de adaptabilidad.
        </Card.Body>
      </Card>
      <Spacer y={1} />
      <Card>
        <Card.Header>
            <Text h3>Motivación</Text>
        </Card.Header>
        <Card.Body>
        Nutrirme con el conocimiento que me entrega el trabajar en conjunto a otros profesionales y poder poner en práctica el conocimiento adquirido en mi etapa de formación profesional para lograr los objetivos y metas establecidas en la empresa, además de enfrentar nuevos desafíos y seguir creciendo como profesional. 
        </Card.Body>
      </Card>
      
    </Grid>
  );
};
