import styled from "styled-components"

export const NavWrapper = styled.header`
  position: absolute;
  top: 0%;
  left: 0%;
  z-index: 1000;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;

  & .logo {
    color: #fff;
    text-decoration: none;
    font-size: 1.2em;
  }
`
export const BannerWrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
  }
  & .content {
    position: relative;
    max-width: 900px;
    text-align: center;
    z-index: 22;
  }
  & .content h1 {
    color: #fff;
    font-size: 5em;
  }
  & .content p {
    color: #fff;
    font-size: 1.2em;
  }
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 400px;
    z-index: 1;
    background: linear-gradient(to top, #111, transparent);
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 400px;
    z-index: 1;
    background: linear-gradient(to bottom, #111, transparent);
  }
  ${props => props.theme.devices.phone} {
    & .content h1 {
      font-size: 2.5em;
    }
    & .content p {
      font-size: 1em;
    }
  }
`

export const AboutWrapper = styled.section`
  position: relative;
  width: 100%;

  & .about .contentBx {
    text-align: end;
  }
  & .contentBx .titleText {
    font-weight: 600;
    color: #fff;
    font-size: 2em;
    margin-bottom: 10px;
  }
  & .contentBx .text {
    color: #fff;
    font-size: 1em;
  }
  & img {
    width: 100%;
    position: relative;
  }

  ${props => props.theme.devices.phone} {
    & .about {
      flex-direction: column;
    }
    & .about .contentBx {
      min-width: 100%;
      width: 100%;
      text-align: center;
      padding-right: 0px;
    }
    & img {
      min-height: 250px;
      margin-top: 50px;
    }
  }
`

export const Banner2Wrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 400px;
    z-index: 1;
    background: linear-gradient(to top, #111, transparent);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 400px;
    z-index: 1;
    background: linear-gradient(to bottom, #111, transparent);
  }
`

export const DestinationWrapper = styled.section`
  text-align: center;
  color: #fff;
  & .destinationList {
    position: relative;
    margin-top: 50px;
  }
  & .destinationList .box {
    position: relative;
    min-width: 350px;
    height: 480px;
    background: #191919;
    transition: 0.5s;
    margin: 10px;
    padding: 0;
  }
  & .destinationList:hover .box {
    opacity: 0.2;
    cursor: pointer;
  }
  & .destinationList:hover .box:hover {
    opacity: 1;
  }
  & img {
    position: relative;
    width: 100%;
    height: 400px;
  }
  & .destinationList .box .content {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .destinationList .box .content h2 {
    color: #fff;
    font-weight: 500;
    line-height: 1.2em;
    font-size: 1.5em;
  }
  & .destinationList .box .content h2 span {
    font-size: 0.8em;
    font-weight: 300;
    opacity: 0.5;
  }
  & img {
    width: 100%;
  }
  ${props => props.theme.devices.phone} {
    & .destinationList .box {
      margin-bottom: 20px;
    }
  }
`
export const Banner3Wrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.8;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 400px;
    z-index: 1;
    background: linear-gradient(to top, #111, transparent);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 400px;
    z-index: 1;
    background: linear-gradient(to bottom, #111, transparent);
  }
`

export const FooterWrapper = styled.section`
  & footer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  & footer .sci {
    position: relative;
    display: flex;
    flex-direction: row;
  }
  & .sci li {
    list-style: none;
  }
  & .sci li a {
    text-decoration: none;
    margin: 0 20px;
    cursor: pointer;
    color: white;
  }
  & .sci li a img {
    max-width: 40px;
  }
  & .sci li a:hover {
    filter: invert(1);
    max-width: 40px;
  }
  & h4 {
    color: #fff;
  }
  ${props => props.theme.devices.phone} {
    & .sci li a {
      max-width: 30px;
    }
    & h4 {
      font-size: 1em;
    }
  }
`
