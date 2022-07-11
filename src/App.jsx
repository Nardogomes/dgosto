import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Signin } from "./pages/Signin";
import { Home } from "./pages/Home";
import { Bolos } from "./pages/Bolos";

import { GlobalStyled } from "./global";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/bolos" element={<Bolos />} />
      </Routes>
      <GlobalStyled />
    </BrowserRouter>
  );
}
