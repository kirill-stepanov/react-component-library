import React from 'react';

import Breadcrumbs from './Breadcrumbs';

export default {
  title: 'Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
    breadcrumbs: {
      type: { required: true },
      description: 'Here you can pass an array of objects with a link field (if it is a link) or without (if it is a paragraph)',
      defaultValue: [
        {
          id: 1,
          text: 'Storybook',
          link: '#',
        },
        {
          id: 2,
          text: 'Core',
          link: '#',
        },
        {
          id: 3,
          text: 'Breadcrumbs',
        },
      ],
    },
  },
};

const Template = (args) => <Breadcrumbs {...args} />;

export const Default = Template.bind({});
Default.args = {
  
};