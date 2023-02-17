import React from 'react'
import { Card, Col,  Grid,  Text } from "@nextui-org/react";
import { Box } from '../ui';

export const ExpLaboral:React.FC = () => {
  return (
    <>
    <Grid xs={12} sm={12}>
            <Card>
              <Card.Header>
                <Text h3>Experiencia Laboral</Text>
              </Card.Header>
              <Card.Body>
                <ul>
                  <li style={{ justifyContent: "flex-start", display: "flex" }}>
                    <Col>
                      <Text> Agosto 2022 - Febrero2023 </Text>
                    </Col>
                    <Col>
                      <Box>
                        <Text h4>Desarrollador HuemulSolutions SPA</Text>
                        <Text> Desarrollo de Aplicaciones Web en React JS, Integración de sistema de pago Transbank y Backend NodeJS Express </Text>
                      </Box>
                    </Col>
                  </li>
                  <li style={{ justifyContent: "flex-start", display: "flex" }}>
                    <Col>
                      <Text> Marzo 2022 - Actualidad </Text>
                    </Col>
                    <Col>
                      <Box>
                        <Text h4>Desarrollador APP's y Desarrollador PowerBI</Text>
                        <Text> Desarrollo de APP's web en ReactJS y Ionic 6 (Angular) y Desarrollo de Backend en NodeJS Express con Typescript. Desarrollo de Arquitectura e Implementacion de un Servidor para obtener datos para un Power BI </Text>
                      </Box>
                    </Col>
                  </li>
                  <li style={{ justifyContent: "flex-start", display: "flex" }}>
                    <Col>
                      <Text> Agosto 2020 - Diciembre 2020 </Text>
                    </Col>
                    <Col>
                      <Box>
                        <Text h4>Ayudante de Catedra Desarrollo de Software – DUOC UC</Text>
                        <Text> Desarrollo de aplicaciones en lenguaje de programación Java e implementación en IDE NetBeans 8.2</Text>
                      </Box>
                    </Col>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Grid>
    </>
  )
}
