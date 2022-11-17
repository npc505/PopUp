import Head from 'next/head'
import styled from 'styled-components'
import { Col, Container, Row, Button, Stack } from 'react-bootstrap'
import Header from '../src/components/Header'
import styles from '../styles/Home.module.css'
import { AiFillPlayCircle } from "react-icons/ai";

const BtnGreen = styled(Button)`
  background-color: #122620 !important;
`;

const ContainerW75 = styled(Container)`
  @media(min-width: 768px) {
    width: 75% !important;
  }
`;

export default function Home() {
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
                <h2 className="fw-bold display-5">Proyecto</h2>
                <h2 className="fw-bold display-5">Tulum</h2>
              </div>
            </div>
            <div className="lc-block mb-3">
              <div>
                <p className="lead">
                  Sit ipsum velit fugiat cupidatat do incididunt in culpa deserunt consectetur consectetur. Ex aliqua nisi veniam magna ipsum do laboris tempor culpa magna nostrud cupidatat.
                </p>
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
                <h3 className="fw-bold display-5">Impulsado por gente con talento</h3>
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
                <h3 className="fw-bold display-5">Todo es transparente en Ethereum y gestionado por constructura XYZ</h3>
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
        <h3 className='fw-bold display-5 text-center'>Conoce al equipo</h3>
      </Container>

      
    </>
  )
}
