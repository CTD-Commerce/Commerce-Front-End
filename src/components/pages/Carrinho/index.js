import { CarrinhoContext } from '../../../ContextApi/CarrinhoContext';
import { useContext } from 'react';
import { CardGroup, Card } from 'react-bootstrap'
import Footer from '../../Footer';
import Header from '../../Header';

const Carrinho = () => {
    const { cartItems } = useContext(CarrinhoContext)
    return (
        <>
        < Header />

        <CardGroup>

            {cartItems.length > 0 && cartItems.map(item => {
                return (
                    <>
                        <Card bg="warning" style={{ width: '16rem', gap: '3rem' }}>
                            <div id="cardImg">
                                <Card.Img variant="top" src={item.imagem} />
                            </div>
                            <Card.Body>
                                <Card.Title>{item.nome}</Card.Title>
                                <Card.Body className="d-flex flex-column align-items-center">
                                    <Card.Text> R&#36;{item.preco}</Card.Text>
                                </Card.Body>
                            </Card.Body>
                        </Card>
                    </>
                )
            })}
            </CardGroup>

            <Footer />
        </>
    )



}

export default Carrinho;