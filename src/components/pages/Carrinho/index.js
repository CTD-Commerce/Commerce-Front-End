import { CarrinhoContext } from '../../../ContextApi/CarrinhoContext';
import { useContext } from 'react';
import { Card, Container } from 'react-bootstrap'
import Footer from '../../Footer';
import Header from '../../Header';
import style from './style.scss';

const Carrinho = () => {
    const { cartItems } = useContext(CarrinhoContext)
    return (
        <>
            < Header />
                <h1>Carrinho</h1>
            <Container className=" card-container d-flex flex-wrap justify-content-center">
                    
                {cartItems.length > 0 && cartItems.map(item => {
                    return (
                        <>
                            <Card id="card-horizontal" className="d-flex flex-row" bg="warning">
                                    <div><Card.Img className="d-flex flex-row" style={{ width: '5rem', height: '5rem' }} variant="left" src={item.imagem} /></div>
                                    <div><Card.Title className="d-flex flex-column">{item.nome}</Card.Title></div>
                                    <div><Card.Text className="d-flex flex-row"> R&#36;{item.preco}</Card.Text></div>
                            </Card>
                        </>
                    )
                })}
            </Container>

            <Footer />
        </>
    )



}

export default Carrinho;