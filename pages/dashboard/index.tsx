import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Container, Row, Stack } from 'react-bootstrap';

export default function Marketplace() {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col>
            <div>
              Miembro de tulum
            </div>
            <div>
              Volver a invertir
            </div>
          </Col>
          <Col>
            <Row>
              <Stack direction="horizontal">
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
              </Stack>
            </Row>

            <Row>
              <Col>
                Gráfica circular
              </Col>
              <Col>
                Gráfica lineal
              </Col>
            </Row>
          </Col>
        </Row>

        <div>
          Notificaciones
        </div>
      </Container>
    </>
  );
}
