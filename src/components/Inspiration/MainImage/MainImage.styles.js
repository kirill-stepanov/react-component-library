import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: url(${props => props.imageUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 300px;
  padding: 20px 30px;
  border-radius: 4px;
`

export const ContainerTitle = styled.h1`
  margin-bottom: 10px;
  font-family: 'ProximaNova-Semibold';
  font-size: 48px;
  line-height: 64px;
  color: #FFFFFF;
`
export const ContainerText = styled.p`
  font-family: 'ProximaNova-Regular';
  font-size: 18px;
  line-height: 30px;
  color: #FFFFFF;
`