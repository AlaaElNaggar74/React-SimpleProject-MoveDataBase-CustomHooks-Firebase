import "./App.css";

import { Routes, Route } from "react-router-dom";
import MoveDataBase from "./Component/MoveDataBase/MoveDataBase";
import HomePage from "./Component/HomePage/HomePage";
import NavBar from "./Component/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomePage/>
            </>
          }
        />
        <Route
          path="/MoveDataBase"
          element={
            <>
              <MoveDataBase/>
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
