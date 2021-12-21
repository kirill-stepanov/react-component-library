import React, { useState } from 'react';

import CheckboxIcon from '../../assets/icons/checkbox'

import {
  CheckboxContainer
 } from './Checkbox.styles';

export default function Checkbox({ size }) {
  const [active, setActive] = useState(false)

  return (
    <CheckboxContainer
      size={size}
      onClick={() => setActive(!active)}
      isActive={active}
    >
      {active && <CheckboxIcon />}
    </CheckboxContainer>
  );
}