import React from 'react';

import {
  Container,
  ContainerInput,
  ContainerLabel,
} from './Input.styles';

const Input = (props) => {
  const {
    label,
    placeholder,
  } = props

  return (
    <Container>
      <ContainerInput placeholder={placeholder ? placeholder : ' '} />

      <ContainerLabel>{label}</ContainerLabel>
    </Container>
  );
}

export default Input