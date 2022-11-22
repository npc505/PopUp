import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';
import { Col, Container, Row, Button, Badge, Form, Stack, Card } from 'react-bootstrap';
import Header from '../../src/components/Header'
import Footer from "../../src/components/Footer";
import { TbWorld } from "react-icons/tb";
import { BsBricks } from "react-icons/bs";
import { HiArrowsUpDown } from "react-icons/hi2";

const BtnGreen = styled(Button)`
  background-color: #122620 !important;
  border: none;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 110px;
  height: 110px;
  object-fit: cover;
`;

const ContainerW50 = styled(Row)`
  width: 90%;

  @media (min-width: 992px) {
    width: 50%;
  }
`;

export default function Marketplace() {
  return(
    <>
      <Header />
      <Container>
          <h1 className="fw-bold h3">Antes de Invertir</h1>
          <Row>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                    <Card.Body style={{ backgroundColor: '#B68D40', color: '#FEFEFE' }}>
                        <Card.Title>Villa #1</Card.Title>
                        <Card.Subtitle>ERC</Card.Subtitle>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
          </Row>
      </Container>
      <Footer />
    </>
  );
}
