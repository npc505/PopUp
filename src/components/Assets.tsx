import { Container, Button } from "react-bootstrap";
import styled from 'styled-components';

const ContainerW75 = styled(Container)`
  @media(min-width: 768px) {
    width: 75% !important;
  }
`;

export const BtnGreen = styled(Button)`
  background-color: #50AE89 !important;
  border: none;
`;
