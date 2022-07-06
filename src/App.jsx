import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Signin } from "./pages/Signin";

import { GlobalStyled } from "./global";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
      </Routes>
      <GlobalStyled />
    </BrowserRouter>
  );
}
