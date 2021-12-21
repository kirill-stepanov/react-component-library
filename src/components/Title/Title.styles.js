import styled from 'styled-components'

import media from '../../assets/media'

export const Heading1 = styled.h1`
  font-family: "ProximaNova-Semibold";
  font-size: 40px;
  line-height: 54px;
  color: #000000;

  ${media.desktop`
    font-size: 48px;
    line-height: 64px;
  `}
`

export const Heading2 = styled.h2`
  font-family: "ProximaNova-Semibold";
  font-size: 30px;
  line-height: 42px;
  color: #000000;

  ${media.desktop`
    font-size: 34px;
    line-height: 50px;
  `}
`

export const Heading3 = styled.h3`
  font-family: "ProximaNova-Semibold";
  font-size: 24px;
  line-height: 36px;
  color: #000000;

  ${media.desktop`
    font-size: 26px;
    line-height: 40px;
  `}
`

export const Heading4 = styled.h4`
  font-family: "ProximaNova-Semibold";
  font-size: 20px;
  line-height: 32px;
  color: #000000;

  ${media.desktop`
    font-size: 22px;
    line-height: 34px;
  `}
`

export const Heading5 = styled.h5`
  font-family: "ProximaNova-Semibold";
  font-size: 18px;
  line-height: 30px;
  color: #000000;
`

export const Heading6 = styled.h6`
  font-family: "ProximaNova-Semibold";
  font-size: 16px;
  line-height: 26px;
  color: #000000;
`