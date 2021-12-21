import styled from 'styled-components'

export const List = styled.div`
  display: flex;
`
export const ListItem = styled.div`
  display: flex;
  align-items: center;
`

export const ListItemLink = styled.a`
  font-family: 'ProximaNova-Regular';
  font-size: 14px;
  line-height: 22px;
  text-decoration: none;
  color: #222222;
  cursor: pointer;
  font-family: 'ProximaNova-Medium';

  &:hover {
    text-decoration: underline;
  }
`

export const ListItemText = styled.p`
  font-family: 'ProximaNova-Regular';
  font-size: 14px;
  line-height: 22px;
  color: #888888;
  text-decoration: none;
  cursor: auto;
`

export const ListItemIcon = styled.div`
  margin: 0 9.5px;
  display: flex;
  align-items: center;
`