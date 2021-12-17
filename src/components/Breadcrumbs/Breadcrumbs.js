import React from 'react';

import BreadcrumbsArrow from '../../assets/icons/breadcrumbs-arrow'

import {
  List,
  ListItem,
  ListItemLink,
  ListItemText,
  ListItemIcon,
} from './Breadcrumbs.styled';

export default function Breadcrumbs({ breadcrumbs }) {
  return (
    <List>
      {
        breadcrumbs.map((item, index) => (
          <ListItem key={item.id}>
            {
              item.link
              ? (
                <ListItemLink href={item.link}>
                  {item.text}
                </ListItemLink>
              )
              : (
                <ListItemText>
                  {item.text}
                </ListItemText>
              )
            }

            {
              index !== breadcrumbs.length - 1 && (
                <ListItemIcon>
                  <BreadcrumbsArrow />
                </ListItemIcon>
              )
            }
          </ListItem>
        ))
      }
    </List>
  );
}