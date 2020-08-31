import React, { useRef } from "react"
import {
  BannerWrapper,
  AboutWrapper,
  DestinationWrapper,
  Banner2Wrapper,
  Banner3Wrapper,
  FooterWrapper,
} from "../elements"
import { Container, Row, Col, Button } from "react-bootstrap"
import { Instagram, Twitter, Linkedin } from "@styled-icons/boxicons-logos"
import { useUsuario } from "../func/store"
import { Link } from "gatsby"

export const Banner = ({ data }) => {
  const { VALOR, handle } = useUsuario()
  console.log(VALOR)
  return (
    <BannerWrapper>
      <img src={data.img} alt="banner" />
      <div className="content">
        <h1>{data.box.h2}</h1>
        <p>{data.box.p}</p>

        <Button onClick={() => handle()}>Learn More</Button>
      </div>
    </BannerWrapper>
  )
}

export const About = ({ data }) => {
  const { myREF } = useUsuario()

  return (
    <AboutWrapper>
      <Container className="about" ref={myREF}>
        <Row>
          <Col lg={6}>
            <div className="contentBx">
              <h2 className="titleText">{data.box.h2}</h2>
              <p className="text">{data.box.p}</p>
              <Button>Popular Destination</Button>
            </div>
          </Col>
          <Col lg={6}>
            <img src={data.img} alt="about" />
          </Col>
        </Row>
      </Container>
    </AboutWrapper>
  )
}
export const Banner2 = ({ data }) => {
  return (
    <Banner2Wrapper>
      <img src={data.img} className="fitBg" alt="banner2" />
    </Banner2Wrapper>
  )
}
export const Destination = ({ data }) => {
  return (
    <DestinationWrapper>
      <div>
        <h2>{data.box.h2}</h2>
        <p>{data.box.p}</p>
      </div>
      <Container className="destinationList">
        <Row>
          {data.destinationList.map((ele, idx) => (
            <Col className="box" key={idx}>
              <div>
                <img src={ele.img} alt={idx} />
              </div>
              <div className="content">
                <h2>
                  {ele.content.h2}
                  <br />
                  <span>{ele.content.span}</span>
                </h2>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <a href="#" className="btn">
        View More
      </a>
    </DestinationWrapper>
  )
}

export const Banner3 = ({ data }) => {
  return (
    <Banner3Wrapper>
      <img src={data.img} className="fitbg" />
    </Banner3Wrapper>
  )
}

export const Footer = () => {
  return (
    <FooterWrapper>
      <footer>
        <ul className="sci">
          <li>
            <a>
              <Instagram size="35" />
            </a>
          </li>
          <li>
            <a>
              <Twitter size="35" />
            </a>
          </li>
          <li>
            <a>
              <Linkedin size="35" />
            </a>
          </li>
        </ul>
        <h4>Copyright @2020 By Josho. All rights reserved.</h4>
      </footer>
    </FooterWrapper>
  )
}
