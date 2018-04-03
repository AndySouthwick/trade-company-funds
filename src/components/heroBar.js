import React, {Component} from 'react'
import {Container, Row, Col, Button} from 'reactstrap'

class HeroBar extends Component{
render(){
  return(
    <div  className="section-herobar">
    <Container fluid>
      <Row>
        <Col xs="12" md="8">
          <div className="d-flex">
            <img src="images/logo.png" alt=""/> <h1>Register For A Webinar</h1>
          </div>
          <div className="video-contaner">
            <iframe src="https://player.vimeo.com/video/253155284?autoplay=1&title=0&byline=0&portrait=0" width="100%" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
            <div className="register-button">
              <div className="embedded-joinwebinar-button"><button type="button" className="btn btn-default css3button" title="regpopbox_38575_d1aee0eb74">
                <span>Register now</span>
              </button>
              </div>
            </div>
          </div>

        </Col>
        <Col md="4">
          <ul className="hero-ul">
            <li>Trade our company accounts</li>
            <li>Keep 60 to 80% of the profits</li>
            <li>Proprietary indicators</li>
            <li>No experience necessary</li>
            <li>Trade 1-2 hours a day (you choose when)</li>
          </ul>
        </Col>
      </Row>
    </Container>
    </div>
  )
}
}
export default HeroBar