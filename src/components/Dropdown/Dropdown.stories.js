import React from 'react';

import Dropdown from './Dropdown';

export default {
  title: 'Dropdown',
  component: Dropdown,
  argTypes: {
    dropdownToggle: {
      control: { type: 'object' },
      description: 'Here you can insert your custom dropdownToggle',
    },
    dropdownMenu: {
      control: { type: 'object' },
      description: 'Here you can insert your custom dropdownMenu',
    },
  },
};

const Template = (args) => <Dropdown {...args} />;

const dropdownToggle = () => (
  <div>Dropdown</div>
)

const dropdownMenu = () => (
  <div>Menu</div>
)

export const Default = Template.bind({});
Default.args = {
  dropdownToggle: dropdownToggle(),
  dropdownMenu: dropdownMenu()
};