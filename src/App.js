import React from "react";
import { Router, Routes, Route} from "react-router-dom";
import Profile from "./pages/Profile/Profile";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
