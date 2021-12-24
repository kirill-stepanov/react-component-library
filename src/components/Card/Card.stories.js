import React from 'react';

import Card from './Card';

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    image: {
      description: 'Link to the image (the alt attribute will be taken from the `title`)',
    },
  },
};


const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Central apartment Barcelona',
  rating: '7.9',
  hotelType: 'Apartment'
};