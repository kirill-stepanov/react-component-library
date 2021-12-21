import React, { useState } from 'react';

import Dropdown from './Dropdown';

export default {
  title: 'Dropdown',
  component: Dropdown,
  argTypes: {
    // dropdownToggle: {},
    // dropdownMenu: {},
  },
};

const Template = args => <Dropdown {...args} />;

const dropdownToggle = () => (
  <div>Dropdown</div>
)

const dropdownMenu = () => (
  <div>Dropdown Menu</div>
)

export const Default = Template.bind({});
Default.args = {
  // isOpen: isOpen,
  dropdownToggle: dropdownToggle(),
  dropdownMenu: dropdownMenu(),
};

export const Filter = Template.bind({});
Filter.args = {
  // isOpen: isOpen,
  filter: true,
  isFilterSelected: false,
  dropdownToggle: dropdownToggle(),
  dropdownMenu: dropdownMenu(),
};