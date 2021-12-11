import React from "react";
import { Col, Button, Card } from "react-bootstrap"
import { useNavigate } from 'react-router-dom';

const CarItem = ({ id, nome, descricao, imagem }) => {

    const navigate = useNavigate();

    return (
        <Col md={4} sm={6} key={id} className={`${id === 2 || id === 5 ? "d-none d-sm-block" : id === 3 || id === 6 ? "d-none d-md-block" : ""}`}>
            <Card bg="dark" text="light" className="item d-block w-100 h-100" style={{ width: '16rem', gap: '5rem' }}>
                <div id="cardImg">
                    <Card.Img variant="top" src={imagem} alt={descricao} />
                </div>
                <Card.Body className="d-flex flex-wrap flex-column align-items-bottom card-botao">
                    <Card.Title style={{height:"4.5rem"}}>{nome}</Card.Title>
                    <Button variant="light" onClick={() => navigate(`/produtos/${id}/`)}>Ver Mais</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default CarItem;