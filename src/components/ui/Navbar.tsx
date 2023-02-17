import { Navbar, Button, Link, Text, Image, Spacer } from "@nextui-org/react";
import React from "react";
import { Box } from "./";

interface NavbarProps {
  setTheme: (theme: any) => void;
  logo: string;
}
export const NavbarComponent: React.FC<NavbarProps> = ({ setTheme, logo }) => {
  return (
    <Box css={{ maxW: "100%" }}>
      <Navbar isBordered variant="floating">
        <Navbar.Brand>
          <Text h2>R</Text>
          <Text h3 color="inherit" hideIn="xs">
            oberto 
          </Text>
          <Spacer x={0.3} />
          <Text h2 color="inherit" hideIn="xs">
            {" "}
            A
          </Text>
          <Text h3 color="inherit" hideIn="xs">
            rce
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant="highlight-rounded">
          <Navbar.Link href="/">I'm</Navbar.Link>

          <Navbar.Link href="project">Proyectos</Navbar.Link>
          
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Item>
            <Button
              auto
              flat
              onClick={() => setTheme((theme: boolean) => !theme)}
            >
              Tema
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    </Box>
  );
};
