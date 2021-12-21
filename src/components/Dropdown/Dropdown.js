import React, { useState } from 'react';


import {
  DropdownContainer,
  DropdownToggle,
  DropdownMenu,
 } from './Dropdown.styles';

export default function Dropdown({
  // isOpen,
  filter,
  isFilterSelected,
  dropdownToggle,
  dropdownMenu,
}) {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <DropdownContainer>
      <DropdownToggle
        isOpen={isOpen}
        filter={filter}
        isFilterSelected={isFilterSelected}
        onClick={() => setIsOpen(!isOpen)}
      >
        {dropdownToggle}
      </DropdownToggle>

      {
        isOpen && <DropdownMenu>{dropdownMenu}</DropdownMenu>
      }
    </DropdownContainer>
  );
}