import React from 'react';

import PropTypes from 'prop-types'

import BreadcrumbsArrow from '../../assets/icons/breadcrumbs-arrow'

import {
  List,
  ListItem,
  ListItemLink,
  ListItemText,
  ListItemIcon,
} from './Breadcrumbs.styles';

const Breadcrumbs = (props) => {
  const { breadcrumbs } = props

  Breadcrumbs.propTypes = {
    breadcrumbs: PropTypes.array,
  }

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

export default Breadcrumbs