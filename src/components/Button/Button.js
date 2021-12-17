import React from 'react';

import { ButtonContainer } from './Button.styled';

import ButtonArrowRight from '../../assets/icons/button-arrow-right';

export default function Button({
  label,
  disabled,
  variant,
  size,
  leftIcon,
  rightIcon,
}) {

  const icons = {
    'arrow_right': <ButtonArrowRight />,
  }

  const selectedRightIcon = icons[rightIcon]

  return (
    <ButtonContainer
      size={size}
      variant={variant}
      disabled={disabled}
    >
      {leftIcon}
      {label}
      {selectedRightIcon}
    </ButtonContainer>
  );
}