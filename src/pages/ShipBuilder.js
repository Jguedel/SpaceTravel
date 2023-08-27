import NavBar from "../components/NavBar";
import Form from "react-bootstrap/Form";
import uuid from "react-uuid";
//BOOTSTRAP
import { Container, Row, Col, Button } from "react-bootstrap";
const ShipBuilder = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addShip(
      e.target.fromName.value,
      e.target.fromCapacity.value,
      e.target.fromDescription.value,
      e.target.fromImg.value,
      "Earth",
      uuid()
    );
  };
  return (
    <Container>
      <NavBar />
      <Row className="justify-content-center newShipForm">
        <Col sm="6">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="fromName">
              <Form.Control type="text" placeholder="Name of Ship" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="fromCapacity">
              <Form.Control
                type="number"
                placeholder="Capacity of Ship"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="fromDescription">
              <Form.Control
                type="text"
                placeholder="Description of Ship"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="fromImg">
              <Form.Control
                type="text"
                placeholder="Picture URL of Ship"
                required
              />
            </Form.Group>
            <Button variant="light" type="submit">
              Create Ship
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default ShipBuilder;
