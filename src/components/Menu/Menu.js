import React, { useState } from 'react';

import {
  List,
  ListItem,
  ListItemText,
 } from './Menu.styles';

const Menu = (props) => {
  const { items } = props
  
  const [activeType, setActiveType] = useState(items[0].id)

  return (
    <List>
      {
        items.map((item) => (
          <ListItem 
            key={item.id}
            onClick={() => setActiveType(item.id)}
            isActive={item.id === activeType}
          >
            <ListItemText>
              {item.title}
            </ListItemText>
          </ListItem>
        ))
      }
    </List>
  );
}

export default Menu