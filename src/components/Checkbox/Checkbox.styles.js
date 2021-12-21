import styled from 'styled-components'

export const CheckboxContainer = styled.div`
  height: 24px;
  width: 24px;

  ${(props) => props.size === 'small' && `
    height: 22px;
    width: 22px;
  `}

  ${(props) => props.size === 'large' && `
    height: 28px;
    width: 28px;
  `}

  border: 1px solid #C4C4C4;
  box-sizing: border-box;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &:not(${(props) => !props.isActive}):hover{
    border: 1px solid #000000;
  }
  
  ${(props) => props.isActive && `
    background: #000000;
    border: 1px solid #888888;
    border-radius: 4px;
  `}
`