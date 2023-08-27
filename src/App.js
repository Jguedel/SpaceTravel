//UTILES
import { BrowserRouter, Route, Routes } from "react-router-dom";
//PAGES
import Home from "./pages/Home.js";
import SpaceCraft from "./pages/SpaceCraft.js";
import Planets from "./pages/Planets.js";
//STYLE
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import ShipBuilder from "./pages/ShipBuilder.js";
import NavBar from "./components/NavBar.js";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/spaceTravel" element={<Home />} />
          <Route path="/SpaceCraft" element={<SpaceCraft />} />
          <Route path="/Planets" element={<Planets />} />
          <Route
            path="/*"
            element={
              <div>
                <NavBar />
                <h1
                  style={{
                    margin: "auto",
                    textAlign: "center",
                    color: "red",
                    fontSize: "5rem",
                  }}
                >
                  404 ERROR
                </h1>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
