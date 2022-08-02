import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile/Profile";
import { GlobalStyle } from "./styles/global";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Profile />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
