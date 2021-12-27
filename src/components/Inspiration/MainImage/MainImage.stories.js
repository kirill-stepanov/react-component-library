import React from 'react';

import MainImage from './MainImage';

export default {
  title: 'Inspiration/MainImage',
  component: MainImage,
};

const Template = (args) => <MainImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  imageUrl: 'https://images8.alphacoders.com/944/thumb-1920-944311.jpg',
  title: 'Title',
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mollis mi nec est ornare, sit amet ultrices ligula malesuada. Cras tempor, lorem finibus malesuada imperdiet, dui turpis feugiat urna, vel fermentum tellus ex placerat mauris. Phasellus eget ante sagittis, fermentum arcu ut, porttitor dui. Integer pharetra ante non leo ornare, tincidunt aliquam augue luctus. Nunc mattis semper nunc ac varius. Duis molestie pellentesque pellentesque. Nunc tincidunt libero in facilisis suscipit. Nulla tortor velit, posuere id dui et, dignissim facilisis neque. Sed commodo sapien ac commodo convallis. Donec placerat tempus venenatis. Pellentesque semper dolor ut ligula mollis tempor. Phasellus suscipit commodo velit vel hendrerit. Curabitur dignissim malesuada tortor, ut convallis enim pellentesque ut. Sed ac diam quis nulla dignissim sodales.'
};
