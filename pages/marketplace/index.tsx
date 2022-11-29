import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Col, Container, Row, Button, Card } from 'react-bootstrap';

const ProductCard = () => {
  return(
    <Col className="pb-3" md={6} lg={4}>
      <Card className="mx-auto" style={{width: '90%'}}>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
          <Card.Body style={{ backgroundColor: '#50AE89', color: '#FEFEFE' }}>
              <Card.Title className="fw-bold h5">Villa #1</Card.Title>
              <Card.Subtitle>ERC</Card.Subtitle>
              <Card.Text className="fw-thin">
                <small>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus ut ornare felis pharetra, eu in a tortor.
                </small>
              </Card.Text>
              <Button variant="light" className="w-100">Comprar</Button>
          </Card.Body>
      </Card>
    </Col>
  );
}

export default function Marketplace() {
  return(
    <>
      <Container className="mt-5">
          <Row>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Row>
      </Container>
    </>
  );
}
