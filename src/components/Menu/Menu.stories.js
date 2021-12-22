import React from 'react';

import Menu from './Menu';

export default {
  title: 'Menu',
  component: Menu,
  argTypes: {
    items: {
      type: { required: true },
      defaultValue: [
        {
          id: 1,
          title: 'Europe',
        },
        {
          id: 2,
          title: 'Americas',
        },
        {
          id: 3,
          title: 'Asia',
        },
        {
          id: 4,
          title: 'Africa',
        },
      ],
    },
  },
};

const Template = (args) => <Menu {...args} />;

export const Default = Template.bind({});
Default.args = {
  
};