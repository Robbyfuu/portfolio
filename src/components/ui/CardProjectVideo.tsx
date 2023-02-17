import { Card, Col, Row, Button, Text, Spacer } from "@nextui-org/react";

import { IProjects } from "../../interfaces";

interface CardProjectProps {
    project:IProjects
}

export const CardProjectVideo:React.FC<CardProjectProps> = ({project}) => {

    const handleRedirect = () => {
        window.open(project.link)
    }
    const handleRedirectRepo = () => {
        window.open(project.repo)
    }

return(
  <Card css={{ w: "100%", h: "500px" }} isHoverable>
{/*     <Card.Header css={{ position: "absolute", zIndex: 1, top: 2,         bgBlur: "#ffffff66",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)", }}>
      <Text h2>{project.title}</Text>
    </Card.Header> */}
    <Card.Body>
    <iframe         width="100%"
        height="100%" src={project.img.length>0?project.img:'https://www.youtube.com/watch?v=MYhEavUds0o'} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
    </Card.Body>
      <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#ffffff66",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Text b color="#000" size={12}>
            {project.subTitle}
          </Text>
          <Text  color="#000" size={12}>
            {project.description}
          </Text>
        </Col>
        <Col>
          <Row  css={{flexDirection:'column',justifyContent:'flex-end',alignItems:'flex-end'}} >
            <Button flat auto rounded disabled color="secondary" onClick={handleRedirect} >
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                Ver Proyecto
              </Text>
            </Button>
            <Spacer y={0.5} />
            <Button flat auto rounded ghost color="gradient" onClick={handleRedirectRepo} >
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                transform="uppercase"
              >
                Ver Código
              </Text>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
)};
