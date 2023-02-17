import { useState } from "react";
import { Button, NextUIProvider } from "@nextui-org/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { darkTheme, lightTheme } from "./themes";
import { NavbarComponent } from "./components/ui";

//pages
import { Personal } from "./pages/";

import "./App.css";
import reactLogo from "./assets/react.svg";
function App() {
  const [theme, setTheme] = useState(false);
  return (
    <NextUIProvider theme={theme ? lightTheme : darkTheme}>
      <BrowserRouter>
        <NavbarComponent setTheme={setTheme} logo={reactLogo} />
        <Routes>
          <Route path="/" element={<Personal/>} />
          <Route path="/project" element={<h1>About</h1>} />
        </Routes>
      </BrowserRouter>
    </NextUIProvider>
  );
}

export default App;
