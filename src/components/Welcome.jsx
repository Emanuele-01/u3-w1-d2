import { Card, Button, Row, Col} from "react-bootstrap"

const Welcome = () => {
    return(
    <Row className="justify-content-center mt-4">
        <Col xs={8}>
            <Card className="text-center">
                <Card.Header>Books</Card.Header>
                <Card.Body>
                    <Card.Title>See Your Books</Card.Title>
                    <Card.Text>
                        HISTORY
                    </Card.Text>
                    <Button variant="danger"><strong>BUY</strong></Button>
                </Card.Body>
            </Card>
        </Col>
    </Row>
    )
    }

    export default Welcome;