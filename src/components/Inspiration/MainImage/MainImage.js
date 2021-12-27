import React from 'react';

import PropTypes from 'prop-types'

import {
  Container,
  ContainerTitle,
  ContainerText,
} from './MainImage.styles';

const MainImage = (props) => {
  const {
    title,
    text,
    imageUrl,
  } = props

  MainImage.propTypes = {
    text: PropTypes.string,
    title: PropTypes.string,
    imageUrl: PropTypes.string,
  }

  return (
    <Container imageUrl={imageUrl}>
      <ContainerTitle>
        {title}
      </ContainerTitle>

      <ContainerText>
        {text}
      </ContainerText>
    </Container>
  );
}

export default MainImage