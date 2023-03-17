import { Button } from "react-bootstrap";
import styled from "styled-components";

export const BtnGreen = styled(Button)`
  background-color: #122620 !important;
  border: none;
  transition: all 1s ease;
  transform: scale(1);
  &:hover {
    transform: scale(1.1) perspective(1px);
  }
`;
