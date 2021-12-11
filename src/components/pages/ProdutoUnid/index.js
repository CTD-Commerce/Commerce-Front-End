import React from 'react';
import { Container, Row, Col, Image, Card, Button, Alert} from 'react-bootstrap';
import './style.scss';
import Header from '../../Header';
import Footer from '../../Footer';
import api from '../../../services/api';
import { useState, useEffect, useContext} from 'react';
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
import { CarrinhoContext } from '../../../ContextApi/CarrinhoContext';
import { Helmet } from 'react-helmet-async';



const ProdutoUnid = () => {
  const [alerta, setAlerta] = useState(false);
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

  const alertaBotao = () =>{
    addItem(produto)
    setAlerta(true)
    setTimeout(() => {
      setAlerta(false)
    }, 1800);
  }
  const conversorPreco = (value) => {
    
    if (value === Infinity) {
        return 'R$ 0,00'   
    }
    return value.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
    });
  
  }
    return ( 
    <>
    <Helmet>  
        <title>UaiTatu | {produto.id ? produto.nome : 'Produto' }</title>
      </Helmet>
    
      <Header />
      <main className='mainProdutoUnid'>
      
      <Container expand ="lg">
          <Row className= 'containerProdutos'>
            
            <Col xs={12} md={4} p={0} style={{textAlign:'center'}}>
              <Image className='imgProduto' src={produto&&produto.imagem} rounded />
            </Col>

            <Col style={{margin: '10px'}}>
              <Card className='cardProdutos'>
                <Card.Body className='cardProdutosBody'>
                  <Card.Title>{produto&&produto.nome}</Card.Title>

                  <Card.Text> {produto&&produto.descricao} </Card.Text>
                  
                  <Card.Subtitle className="mb-2 text-muted" style={{fontSize: '45px'}}>{produto&&conversorPreco(Number(produto.preco))} </Card.Subtitle>

                    <Button variant="secondary" style={{padding:'10px', maxWidth: '300px'}} onClick={() => alertaBotao()}>Adicionar ao carrinho</Button>
                
                </Card.Body>
              </Card>
            </Col>

          </Row>
      </Container>
      {alerta&&<Alert variant="dark">
        Produto adicionado ao carrinho!
      </Alert>}
      </main>
     
      <Footer />
    </>
    )
}

export default ProdutoUnid;

