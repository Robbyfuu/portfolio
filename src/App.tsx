import { useState } from "react";
import {  NextUIProvider } from "@nextui-org/react";
import { BrowserRouter } from "react-router-dom";

import { darkTheme, lightTheme } from "./themes";
import { NavbarComponent } from "./components/ui";



import "./App.css";
import reactLogo from "./assets/react.svg";
function App() {
  const [theme, setTheme] = useState(false);
  return (
    <NextUIProvider theme={theme ? lightTheme : darkTheme}>
      <BrowserRouter>
        <NavbarComponent setTheme={setTheme} logo={reactLogo} estado={theme} />
      </BrowserRouter>
    </NextUIProvider>
  );
}

export default App;
