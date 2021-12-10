import React from "react";
import { Col, Button, Card } from "react-bootstrap"

const CarItem = ({ id, nome, descricao, imagem }) => {
    return (
        <Col md={4} sm={6} key={id} className={`${id === 2 || id === 5 ? "d-none d-sm-block" : id === 3 || id === 6 ? "d-none d-md-block" : ""}`}>
            <Card bg="dark" text="light" className="item d-block w-100 h-100" style={{ width: '16rem', gap: '5rem' }}>
                <div id="cardImg">
                    <Card.Img variant="top" src={imagem} alt={descricao} />
                </div>
                <Card.Body>
                    <Card.Title>{nome}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default CarItem;