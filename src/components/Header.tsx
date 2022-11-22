import { Container, Navbar, Offcanvas, Nav, Button } from "react-bootstrap";
import styled from 'styled-components';

const ContainerW75 = styled(Container)`
  @media(min-width: 768px) {
    width: 75% !important;
  }
`;

const BtnGreen = styled(Button)`
  background-color: #122620 !important;
`;

export default function Header() {
  return(
    <Navbar bg="light" expand={false} className="mb-3 shadow">
      <ContainerW75 fluid>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-false-${false}`} />
        <Navbar.Brand href="#" style={{color: '#B68D40'}}>Logo</Navbar.Brand>
        <BtnGreen>Conectar Wallet</BtnGreen>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-false-${false}`}
          aria-labelledby={`offcanvasNavbarLabel-false-${false}`}
          placement="start"
        >
          <Offcanvas.Header closeButton>
          <Offcanvas.Title id={`offcanvasNavbarLabel-false-${false}`}>Tulum Dao</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/investment">Investment</Nav.Link>
              <Nav.Link href="#action2">Dashboard</Nav.Link>
              <Nav.Link href="/marketplace">Marketplace</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </ContainerW75>
    </Navbar>
  );
}