import styled from 'styled-components'

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: "ProximaNova-Semibold";
  font-size: 14px;
  line-height: 22px;
  color: #FFFFFF;
  
  padding: 9px 15px;
  padding: ${(props) => props.size === 'small' && '6px 10px'};
  padding: ${(props) => props.size === 'large' && '13px 25px'};
  
  background: #1A6AFF;
  background: ${(props) => props.variant === 'dark' && '#222222'};

  ${(props) => props.disabled && `
    cursor: not-allowed;
    background: #888888;
  `};

  &:not(${(props) => !props.disabled}):hover {
    background: #1351C2;
    background: ${(props) => props.variant === 'dark' && '#000000'};
  };
`