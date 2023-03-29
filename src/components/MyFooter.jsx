import {Col, Row, Card} from 'react-bootstrap'

const MyFooter = () => {
    return(
        <Row className="justify-content-center mt-4">
        <Col xs={12} className=''>
            <Card className="text-center bg-dark text-white">
                <Card.Body className='d-flex justify-content-center'>
                    <Card.Text className='me-4 mt-3'>
                            Contattaci
                    </Card.Text>
                    <Card.Text className='mt-3'>
                        Lavora Con Noi
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    </Row>
    )
}

export default MyFooter;