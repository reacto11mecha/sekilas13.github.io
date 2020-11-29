import { Card, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CardWrapper({ label, data, icon }) {
  return (
    <Card>
      <Card.Body>
        <Row className="justify-content-center h-100 d-flex">
          <Col md={4} className="text-center align-self-center">
            <FontAwesomeIcon icon={icon} size="6x" />
          </Col>
          <Col md={8} className="text-center align-self-center">
            <h4>{label}</h4>
            <h3>{data} Orang</h3>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default CardWrapper;
