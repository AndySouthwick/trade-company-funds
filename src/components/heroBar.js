import React, {Component} from 'react'
import {Container, Row, Col, Button} from 'reactstrap'

class HeroBar extends Component{
render(){
  return(
    <div  className="section-herobar">
    <Container>
      <Row>
        <Col xs="8">
          <div className="d-flex">
            <img src="images/logo.png" alt=""/> <h1>Register For A Webinar</h1>
          </div>
      <iframe src="https://player.vimeo.com/video/253155284?title=0&byline=0&portrait=0" width="100%" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </Col>
        <Col xs="4">
          <h2>Day Trading Intro Webinar</h2>
          <div Style="margin:auto;width:300px;"><div className="embedded-joinwebinar-button"><Button type="button" class="btn btn-default css3button" title="regpopbox_38575_8d4e0bf9ff"><span>Register now</span></Button></div></div>      </Col>
      </Row>
    </Container>
    </div>
  )
}
}
export default HeroBar