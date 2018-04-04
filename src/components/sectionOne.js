import React, { Component } from 'react'
import {Container, Row, Col} from 'reactstrap'

class SectionOne extends Component {
  render(){
    return(
      <div className='section-one'>
        <Container>

          <Row>
            <Col>
              <h2><span>A little</span> about us</h2>
              <p>Our Group was founded in early 2008 in the United States. Its purpose: To create lasting knowledge in the minds of its traders while creating wealth.</p>
              <strong>History</strong>
              <p>We began by helping our members with personal and business insurance products, and as they began successfully creating discretionary funds in the market, the day trading side of our business boomed. Skeptical at first, we slowly began funneling-in live traders and saw the success that our members completely new to trading were having. At this point we knew we had a sustainable method of creating wealth that would help anyone willing to learn.
                Now, we regularly receive reports of many members who are making $500-$1,200 a day live trading.</p>

              <strong>Our Goals</strong>
              <p>Provide a clear path to financial independence for each of our traders through sound education and training.
                Help each of our traders achieve immediate return on their investments.
                Help traders retain their new wealth by continuing to practice sound trading principles and investment strategies.</p>
            </Col>
            <Col>
              <img src="images/building.png" alt="" width="100%"/>
              <div className="register-button">
                <div className="embedded-joinwebinar-button"><button type="button" className="btn btn-default css3button" title="regpopbox_38575_d1aee0eb74">
                  <span>Register now</span>
                </button>
                </div>
              </div>
            </Col>
            
          </Row>
          Do you want to get more info about us?
        </Container>


        <Container className="section-testimonials">
          <div className=" headline d-flex justify-content-center">
            <div className="d-flex flex-column">
              <h1>Testimonials from real traders</h1>
              <i>Real traders making real money and want to talk about it.</i>
            </div>
          </div>

          <Row>

            <Col md={{size: 4}}>

              <h3>Gustavo Beaklini</h3>
              <i>Tucson, Arizona</i>

              <p>
                “I cannot even explain how this happened. I wasn’t home for most of the day and what little amount of time in the morning in which I was home,
                I didn’t have time to trade as much as I wanted. I just came back home frustrated that it was really late and I was too tired to trade enough to
                make significant profit. But in a way that I can’t explain, the few trades that I posted in the morning and some trades that I posted before I
                went to bed yesterday, combined brought me the wonderful result of $859.59, which represents 6.3% profit since last report.
                This is way more than my daily goal of 1% to 2%. I think I want to raise my goal to 2% a day. And I swear that if
                I only get 2% a day I’ll already be the happiest man in earth. It just happens that I’m getting more. Good for me.
              </p>
            </Col>
            <Col md={{size: 4}}>
              <h3>Jason Hyium</h3>
              <i>Los Angeles, California</i>

              <p>“I was introduced to this group from a friend and after the company funded my account, I knew this group had trust in me as a trader to
                follow their system and in their ability to get results”</p>
            </Col>
            <Col md={{size: 4}}>
              <h3>Clinton Anderson</h3>
              <i>St. Louis, Missouri</i>

              <p>
                “This has been an eye opener when it came to my financial situation. To know that I could make what I did in a full days work,
                in only two hours was amazing.  The future has great things in store for me and this company.
                I have found new ways to gain income through this system that I never thought I would.
                With the eliteness of the product and the support of fellow traders, this has been a great experience for me.
                I don’t know where I would be or where I was going without them.”
              </p>
              <div className="register-button">
                <div className="embedded-joinwebinar-button"><button type="button" className="btn btn-default css3button" title="regpopbox_38575_d1aee0eb74">
                  <span>Register now</span>
                </button>
                </div>
              </div>
            </Col>
          </Row>

        </Container>
        <Container>
          <Row>
            <Col>
              <h1>Contact us</h1>

             <p>Need to contact us? No Problem, let us know how we can help.
               Office</p>

              <p>Dan: (801) 651-4832 dan@gotradeourmoney.com</p>

              <p>Monday – Friday, 9am – 5pm MST</p>

              <p>Mailing Address</p>

              <p>2889 Ashton Blvd,<br/>
                Lehi UT, 84043</p>

            </Col>
            <Col>
              <br/><br/>
              <p>Other Questions or Inquiries please register to speak to one of our Trading Coaches.</p>

            </Col>
          </Row>
        </Container>
        <footer>
          <Container>
            <Row>
              <Col>
                © Copyright 2018 goTradeOurMoney
                Futures and options trading is speculative and involves substantial risk of loss. Past performance is not indicative of future results. IMPORTANT NOTE: Trading foreign exchange or futures on margin carries a high level of risk, and may not be suitable for all investors. The high degree of leverage can work against you as well as for you. Before deciding to trade foreign exchange or futures, you should carefully consider your investment objectives, level of experience, and risk appetite. The possibility exists that you could sustain a loss of some or all of your initial investment and therefore you should not invest money that you cannot afford to lose. You should be aware of all the risks associated with foreign exchange and futures trading, and seek advice from an independent financial adviser if you have any doubts or questions. Past trading history does not indicate future trading success.v
              </Col>
            </Row>
          </Container>
        </footer>


      </div>


    )
  }
}
export default SectionOne