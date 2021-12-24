import React from 'react';

import { ParagraphTag } from './Paragraph.styles';

const Paragraph = (props) => {
  const { text } = props
  
  return <ParagraphTag>{text}</ParagraphTag>
}

export default Paragraph