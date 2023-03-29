import { Component } from "react";
import Books from "../data/history.json";
import { Row, Col, Card, Button } from "react-bootstrap";

class AllTheBooks extends Component {
    render() {
    return (
        <Row className="justify-content-center mt-4">
            {Books.map((param) => (
            <Col xs={3} className="mt-4">
                <Card className="h-100" key={param.asin}>
                    <Card.Img className="h-50" variant="top" src={param.img} alt={param.title} />
                    <Card.Body className="d-flex flex-column">
                        <Card.Title>{param.title}</Card.Title>
                        <Card.Text className="mt-2">{param.category}</Card.Text>
                        <Card.Text className="mt-2">{param.asin}</Card.Text>
                        <Button className="mt-auto" variant="danger">{param.price}</Button>
                    </Card.Body>
                </Card>
            </Col>
            ))}
        </Row>
    );
}
}

export default AllTheBooks;
