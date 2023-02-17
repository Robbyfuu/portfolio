import { Card, Col, Container, Grid, Row, Text } from "@nextui-org/react";
import React from "react";
import me from "../assets/me.jpeg";
import { ConInformaticos, DatosPersonales, ExpLaboral, InfoAcademica, Presentacion } from "../components/personal";
import { Box } from "../components/ui";
import { IPersonal } from "../interfaces";

export const Personal = () => {
  const personal: IPersonal = {
    name: "Roberto Hernán Arce Muñoz",
    bornDate: "25 de agosto de 1993 (29 años)",
    phone: "+56 9 96419674",
    email: "rarcemu@gmail.com",
    residence: "Las Condes, Región Metropolitana",
    nationality: "Chileno",
  };
  return (
    <>
      <Container>
        <Grid.Container gap={1}>
          <DatosPersonales img={me} personal={personal} />
          <Presentacion />
          <InfoAcademica />
          <ExpLaboral />
          <ConInformaticos />
        </Grid.Container>
      </Container>
    </>
  );
};
