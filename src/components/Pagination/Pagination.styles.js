import styled from 'styled-components'

export const PaginationList = styled.div`
  display: flex;
  justify-content: center;
`
export const PaginationListItem = styled.button`
  color: #222222;
  cursor: pointer;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 4px;
  background: transparent;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:not(${(props) => !props.isActive}):hover{
    background: #F7F7F7;
    border-radius: 4px;
  }

  ${(props) => props.isActive && `
    background: #000000;
    border-radius: 4px;
    color: #ffffff;
  `}
`

export const PaginationListItemText = styled.span`
  font-family: 'ProximaNova-Medium';
  font-size: 14px;
  line-height: 22px;
`