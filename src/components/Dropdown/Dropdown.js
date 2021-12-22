import React, { useState, useEffect } from 'react';

import { useRef } from 'react';

import PropTypes from 'prop-types'

import {
  Container,
  ContainerToggle,
  ContainerMenu,
} from './Dropdown.styles' 

export default function Dropdown({ 
  dropdownToggle,
  dropdownMenu,
 }) {

  Dropdown.propTypes = {
    dropdownToggle: PropTypes.object,
    dropdownMenu: PropTypes.object,
  }

  const ref = useRef()

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  useEffect(() => {
    function toggle(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", toggle);
    return () => {
      document.removeEventListener("mousedown", toggle);
    };
  }, [ref]);

  return (
    <Container ref={ref} >
      <ContainerToggle onClick={toggle}>{dropdownToggle}</ContainerToggle>

      {
        isOpen && <ContainerMenu>{dropdownMenu}</ContainerMenu>
      }
    </Container>
  );
}