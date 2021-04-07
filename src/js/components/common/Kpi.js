import { Card, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

const Kpi = (props) => {
    return (
        <Col>
            <Card className={`shadow h-100 py-2 bg-gradient-${props.gradient ? props.gradient : 'primary'}`}>
                <Card.Body>
                    <Row className="no-gutters align-items-center">
                        <Col className="mr-2">
                            <div className="h3 text-white text-uppercase mb-1">{props.title ? props.title : 'Kpi'}</div>
                            <div className="h1 mb-0 text-white">{props.value ? props.value : 'N.D.'}</div>
                        </Col>
                        <Col className="col-auto">
                            <FontAwesomeIcon icon={props.icon ? props.icon : faUsers} className="icon-dashboard fa-8x" />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Kpi;