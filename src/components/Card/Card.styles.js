import styled from 'styled-components'

export const Container = styled.div`
  max-width: 250px;
  cursor: pointer
`

export const CardImage = styled.img`
  object-fit: cover;
  height: 160px;
  width: 100%;
  border-radius: 4px;
  margin-bottom: 5px;
`

export const CardTitle = styled.div`
  margin-bottom: 2px;
  font-family: 'ProximaNova-Medium';
  font-size: 16px;
  line-height: 26px;
  color: #222222;
`

export const CardInfo = styled.div`
  display: flex;
  align-items: center;
  font-family: 'ProximaNova-Regular';
  font-size: 14px;
  line-height: 22px;
  color: #222222;

  svg {
    margin-right: 7px;
    margin-bottom: 3px;
  }
`

export const CardInfoText = styled.div`
  margin-left: 10px;
  font-family: 'ProximaNova-Regular';
  font-size: 14px;
  line-height: 22px;
  color: #888888;
`