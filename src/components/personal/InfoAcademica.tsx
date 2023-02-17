import React from 'react'
import { Card, Col,  Grid,  Text } from "@nextui-org/react";
import { Box } from '../ui';

export const InfoAcademica:React.FC = () => {
  return (
    <>
    <Grid xs={12} sm={12}>
            <Card>
              <Card.Header>
                <Text h3>Formación Académica</Text>
              </Card.Header>
              <Card.Body>
                <ul>
                  <li style={{ justifyContent: "flex-start", display: "flex" }}>
                    <Col>
                      <Text> 2019-2022 (Titulado) </Text>
                    </Col>
                    <Col>
                      <Box>
                        <Text h4>Instituto Profesional DUOC UC</Text>
                        <Text> Ingeniería en Informática</Text>
                      </Box>
                    </Col>
                  </li>
                  <li style={{ justifyContent: "flex-start", display: "flex" }}>
                    <Col>
                      <Text> 2013-2018 (Incompleta) </Text>
                    </Col>
                    <Col>
                      <Box>
                        <Text h4>Universidad Diego Portales</Text>
                        <Text> Ingeniería Civil Industrial</Text>
                      </Box>
                    </Col>
                  </li>
                  <li style={{ justifyContent: "flex-start", display: "flex" }}>
                    <Col>
                      <Text> 2006-2011 </Text>
                    </Col>
                    <Col>
                      <Box>
                        <Text h4>Instituto Regional Federico Errazuriz</Text>
                        <Text> Educación Básica y Media</Text>
                      </Box>
                    </Col>
                  </li>
                  <li style={{ justifyContent: "flex-start", display: "flex" }}>
                    <Col>
                      <Text> 1999-2005  </Text>
                    </Col>
                    <Col>
                      <Box>
                        <Text h4>Escuela Básica Mercedes Urzúa Díaz</Text>
                        <Text> Educación Básica</Text>
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
