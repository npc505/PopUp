import { Container, Button, Row, Col, Form, ListGroup } from "react-bootstrap";
import styled from "styled-components";
import { BsStars } from "react-icons/bs";

const CardContainer = styled(Container)`
  width: 60%;
  height: auto;
  border-radius: 2rem;
  background: conic-gradient(#beb024, #a9d9ce 40deg, #2a4038 150deg, #beb024);
`;

export default function TokenCard(props: any) {
  if (props.type === "grid") {
    return (
      <CardContainer
        className=" px-2 py-4 text-light"
        style={{ width: "100%" }}
      >
        <Container style={{ position: "relative" }}>
          <img
            src="https://images.unsplash.com/photo-1633114594701-52002208270f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80"
            className="img-fluid rounded"
          />
          <BsStars
            className="my-2"
            size={32}
            style={{ position: "absolute", right: "5%", top: "2%" }}
          />
        </Container>
        <Container className="pt-3">
          <p className="fw-bold m-0">Miembro Tulum</p>
          <p className="fw-light">Token id: 1</p>
          <p className="fw-bold m-0">Paulo Gonzales</p>
          <p className="fw-light m-0">Fecha de maduración: 22/03/2023</p>
        </Container>
      </CardContainer>
    );
  } else {
    return (
      <CardContainer className=" px-2 py-4 text-light">
        <Container style={{ position: "relative" }}>
          <img
            src="https://images.unsplash.com/photo-1633114594701-52002208270f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80"
            className="img-fluid rounded"
          />
          <BsStars
            className="my-2"
            size={32}
            style={{ position: "absolute", right: "5%", top: "2%" }}
          />
        </Container>
        <Container className="pt-3">
          <p className="fw-bold m-0">Miembro Tulum</p>
          <p className="fw-light">Token id: 1</p>
          <p className="fw-bold m-0">Paulo Gonzales</p>
          <p className="fw-light m-0">Fecha de maduración: 22/03/2023</p>
        </Container>
      </CardContainer>
    );
  }
}
