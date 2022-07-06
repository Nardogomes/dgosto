import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";

import { GlobalStyled } from "./global";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <GlobalStyled />
    </BrowserRouter>
  );
}
