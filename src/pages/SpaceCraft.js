import NavBar from "../components/NavBar";
//BOOTSTRAP
import { Container, Row, Col, Button } from "react-bootstrap";
//ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHammer,
  faTrashCan,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import ShipBuilder from "./ShipBuilder";
import ShipList from "../context/ShipList";
//need to add in loading functionality
const SpaceCraft = () => {
  let shipRender = [];
  if (
    localStorage.getItem("allShipList") === [] ||
    localStorage.getItem("allShipList") !== null
  ) {
    shipRender = [...JSON.parse(localStorage.getItem("allShipList"))];
  } else {
    shipRender = [...ShipList];
  }
  const [isLoading, setIsLoading] = useState(true);
  const [isBuilding, setIsBuilding] = useState(false);
  const [ships, setShips] = useState(shipRender);
  // SET LOADING
  useEffect(() => {
    setIsLoading((isLoading) => {
      return false;
    });
  }, []);
  // ADD SHIPS TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("allShipList", JSON.stringify(ships));
    setIsLoading((isLoading) => {
      return false;
    });
  }, [ships]);
  // HANDLE DEL OR INFO CLICK
  const handleShipInfo = (e) => {
    e.preventDefault();
    if (e.target.classList.contains("delBtn")) {
      setShips(ships.filter((ship) => ship.Name !== e.target.name));
      localStorage.setItem("allShipList", JSON.stringify(ships));
    } else {
      //ADD SCREEN TO PULL SHIPS INFO UP
      console.log("not delBtn");
    }
  };
  // HANDLE SHIP BUILD CLICK
  const handleBuilding = (e) => {
    e.preventDefault();
    setIsBuilding((isBuilding) => {
      return true;
    });
  };
  // ADD SHIP FUNCTION
  const addShip = (Name, Population, Description, Img, PlanetOn, key) => {
    setShips((ships) => [
      ...ships,
      { Name, Population, Description, Img, PlanetOn, key },
    ]);
    setIsBuilding((isBuilding) => false);
    setIsLoading((isLoading) => {
      return true;
    });
  };
  if (isLoading) {
    return (
      <Container>
        <NavBar />
        <Row className="justify-content-center loading">
          <Col sm="1">
            <FontAwesomeIcon icon={faSpinner} spin />
          </Col>
        </Row>
      </Container>
    );
  } else if (isBuilding) {
    return <ShipBuilder addShip={addShip} />;
  } else {
    return (
      <Container>
        <NavBar />
        <Row className="firstRow">
          <Col>
            <Button variant="outline-light" onClick={handleBuilding}>
              <FontAwesomeIcon icon={faHammer} /> Build a Ship
            </Button>
          </Col>
        </Row>
        {/* single ship example - going to need to map through array for actual */}
        {ships.map((props) => {
          return (
            <Row
              className="singleShip"
              onClick={handleShipInfo}
              key={props.key}
            >
              <Col sm="2" className="shipPicture">
                <img src={props.Img} alt="Space Ship" />
              </Col>
              <Col sm="8" className="shipInfo">
                <p>Name: {props.Name}</p>
                <p>Capasity: {props.Population}</p>
              </Col>
              <Col sm="1" className="destroyBtn ">
                <Button
                  variant="outline-danger"
                  className="delBtn"
                  name={props.Name}
                  onClick={handleShipInfo}
                >
                  Destroy <FontAwesomeIcon icon={faTrashCan} />
                </Button>
              </Col>
            </Row>
          );
        })}
      </Container>
    );
  }
};
export default SpaceCraft;
