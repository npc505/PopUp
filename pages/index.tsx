import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Head from 'next/head';
import styled from 'styled-components';
import { Col, Container, Row, Button, Stack, Form } from 'react-bootstrap';
import Slider from "react-slick";
import Header from '../src/components/Header'
import Footer from "../src/components/Footer";
import { AiFillPlayCircle, AiFillStar } from "react-icons/ai";
import team from '../src/assets/data/team.json';
import reviews from '../src/assets/data/review.json';

const BtnGreen = styled(Button)`
  background-color: #122620 !important;
`;

const ContainerW75 = styled(Container)`
  @media(min-width: 768px) {
    width: 75% !important;
  }
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  width: 110px;
  height: 110px;
  object-fit: cover;
`;

const TeamCard = styled(Container)`
  border: 1px solid #B8B8B8;
  border-radius: 10%;
  min-height: 10rem;
  max-height: 20rem;
  min-width: 10rem;
  max-width: 18rem;
`;

const ValorationCard = styled(Container)`
  border: 1px solid #B8B8B8;
  border-radius: 75px;
  width: 90%;
  height: auto;
`;

const teamDisplay = team.map(member => {
  return (
    <Col sm={6} md={4} className='py-3'>
      <TeamCard className= {member.shadow + ' py-5'}>
        <ProfileImage src={member.img} className='mx-auto d-block' />
        <h5 className='text-center pt-4 pb-2'>{member.name}</h5>
        <p className='text-center text-muted'>{member.job}</p>
      </TeamCard>
    </Col>
  );
});

const reviewDisplay = reviews.map(review => {
  return(
    <ValorationCard className='py-4'>
      <ProfileImage src={review.image} className='mx-auto d-block mt-3' />
      <Container className="mx-auto p-0 py-2" style={{ width: '90%' }} >
        <div className="hstack gap-3">
          <AiFillStar color="FFC107" />
          <AiFillStar color="FFC107" />
          <AiFillStar color="FFC107" />
          <AiFillStar color="FFC107" />
          <AiFillStar color="FFC107" />
        </div>
      </Container>
      <p className="text-center">
        <small>
          “{review.message}
        </small>
      </p>
      <p className="text-center">
        {review.name}
      </p>
      <p className="text-center">
        {review.job}
      </p>
    </ValorationCard>
  );
})

export default function Home() {

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    speed: 500,
    arrows: false,
  };

  return (
    <>
      <Header />
      <Container className='flex-lg-row-reverse align-items-center g-5 py-5'>
        <Row className='flex-lg-row-reverse align-items-center g-5 py-5'>
          <Col className='col-10 col-sm-8 col-lg-6'>
            <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="d-block mx-lg-auto img-fluid" alt="" loading="lazy" />
          </Col>
          <Col className='col-lg-6'>
            <div className="lc-block mb-3">
              <div>
                <h1 className="fw-bold h1">Proyecto</h1>
                <h1 className="fw-bold h1">Tulum</h1>
              </div>
            </div>
            <div className="lc-block mb-3">
              <div>
              </div>
            </div>
            <div className="lc-block d-grid gap-2 d-md-flex justify-content-md-start">
              <a className="btn btn-primary px-4 me-md-2" href="#" role="button" style={{backgroundColor: '#122620'}}>Descargar Whitepaper</a>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className='flex-lg-row-reverse align-items-center g-5 py-5'>
        <Row className='flex-lg-row-reverse align-items-center g-5 py-5'>
          <Col className='col-lg-6'>
            <div className="lc-block mb-3">
              <div>
                <h1 className="fw-bold h2">Impulsado por gente con talento</h1>
              </div>
            </div>
            <div className="lc-block mb-3">
              <div>
                <p className="lead">
                  La obra se construye en 1 año y medio, las ganancias empiezan a distribuirse despues de vender el primer departamento. Cada acción esta respaldada por un documento físico que comprueba que tu token es dueña de dicha acción.
                </p>
              </div>
            </div>
            <Stack direction="horizontal" gap={3}>
              <BtnGreen>Invertir</BtnGreen>
              <div><AiFillPlayCircle size={50} color={'#B68D40'} /> Ver vídeos</div>
            </Stack>
          </Col>
          <Col className='col-10 col-sm-8 col-lg-6'>
            <img src="https://images.unsplash.com/photo-1594484208280-efa00f96fc21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="d-block mx-lg-auto img-fluid" alt="" loading="lazy" />
          </Col>
        </Row>
      </Container>

      <Container className='flex-lg-row-reverse align-items-center g-5 py-5'>
        <h1>Highlights del proyecto</h1>
        {/* Falta implementar */}
      </Container>

      <Container className='flex-lg-row-reverse align-items-center g-5 py-5'>
        <Row className='flex-lg-row-reverse align-items-center g-5 py-5'>
          <Col className='col-10 col-sm-8 col-lg-6'>
            <img src="https://images.unsplash.com/photo-1556156653-e5a7c69cc263?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" className="d-block mx-lg-auto img-fluid" alt="" loading="lazy" />
          </Col>
          <Col className='col-lg-6'>
            <div className="lc-block mb-3">
              <div>
                <h1 className="fw-bold h2">Todo es transparente en Ethereum y gestionado por constructura XYZ</h1>
              </div>
            </div>
            <div className="lc-block mb-3">
              <div>
                <p className="lead">
                  But I must explain to you how all thismistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.
                </p>
              </div>
            </div>
            <div className="lc-block d-grid gap-2 d-md-flex justify-content-md-start">
              <a className="btn btn-primary px-4 me-md-2" href="#" role="button" style={{backgroundColor: '#122620'}}>Leer más</a>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <h1 className='fw-bold h2 text-center pb-5'>Conoce al equipo</h1>
        <Row>
          { teamDisplay }
        </Row>
      </Container>
      <Container>
        <h1 className='fw-bold h2 text-center pb-5'>Galería de la obra</h1>
      </Container>
      <Slider {...settings}>
        { reviewDisplay }
      </Slider>

      <Container className='flex-lg-row-reverse align-items-center g-5 py-5'>
        <Row className='flex-lg-row-reverse align-items-center g-5 py-5'>
          <Col className='col-lg-6'>
            <div className="lc-block mb-3">
              <div>
                <h1 className="fw-bold h2">Necesitas ayuda con tu decisión?</h1>
              </div>
            </div>
            <div className="mb-3">
              <Form>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button type="submit" style={{ backgroundColor: '#122620' }} >
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
          <Col className='col-10 col-sm-8 col-lg-6'>
            <img src="https://images.unsplash.com/photo-1556156653-e5a7c69cc263?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" className="d-block mx-lg-auto img-fluid" alt="" loading="lazy" />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
