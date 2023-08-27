import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
//ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthAmericas,
  faRocket,
  faMeteor,
} from "@fortawesome/free-solid-svg-icons";
const NavBar = () => {
  return (
    <Nav
      className="justify-content-center bg-black sticky-top"
      defaultActiveKey="/"
      as="ul"
    >
      <Nav.Item as="li">
        <Link to={"/spaceTravel"}>
          <FontAwesomeIcon icon={faEarthAmericas} /> Home
        </Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Link to={"/SpaceCraft"}>
          <FontAwesomeIcon icon={faRocket} /> Space Crafts
        </Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Link to={"/Planets"}>
          <FontAwesomeIcon icon={faMeteor} /> Planets
        </Link>
      </Nav.Item>
    </Nav>
  );
};

export default NavBar;
