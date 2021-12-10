import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown, Container, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './style.scss';

const Header = () => {

  return (
    <>
    <Navbar variant="dark" expand="lg" className="nav" fixed="top" >
    <Container fluid id="nav-container">
    <Navbar.Brand ><Link to="/" className="text-link" >Uai Tatu</Link><img src="https://www.freeiconspng.com/uploads/tattoo-dragon-png-10.png" id="logo-img"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
      </Nav>
         <NavDropdown text="light" menuVariant="dark" title="Categorias" id="nav-dropdown-dark-example">
          <NavDropdown.Item><Link style={{marginTop: '8.3rem'}} className="text-link"to="/produtos">Produtos</Link></NavDropdown.Item>
          <NavDropdown.Item><Link className="text-link"to="/produtos/categorias/1">Agulhas</Link></NavDropdown.Item>
          <NavDropdown.Item><Link className="text-link"to="/produtos/categorias/4">Batoques</Link></NavDropdown.Item>
          <NavDropdown.Item><Link className="text-link"to="/produtos/categorias/3">Máquinas</Link></NavDropdown.Item>
          <NavDropdown.Item><Link className="text-link"to="/produtos/categorias/2">Tintas</Link></NavDropdown.Item>
        </NavDropdown>
        <Nav.Link style={{color: 'white'}}><Link to="/sobrenos" className="text-link">Sobre</Link></Nav.Link>
        <Nav.Link as={Link} to="/carrinho"><img src="https://www.freeiconspng.com/thumbs/shopping-cart-icon/shopping-cart-icon-2.png" id="cart-img" alt="" /></Nav.Link>
        <Form className="d-flex">
      </Form>
    </Navbar.Collapse>
    </Container>
    </Navbar>
    </>
  )

}

export default Header;