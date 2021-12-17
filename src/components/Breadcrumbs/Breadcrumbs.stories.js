import React from 'react';

import Breadcrumbs from './Breadcrumbs';

export default {
  title: 'Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
    breadcrumbs: {
      type: { required: true },
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
      // description: 'Test description',
    },
  },
};

const Template = args => <Breadcrumbs {...args} />;

export const Default = Template.bind({});
Default.args = {
  
};