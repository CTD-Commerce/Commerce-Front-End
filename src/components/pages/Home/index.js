import { useEffect, useState, useContext } from 'react';
import { Carousel, Row, Col } from "react-bootstrap";
import Swal from 'sweetalert2';
import CarItem from "../../Carousel/carItem";
import Banner from "../../Banner"
import Header from "../../Header"
import Footer from "../../Footer"
import api from "../../../services/api"
import './style.scss'
import { Helmet } from 'react-helmet-async';

const Home = () => {

    const [produtos, setProd] = useState([]);

    useEffect(() => {
        async function pegaProdutos() {
            try {
                const response = await api.get('/produtos');
                setProd(response.data);
            } catch (error) {
                Swal.fire({
                    title: error.response.status,
                    icon: 'error',
                    text: error.response.data.message
                });
            }
        }
        pegaProdutos();
    }, [])

    return (
        <>
        <Helmet>
        <title> UaiTatu | Home</title>
      </Helmet>
        
            <Header />
            <Banner />
            <main>
                <Carousel className="carouselClass">
                    <Carousel.Item className="carItemClass">
                        <Col lg={{ span: 6, offset: 3 }}>
                            <Row>
                                {produtos.length !== 0 && (produtos.map(({ id, nome, descricao, imagem }) => {
                                    return (
                                        <CarItem className="item" nome={nome} imagem={imagem} descricao={descricao} key={id} id={id} />
                                    );
                                }
                                ).slice(0, 3))}
                            </Row>
                        </Col>
                    </Carousel.Item>
                    <Carousel.Item className="carItemClass">
                        <Col lg={{ span: 6, offset: 3 }}>
                            <Row>
                                {produtos.length !== 0 && (produtos.map(({ id, nome, descricao, imagem }) => {
                                    return (
                                        <CarItem className="item" nome={nome} imagem={imagem} descricao={descricao} key={id} id={id} />
                                    );
                                }
                                ).slice(3, 6))}
                            </Row>
                        </Col>
                    </Carousel.Item>
                </Carousel>
            </main>
            <Footer />
        </>
    );
}




export default Home;