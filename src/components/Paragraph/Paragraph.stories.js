import React from 'react';

import Paragraph from './Paragraph';

export default {
  title: 'Paragraph',
  component: Paragraph,
  argTypes: {
    text: {
      description: 'Test description',
    }
  },
};

const Template = args => <Paragraph {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Default paragraph'
};