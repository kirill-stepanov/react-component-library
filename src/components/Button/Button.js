import React from 'react';

import PropTypes from 'prop-types'

import ButtonArrowRight from '../../assets/icons/button-arrow-right';

import { ButtonContainer } from './Button.styles';

const Button = (props) => {
  const {
    text,
    disabled = false,
    variant = 'primary',
    size = 'medium',
    leftIcon,
    rightIcon,
  } = props

  Button.propTypes = {
    text: PropTypes.string,
    variant: PropTypes.oneOf(['primary', 'dark']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    disabled: PropTypes.bool,
  }

  const icons = {
    'arrow_right': <ButtonArrowRight />,
  }

  const selectedLeftIcon = icons[leftIcon]
  const selectedRightIcon = icons[rightIcon]

  return (
    <ButtonContainer
      size={size}
      variant={variant}
      disabled={disabled}
    >
      {selectedLeftIcon}
      {text}
      {selectedRightIcon}
    </ButtonContainer>
  );
}

export default Button