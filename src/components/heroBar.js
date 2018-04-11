import React, {Component} from 'react'
import {Container} from 'reactstrap'

class HeroBar extends Component{
render(){
  return(
    <Container>


    <div  className="section-herobar">
      <div className="video-section">
        <img src="images/logo.png" alt=""/>
        <h1>Register For A Webinar</h1>
        <iframe title="unique" src="https://player.vimeo.com/video/263074062?autoplay=1&title=0&byline=0&portrait=0" width="100%" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        <div className="register-button">
          <div className="embedded-joinwebinar-button"><button type="button" className="btn btn-default css3button" title="regpopbox_38575_d1aee0eb74">
            <span>Register now</span>
          </button>
          </div>
        </div>
      </div>

          <ul className="hero-ul">
            <li>Trade our company accounts</li>
            <li>Keep 60 to 80% of the profits</li>
            <li>Proprietary indicators</li>
            <li>No experience necessary</li>
            <li>Trade 1-2 hours a day (you choose when)</li>
          </ul>
    </div>
    </Container>
  )
}
}
export default HeroBar