import React from 'react';
import { Container, Row, Col, Image, Card, Button, Form} from 'react-bootstrap';
// import Sugestoes from '../Sugestoes';
import './style.scss';
import Header from '../../Header';
import Footer from '../../Footer';
import api from '../../../services/api';
import { useState, useEffect, useContext} from 'react';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
import { CarrinhoContext } from '../../../ContextApi/CarrinhoContext';


const ProdutoUnid = () => {
  
  const [produto, setProd] = useState([]);
  const {id} = useParams ();
  const {addItem} = useContext(CarrinhoContext);
  useEffect(() => {
      async function pegaProduto() {
          try {
              const response = await api.get(`/produtos/${id}`);
              setProd(response.data);
          } catch (error) {
              Swal.fire({
                  title: error,
                  icon: 'error',
                  text: error
              });
          }
      }
      pegaProduto();
  }, [])


    let containerProdutos = {
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
    return ( 
    <>
    <Header />
    <main>
    <Container>
        <Row style={containerProdutos}>
        <Col xs={6} md={4}>
            <Image src={produto&&produto.imagem} rounded />
        </Col>
        <Col>
        <Card style={{ width: 'auto', height: '250px' }}>
  <Card.Body>
    <Card.Title>{produto&&produto.nome}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">R&#36;{produto&&produto.preco}</Card.Subtitle>
    <Card.Text>
     {produto&&produto.descricao}
    </Card.Text>
    <Form>
  <Form.Check 
    type="switch"
    id="custom-switch"
    label="Colorida"
  />
   <Form.Check 
    type="switch"
    id="custom-switch"
    label="Preto e Branco"
  />
  </Form>
        <Button variant="secondary" style={{padding:'10px'}} onClick={() => addItem(produto)}>Adicionar ao carrinho</Button>
  </Card.Body>
</Card>
        </Col>
        </Row>
    </Container>
    <h2>Você também pode gostar</h2>
    </main>
      {/* <Sugestoes /> */}
      <Footer />
    </>
    )
}

export default ProdutoUnid;