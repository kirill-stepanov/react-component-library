import React from 'react';

import { 
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,  
 } from './Title.styles';

const Title = (props) => {
  const {
    tag,
    text,
  } = props

  const heading = {
    'h1': <Heading1>{text}</Heading1>,
    'h2': <Heading2>{text}</Heading2>,
    'h3': <Heading3>{text}</Heading3>,
    'h4': <Heading4>{text}</Heading4>,
    'h5': <Heading5>{text}</Heading5>,
    'h6': <Heading6>{text}</Heading6>,
  }

  return heading[tag]
}

export default Title