import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function navbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Lojas Gabi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Categorias</Nav.Link>
            <Nav.Link href="#carrinho">Carrinho</Nav.Link>
            <NavDropdown title="Configurações" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Conta</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Formas de pagamento
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Endereço</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Configuração do Chatbot 
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;