import styled from 'styled-components'

export const Container = styled.div`
  position: relative;

  & input:focus + label, & input:not(:placeholder-shown) + label {
    top: 8px;
    left: 16px;
    font-size: 12px;
    line-height: 18px;
    color: #484848;
  }
`

export const ContainerInput = styled.input`
  padding: 18px 15px 0;
  background: #FFFFFF;
  border: 1.5px solid #E4E4E4;
  box-sizing: border-box;
  border-radius: 4px;
  width: 100%;
  height: 60px;
  font-family: "ProximaNova-Regular";
  font-size: 16px;
  line-height: 26px;
  color: #222222;

  &:focus {
    outline: 1.5px solid #000000;
  }
`

export const ContainerLabel = styled.label`
  pointer-events: none;
  position: absolute;
  transition: all 0.2s ease-out;
  top: 17px;
  left: 15px;
  font-family: "ProximaNova-Regular";
  font-size: 16px;
  line-height: 26px;
  color: #484848;
`
