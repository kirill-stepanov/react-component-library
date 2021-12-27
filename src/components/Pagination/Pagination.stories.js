import React from 'react';

import Pagination from './Pagination';

export default {
  title: 'Pagination',
  component: Pagination,
  argTypes: {
    itemsTotalCount: {
      // description: 'Use type to define Button style',
    },
    itemsPerPage: {
      // description: 'Use type to define Button style',
    },
  },
};


const Template = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  itemsTotalCount: 20,
  itemsPerPage: 5,
};