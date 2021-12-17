import React from 'react';

import {
  Container,
  ContainerInput,
  ContainerLabel,
} from './Input.styled';

export default function Input({ placeholder, label }) {

  return (
    <Container>
      <ContainerInput placeholder={placeholder ? placeholder : ' '} />

      <ContainerLabel>{label}</ContainerLabel>
    </Container>
  );
}