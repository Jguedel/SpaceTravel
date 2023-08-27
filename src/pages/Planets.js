import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import NavBar from "../components/NavBar";
import PlanetList from "../context/PlanetList.js";
import ShipList from "../context/ShipList.js";
import { useEffect, useState } from "react";
//BOOTSTRAP
import { Container, Row, Col } from "react-bootstrap";
const Planets = () => {
  //STARTING PLANETS
  let planetRender = [];
  if (
    localStorage.getItem("allPlanetsList") === [] ||
    localStorage.getItem("allPlanetsList") !== null
  ) {
    planetRender = [...JSON.parse(localStorage.getItem("allPlanetsList"))];
  } else {
    planetRender = [...PlanetList];
  }
  // STARTING SHIPS
  let shipRender = [];
  if (
    localStorage.getItem("allShipList") === [] ||
    localStorage.getItem("allShipList") !== null
  ) {
    shipRender = [...JSON.parse(localStorage.getItem("allShipList"))];
  } else {
    shipRender = [...ShipList];
  }
  const [allPlanets, setAllPlanets] = useState(planetRender);
  const [isLoading, setIsLoading] = useState(true);
  const [shipToMove, setShipToMove] = useState(null);
  // SETTING PLANETS AFTER INITIAL
  useEffect(() => {
    setIsLoading((isLoading) => {
      return false;
    });
  }, []);
  useEffect(() => {
    let holderPlanets = allPlanets;
    allPlanets.forEach((planet, index) => {
      shipRender.forEach((ship) => {
        if (planet.Name === ship.PlanetOn) {
          let check = false;
          planet.Ships.forEach((info) => {
            if (info.Name === ship.Name) {
              check = true;
            }
          });
          if (!check) {
            holderPlanets[index].Ships.push(ship);
            holderPlanets[index].Population =
              parseInt(holderPlanets[index].Population) +
              parseInt(ship.Population);
          }
          setAllPlanets((allPlanets) => {
            return holderPlanets;
          });
        }
      });
    });
    localStorage.setItem("allPlanetsList", JSON.stringify(allPlanets));
  }, [allPlanets]);

  // MOVE SHIPS
  const changePlanetShip = (e) => {
    e.preventDefault();
    e.target.classList.add("clicked");
    setShipToMove((shipToMove) => {
      return e.target.name;
    });
  };
  const changeToPlanet = (e) => {
    e.preventDefault();
    let holderPlanets = allPlanets;
    if (shipToMove !== null) {
      allPlanets.forEach((planet, index) => {
        if (planet.Name === e.target.name) {
          shipRender.forEach((ship) => {
            if (ship.Name === shipToMove && planet.Name !== ship.PlanetOn) {
              ship.PlanetOn = planet.Name;
              holderPlanets[index].Ships.push(ship);
              holderPlanets[index].Population =
                parseInt(holderPlanets[index].Population) +
                parseInt(ship.Population);
              localStorage.setItem("allShipList", JSON.stringify(shipRender));
              localStorage.setItem(
                "allPlanetsList",
                JSON.stringify(allPlanets)
              );
            }
          });
        } else {
          planet.Ships.forEach((ship, sindex) => {
            if (ship.Name === shipToMove) {
              holderPlanets[index].Ships.splice(sindex, 1);
              holderPlanets[index].Population =
                parseInt(holderPlanets[index].Population) -
                parseInt(ship.Population);
            }
          });
        }
        setShipToMove((shipToMove) => {
          return null;
        });
      });
      setAllPlanets((allPlanets) => {
        return holderPlanets;
      });
    }
  };

  if (isLoading) {
    return (
      <Container>
        <Row className="justify-content-center loading">
          <Col sm="1">
            <FontAwesomeIcon icon={faSpinner} spin />
          </Col>
        </Row>
      </Container>
    );
  } else {
    return (
      <Container fluid>
        <NavBar />

        {allPlanets.map((props) => {
          return (
            <Row className="singlePlanet " key={props.key} name={props.Name}>
              <Col sm="2" className="planetPic no-float" name={props.Name}>
                <img
                  src={props.Img}
                  alt={props.Name}
                  name={props.Name}
                  onClick={changeToPlanet}
                />
                <p name={props.Name}>Name: {props.Name}</p>
                <p name={props.Name}>Population: {props.Population}</p>
              </Col>
              {shipRender.map((props2) => {
                if (props2.PlanetOn === props.Name) {
                  return (
                    <Col
                      className="planetShipInfo justify-content-center "
                      key={props2.key}
                      name={props2.Name}
                    >
                      <div className="shipsOnPlanet" name={props2.Name}>
                        <div name={props2.Name}>
                          <img
                            src={props2.Img}
                            alt={props2.Name}
                            name={props2.Name}
                            onClick={changePlanetShip}
                          />
                        </div>
                        <div name={props2.Name}>
                          <p name={props2.Name}>Name: {props2.Name}</p>
                          <p name={props2.Name}>
                            Passengers: {props2.Population}
                          </p>
                        </div>
                      </div>
                    </Col>
                  );
                }
              })}
            </Row>
          );
        })}
      </Container>
    );
  }
};
export default Planets;
