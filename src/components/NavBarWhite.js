import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap'

class Navigation extends Component{
  render(){
    return(
<div className="white-bar">
      <div className=" navbar-section" >

        <span>DayTradeCompanyFunds</span>
        <ul>
          <li>About</li>
          <li>Testimonials</li>
          <li>Conatact</li>
        </ul>

      </div>
</div>
    )
  }

}
export default Navigation