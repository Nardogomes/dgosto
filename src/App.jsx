import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Signin } from "./pages/Signin";
import { Home } from "./pages/Home";

import { GlobalStyled } from "./global";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <GlobalStyled />
    </BrowserRouter>
  );
}
