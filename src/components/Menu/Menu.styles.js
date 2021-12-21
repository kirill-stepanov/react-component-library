import styled from 'styled-components'

export const List = styled.div`
  overflow: auto;
  white-space: nowrap;
  border-bottom: 1px solid #E4E4E4;
  padding-bottom: 10px;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const ListItem = styled.button`
  display: inline-block;
  text-align: center;
  border: none;
  padding: 7px 10px;
  background: #FFF;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.1s ease-out;
  position: relative;

  &:hover{
    background: #F7F7F7;
  }

  &:not(:last-child){
    margin-right: 20px;
  }

  &:not(${(props) => !props.isActive}):active {
    transform: scale(.95);
  }

  ${(props) => props.isActive && `
    &:after {
      position: absolute;
      content: '';
      width: 100%;
      height: 2px;
      background: #000000;
      border-radius: 0.5px;
      left: 0;
      bottom: -10px;
    }
  `}
`

export const ListItemText = styled.span`
  font-family: 'ProximaNova-Regular';
  font-size: 16px;
  line-height: 26px;
  color: #484848;
`
