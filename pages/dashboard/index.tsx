import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "../../styles/Dashboard.module.css";
import { Col, Container, Row, Stack } from "react-bootstrap";
import TokenCard from "../../src/components/TokenCard";
import { BtnGreen } from "../../src/components/BtnGreen";
import Card from "../../src/components/Card/Card";

export default function Marketplace() {
  return (
    <>
      <Container className="mt-5">
        <div className={`${classes["grid-container"]}`}>
          <div className={`${classes["grid-item1"]}`}>
            <TokenCard type="grid"></TokenCard>
          </div>

          <Card className={`${classes["grid-item2"]}`}>
            <h4 className={`${classes["grid-title"]}`}>
              Fondos recaudados por Reserva Kaax
            </h4>
            <p className={`${classes["grid-text"]}`}>$5,000,000 USD</p>
          </Card>

          <Card className={`${classes["grid-item3"]}`}>
            <h4 className={`${classes["grid-title"]}`}>
              Número de inversionistas
            </h4>
            <p className={`${classes["grid-text"]}`}>46 inversionistas</p>
          </Card>

          <Card className={`${classes["grid-item4"]}`}>
            <h4 className={`${classes["grid-title"]}`}>Tu inversión</h4>
            <p className={`${classes["grid-text"]}`}>$40,000 USD</p>
          </Card>

          <Card className={`${classes["grid-item5"]}`}>
            <h4 className={`${classes["grid-title"]}`}>Tus tokens</h4>
            <p className={`${classes["grid-text"]}`}>2 vouchers</p>
          </Card>

          <Card className={`${classes["grid-item6"]}`}>GRAFICA</Card>

          <Card className={`${classes["grid-item7"]}`}>
            <h4 className={`${classes["grid-text"]}`}>Progreso de la obra</h4>
          </Card>

          <div className={`${classes["grid-item8"]}`}>
            <BtnGreen>Volver a Invertir</BtnGreen>
          </div>
        </div>
      </Container>
    </>
  );
}
