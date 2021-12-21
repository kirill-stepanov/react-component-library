import styled from 'styled-components'

export const DropdownContainer = styled.div`
  position: relative;
  font-family: 'ProximaNova-Regular';
`

export const DropdownToggle = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;

  ${(props) => props.filter && `
    padding: 9px 20px;
    background: #FFFFFF;
    outline: 1px solid #E4E4E4;
    box-sizing: border-box;
    border-radius: 4px;
    font-size: 14px;
    line-height: 22px;
    color: #222222;

    &:hover{
      outline: 1px solid #000000;
    }
  `};

  ${(props) => props.isOpen && props.filter &&`
    outline: 2px solid #000000;
    &:hover{
      outline: 2px solid #000000;
    }
  `}
  
  ${(props) => props.isFilterSelected && props.filter &&`
    outline: 2px solid #000000;
    background: #F7F7F7;
    &:hover{
      outline: 2px solid #000000;
    }
  `}
`
export const DropdownMenu = styled.div`
  width: 100%;
  position: absolute;
  z-index: 1;
  background: #FFFFFF;
  outline: 1px solid #E4E4E4;
  box-sizing: border-box;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  padding: 20px;
  left: 0;
  top: 50px;
`