import React from "react";
import { Container, Button, Row, Col, Form, ListGroup, Accordion } from "react-bootstrap";
import styled from 'styled-components';
import { BtnGreen } from "./BtnGreen";
import { AiOutlinePlus } from "react-icons/ai";

const ContainerW75 = styled(Container)`
  @media(min-width: 768px) {
    width: 75% !important;
  }
`;

export default function Footer() {
  return(
    <Container fluid className="pt-2">
      <Row>
        <Col md={3} >
          <div className="d-none d-lg-block">
            <img src="https://drive.google.com/uc?export=view&id=1aPeb-WIBgd-_LANhgbzKCgTiaW3OPJhx" className="img-fluid w-75 mx-auto" />
          </div>
        </Col>
        <Col md={3}>
          <p className="h6">
            Suscribete al Newslatter
          </p>
          <Form className='d-flex'>
            <Col xs='auto'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </Col>
            <Col xs='auto'>
              <BtnGreen className='btn' type="submit">
                Submit
              </BtnGreen>
            </Col>
          </Form>
        </Col>
        <Col sm={6} md={3} className="pb-2">
          <div className="d-none d-sm-block">
            <p className="fw-bold h6">Recursos</p>
            <ListGroup>
              <ListGroup.Item className='border-0 p-0 pb-1' action href="#link1" style={{ backgroundColor: 'transparent' }}>
                Terminos y Condiciones
              </ListGroup.Item>
              <ListGroup.Item className='border-0 p-0 pb-1' action href="#link2" style={{ backgroundColor: 'transparent' }}>
                Whitepaper
              </ListGroup.Item>
              <ListGroup.Item className='border-0 p-0 pb-1' action href="#link1" style={{ backgroundColor: 'transparent' }}>
                Etherscan del Funding Voucher
              </ListGroup.Item>
              <ListGroup.Item className='border-0 p-0 pb-1' action href="#link2" style={{ backgroundColor: 'transparent' }}>
                Etherscan del NFT del producto
              </ListGroup.Item>
              <ListGroup.Item className='border-0 p-0 pb-1' action href="#link1" style={{ backgroundColor: 'transparent' }}>
                Documentos
              </ListGroup.Item>
              <ListGroup.Item className='border-0 p-0 pb-1' action href="#link2" style={{ backgroundColor: 'transparent' }}>
                Videos
              </ListGroup.Item>
            </ListGroup>
          </div>
          <div className="d-block d-sm-none">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Recursos</Accordion.Header>
                <Accordion.Body>
                  <ListGroup>
                    <ListGroup.Item className='border-0 p-0 pb-1' action href="#link1" style={{ backgroundColor: 'transparent', color:"#121212" }}>
                      Terminos y Condiciones
                    </ListGroup.Item>
                    <ListGroup.Item className='border-0 p-0 pb-1' action href="#link2" style={{ backgroundColor: 'transparent', color:"#121212" }}>
                      Whitepaper
                    </ListGroup.Item>
                    <ListGroup.Item className='border-0 p-0 pb-1' action href="#link3" style={{ backgroundColor: 'transparent', color:"#121212" }}>
                      Etherscan del Funding Voucher
                    </ListGroup.Item>
                    <ListGroup.Item className='border-0 p-0 pb-1' action href="#link4" style={{ backgroundColor: 'transparent', color:"#121212" }}>
                      Etherscan del NFT del producto
                    </ListGroup.Item>
                    <ListGroup.Item className='border-0 p-0 pb-1' action href="#link5" style={{ backgroundColor: 'transparent', color:"#121212" }}>
                      Documentos
                    </ListGroup.Item>
                    <ListGroup.Item className='border-0 p-0 pb-1' action href="#link6" style={{ backgroundColor: 'transparent', color:"#121212" }}>
                      Videos
                    </ListGroup.Item>
                  </ListGroup>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </Col>
        <Col xs={6} md={3}>
          <p className="fw-bold h6">
            Dirección
          </p>
          <ListGroup>
            <ListGroup.Item className='border-0 p-0 pb-1'  style={{ backgroundColor: 'transparent' }}>
              +52 6622 1432
            </ListGroup.Item>
            <ListGroup.Item className='border-0 p-0 pb-1'  style={{ backgroundColor: 'transparent' }}>
              <p className="p-0 m-0">Ave. Corregidora 52</p>
              <p className="p-0 m-0">Lomas de Chapultepec</p>
              <p className="p-0 m-0">CDMX</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
      <Row className="py-1 text-light" style={{ backgroundColor: '#2A4038' }}>
        <Col md={8}>
          <p className="my-1">
            <small>
              Copyright ©2020 Reserva Kaax. All Right Reserved
            </small>
          </p>
        </Col>
        <Col sm={6} md={2}>
          <p className="my-1">
            <small>
              Cookie Policy
            </small>
          </p>
        </Col>
        <Col xs={6} md={2}>
          <p className="my-1">
            <small>
              Privacy Policy
            </small>
          </p>
        </Col>
      </Row>
    </Container>
  );
}