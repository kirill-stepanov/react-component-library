import React from 'react';

import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    label: {
      description: 'Test description',
    },
    variant: {
      defaultValue: 'primary',
      options: ['primary', 'dark'],
      control: { type: 'select' },
    },
    size: {
      defaultValue: 'medium',
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    leftIcon: {
      
    },
    rightIcon: {
      // options: [
      //   'arrow_right',
      // ],
      // control: { type: 'select' },
    },
  },
};

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
};