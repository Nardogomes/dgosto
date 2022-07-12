import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { Home } from "./pages/Home";
import { Bolos } from "./pages/Bolos";

import { GlobalStyled } from "./global";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/bolos" element={<Bolos />} />
      </Routes>
      <GlobalStyled />
    </BrowserRouter>
  );
}
