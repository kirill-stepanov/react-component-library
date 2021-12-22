import React from 'react';

// import { Button as ButtonComponent }  from './Button';
// import * as Button from './Button';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    text: {
      description: 'Add a text prop to change the text of Button',
    },
    variant: {
      defaultValue: 'primary',
      options: ['primary', 'dark'],
      control: { type: 'select' },
      description: 'Use type to define Button style',
    },
    size: {
      defaultValue: 'medium',
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
      description: 'Add size prop to change the size of Button',
    },
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' },
      description: 'Disable the Button with the disabled attribute'
    },
    leftIcon: {
      
    },
    rightIcon: {
      
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: 'Button',
};
