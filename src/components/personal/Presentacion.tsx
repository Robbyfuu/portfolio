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
        Ingeniero Informático egresado del Instituto Profesional DUOC UC, soy una persona perseverante, planificado y orientado a obtener resultados, buena relación interpersonal, creativo, analítico y aprendizaje rápido.
        </Card.Body>
      </Card>
      <Spacer y={1} />
      <Card>
        <Card.Header>
            <Text h3>Motivación</Text>
        </Card.Header>
        <Card.Body>
        Intentar nutrirme con todo el mayor conocimiento que me da trabajar al lado de otros profesionales y poder poner en práctica todo el conocimiento adquirido en mi etapa de formación profesional para lograr todos los objetivos y metas de la empresa.
        </Card.Body>
      </Card>
      
    </Grid>
  );
};
