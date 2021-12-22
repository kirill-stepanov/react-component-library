import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  font-family: 'ProximaNova-Regular';
  font-size: 14px;
  line-height: 22px;
  color: #222222;
`

export const ContainerToggle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const ContainerMenu = styled.div`
  position: absolute;
  padding: 20px;
  width: 100%;
  left: 0;
  outline: 1px solid #E4E4E4;
  box-sizing: border-box;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
`