import React from "react";
import { ButtonStyles } from "./styles";

function Button({ children, onClick }) {
  return <ButtonStyles onClick={onClick}>{children}</ButtonStyles>;
}

export default Button;
