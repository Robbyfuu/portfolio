import React from "react";
import { Card, Grid, Text,Image } from "@nextui-org/react";
import { IPersonal } from "../../interfaces";

interface Props {
  img: string;
  personal: IPersonal;
}
export const DatosPersonales: React.FC<Props> = ({ img, personal }) => {
  const { name, phone, nationality, bornDate, email, residence } = personal;
  return (
    <>
    
      <Grid xs={12} sm={3} xl={3} css={{ paddingTop: "2%", maxHeight: "350px" }} >
        
          <Image
            src={img}
            alt={"Me"}
            width="100%"
            css={{
              objectFit: "contain",
              minHeight: "390px",
              maxHeight: "500px",
            }}
          />
        
      </Grid>
      <Grid
        xs={12}
        sm={9}
        xl={9}
        css={{ paddingLeft: "2%", paddingRight: "2%" }}
      >
        <Card>
          <Card.Body>
            <Grid.Container>
              <Grid xs={12} sm={12}>
                <Text h3>Datos Personales</Text>
              </Grid>
              <Grid xs={12} sm={6}>
                <ul>
                  <li>
                    {" "}
                    <Text h4>Nombre Completo:</Text> {name}
                  </li>
                  <li>
                    <Text h4>Fecha de Nacimiento:</Text> {bornDate}
                  </li>
                  <li>
                    <Text h4>Teléfono:</Text> {phone}
                  </li>
                </ul>
              </Grid>
              <Grid xs={12} sm={6}>
                <ul>
                  <li>
                    {" "}
                    <Text h4>Email:</Text>
                    {email}{" "}
                  </li>
                  <li>
                    {" "}
                    <Text h4>Nacionalidad:</Text> {nationality}
                  </li>
                  <li>
                    {" "}
                    <Text h4>Residencia:</Text> {residence}{" "}
                  </li>
                </ul>
              </Grid>
            </Grid.Container>
          </Card.Body>
        </Card>
      </Grid>

    
    
    
    </>

  );
};
