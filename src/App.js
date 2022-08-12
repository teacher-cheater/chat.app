
import { Main } from "./components/Main/Main.jsx";
import { Room } from "./components/Rooms/Room.jsx";
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="wrapper">
      <BrowserRouter >
        <Routes>
          <Route
            path="/"
            element={
              <Main />
            } />
          <Route
            path="/room"
            element={
              <Room />
            } />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App;

