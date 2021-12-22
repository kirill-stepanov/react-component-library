import React from 'react';

import Checkbox from './Checkbox';

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    size: {
      defaultValue: 'default',
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
  },
};

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  
};