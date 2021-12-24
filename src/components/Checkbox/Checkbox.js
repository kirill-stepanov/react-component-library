import React, { useState } from 'react';

import CheckboxIcon from '../../assets/icons/checkbox'

import {
  CheckboxContainer
 } from './Checkbox.styles';

const Checkbox = (props) => {
  const { size } = props

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

export default Checkbox