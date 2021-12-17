import React from 'react';

import Input from './Input';

export default {
  title: 'Input',
  component: Input,
  argTypes: {
    placeholder: {
      // defaultValue: ' ',
      // description: 'Test description',
    },
  },
};

const Template = args => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Last name'
};