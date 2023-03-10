import { Navbar, Button, Text, Spacer, Link } from "@nextui-org/react";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Layout } from "../layouts";

interface NavbarProps {
  setTheme: (theme: any) => void;
  logo?: string;
  estado?: boolean;
}
export const NavbarComponent: React.FC<NavbarProps> = ({
  setTheme,
  logo,
  estado,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const collapseItems = ["I'm", "Proyectos"];

  const handleNavigate = () => {
    navigate("/");
  };
  const handleNavigateProject = () => {
    navigate("/project");
  };
  return (
    <Layout>
      <Navbar isBordered variant={"floating"}>
        <Navbar.Toggle showIn={"xs"} />
        <Navbar.Brand>
          <Text h2>R</Text>
          <Text h3 color="inherit">
            oberto
          </Text>
          <Spacer x={0.3} />
          <Text h2 color="inherit">
            {" "}
            A
          </Text>
          <Text h3 color="inherit">
            rce
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs" variant="highlight-rounded">
          <Navbar.Item
            isActive={location.pathname === "/" ? true : false}
            activeColor={"secondary"}
            onClick={handleNavigate}
            css={{ cursor: "pointer" }}
          >
            I'm
          </Navbar.Item>
          <Navbar.Item
            isActive={location.pathname === "/project" ? true : false}
            activeColor={"secondary"}
            onClick={handleNavigateProject}
            css={{ cursor: "pointer" }}
          >
            Proyectos
          </Navbar.Item>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Item>
            <Text hideIn={"xs"} h4>
              {" "}
              Seleccion del Tema
            </Text>
          </Navbar.Item>
          <Navbar.Item>
            <Button
              auto
              flat
              onClick={() => setTheme((theme: boolean) => !theme)}
            >
              {estado ? (
                <svg
                  height="20"
                  viewBox="0 0 24 24"
                  width="20"
                  className="theme-selector-icon"
                >
                  <path
                    d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
                    fill="currentColor"
                  ></path>
                </svg>
              ) : (
                <svg
                  height="20"
                  viewBox="0 0 24 24"
                  width="20"
                  className="theme-selector-icon"
                >
                  <g fill="currentColor">
                    <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z"></path>
                    <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z"></path>
                  </g>
                </svg>
              )}
            </Button>
          </Navbar.Item>
        </Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="secondary"
              css={{
                color: index === collapseItems.length - 1 ? "$error" : "",
              }}
              isActive={
                index === 0
                  ? location.pathname === "/"
                    ? true
                    : false
                  : index === 1
                  ? location.pathname === "/project"
                    ? true
                    : false
                  : false
              }
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                onClick={() => {
                  if (index === 0) {
                    handleNavigate();
                  } else if (index === 1) {
                    handleNavigateProject();
                  }
                }}
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </Layout>
  );
};
