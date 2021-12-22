import React from 'react';

import Title from './Title';

export default {
  title: 'Title',
  component: Title,
  argTypes: {
    tag: {
      defaultValue: 'h1',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: { type: 'select' },
    },
    text: {
      description: '',
    },
  },
};

const Template = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
  tag: 'h1',
  text: 'Default text'
};