import React from 'react';

import Star from '../../assets/icons/star'

import PropTypes from 'prop-types'

import {
  Container,
  CardImage,
  CardTitle,
  CardInfo,
  CardInfoText,
} from './Card.styles';

const Card = (props) => {
  const {
    image = 'https://images.ctfassets.net/hrltx12pl8hq/3MbF54EhWUhsXunc5Keueb/60774fbbff86e6bf6776f1e17a8016b4/04-nature_721703848.jpg?fit=fill&w=480&h=270',
    title = 'Central apartment Barcelona',
    rating = '9.6',
    hotelType = 'Apartment',
  } = props

  Card.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    rating: PropTypes.string,
    hotelType: PropTypes.string,
  }


  return (
    <Container>
      <CardImage src={image} alt={title} />

      <CardTitle>{title}</CardTitle>

      <CardInfo>
        <Star /> {rating}

        <CardInfoText>{hotelType}</CardInfoText>
      </CardInfo>
    </Container>
  );
}

export default Card