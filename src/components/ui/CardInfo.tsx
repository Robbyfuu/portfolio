import { Card, Link, Text, Grid } from "@nextui-org/react";
import React from "react";
import { ISoftware } from "../../interfaces";

interface Props {
  software: ISoftware;
}
export const CardInfo: React.FC<Props> = ({ software }) => {
  const { img, title, subTitle, description, link } = software;
  return (
    <Grid xs={12} md={6} lg={3}>
      <Card css={{ p: "$6", mw: "400px" }}>
        <Card.Header>
          <img alt={`${title}logo`} src={img} width="34px" height="34px" />
          <Grid.Container css={{ pl: "$6" }}>
            <Grid xs={12}>
              <Text h4 css={{ lineHeight: "$xs" }}>
                {title}
              </Text>
            </Grid>
            <Grid xs={12}>
              <Text css={{ color: "$accents8" }}>{subTitle}</Text>
            </Grid>
          </Grid.Container>
        </Card.Header>
        <Card.Body css={{ py: "$2" }}>
          <Text>{description}</Text>
        </Card.Body>
        <Card.Footer>
          <Link color="primary" target="_blank" href={link}>
            Ver más
          </Link>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
