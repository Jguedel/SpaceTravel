//COMPONENTS
import NavBar from "../components/NavBar";
//BOOTSTRAP
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  return (
    <Container fluid>
      <NavBar />
      <Row className="justify-content-center">
        <Col sm="6" className="Heading firstRow">
          <p>Space Travel: Expanding Horizons Beyond Earth</p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col sm="8" className="homeContent">
          <p className="homeContentHead">Journey into the Future:</p>
          <p className="homeContentBody">
            In a world where the imppossible has become reality, where the
            starts are no longer out of reach. Welcome to the future of
            humanity's survival and exploration. Witness the evolution of
            technology as it transforms barren planets into thriving havens, all
            made possible by the wonderd of innovation and human determination
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col sm="8" className="homeContent">
          <p className="homeContentHead">From Neglect to Innovation:</p>
          <p className="homeContentBody">
            Once the craddle of civilization, Earth now stands as a solem
            reminder of the consequnces of neglect and enviromental decline. But
            fear not, for ingenuity of mankind has soarded to new heights. With
            our relentless pursuit of advancment, we have not only healed our
            scars but extended our reach accross the cosmos
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col sm="8" className="homeContent">
          <p className="homeContentHead">
            Enter Space Travel, Where Dreams Take Flight:
          </p>
          <p className="homeContentBody">
            Embark on an extraodinary journey with our groundbreaking web
            application. As a commander, the fate of humanity's exudos rests in
            your hands. Prepare to face the ultimate challenge, Evacuating
            humankind from their birthplace and guide them to a future in the
            stars!
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col sm="8" className="homeContent">
          <p className="homeContentHead">
            Enter Space Travel, Where Dreams Take Flight:
          </p>
          <p className="homeContentBody">
            Space Travel empowers you to engineer, design, and even dismatle
            spacecraft. Craft vessels that defy the boundaries of imagination,
            envision a future where life flourishes beyond the stars. But
            remember your role extends beyond construction. You are a leader, an
            explorer, a commander steering humanity's destiny.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col sm="8" className="homeContent">
          <p className="homeContentHead">A Universe of Possiblilites Awaits:</p>
          <p className="homeContentBody">
            Immerse yourself in the thrill of space exploration as you chart
            interplanetary courses within our solar system. Seemlessly navigate
            you fleet of spacecraft hurtling through the cosmic void. The
            Universe is your playground, and every planet is a potential new
            home
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
