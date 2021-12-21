import React from 'react';

import Star from '../../assets/icons/star'

import {
  Container,
  CardImage,
  CardTitle,
  CardInfo,
  CardInfoText,
} from './Card.styles';

export default function Card({  }) {
  return (
    <Container>
      <CardImage src={'https://img.theculturetrip.com/x/smart/wp-content/uploads/2019/04/spain--leoks_shutterstock.jpg'} alt={'Hotel name'} />

      <CardTitle>Central apartment Barcelona</CardTitle>

      <CardInfo>
        <Star /> 8,9

        <CardInfoText>Apartment</CardInfoText>
      </CardInfo>
    </Container>
  );
}