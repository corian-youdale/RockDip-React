import React from 'react'
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Faq extends React.Component {
  render() {
    return (
      <>
        <div className="faq">
          <div className="title">
            <h2><strong>Testimonials & FAQ</strong></h2>
          </div>
          <br />
          <div className='subtitle'>
            <h3><em>Testimonials:</em></h3>
          </div>
          <div>
            <em>"So.. It's like a permanent cracker?"</em> - Oli (Hihi 2020)
            <br />
            <br />
            <em>"The best Rock I've ever voluntarily put into my mouth"</em> - Bill from the Underpass, SH1
            <br />
            <br />
            <em>"A revolutionary product that marks a significant advancement for humankind as a whole"</em> - Elon Musk
            <br />
            <br />
            <em>"Shut Up And Take My Money"</em> - Phillip J. Fry
            <br />
            <br />
            <em>"If I purchase this will you please stop talking at me?" </em>- Receptionist @ Wellington Dental Clinic
          <div />
          <br />
          <br />
          <div className='subtitle'>
            <h3><em>FAQ:</em></h3>
          </div>
            <span className="faquestion">
              I'm vegan and I do cross-fit, is this product right for me?
            </span>
            <br />
            <span className="faqresponse">
              - Yes, Rock Dip is 100% vegan and free-range, all our products are free of allergins, parabins and aerosols.
            </span>
            <br /> <br />
            <span className="faquestion">
              I've seen Rocks on the side of the road, why should I buy a RockDip Rock rather than using one of those?
            </span>
            <br />
            <span className="faqresponse">
              - You shouldn't! Use whatever Rock you want, as long as you're dipping a Rock into Dip we're happy. Our aim is
              to provide a means for everyone and anyone to have access to a dipping mechanism that doesn't rely on
              pesky finite resources such as crackers or chips. Enough people don't have easy access to free-range Rocks
              that there's plenty of demand for our Products, but if you'd rather harvest your own Dipping Devices we
              fully support your decision!
            </span>
            <br /> <br />
            <span className="faquestion">
              I've only ever used Rocks as paperweights and an emergency key when I'm locked out of the house, are these Rocks
              able to be used for other purposes as well?
            </span>
            <br />
            <span className="faqresponse">
              - Yes, our Rocks are all trained for multiple functions. Many of our Rocks come from careers in other industries such
              as paperweights, Riverbed Management and even Retaining Walls. We know first hand that there is no limit to the greatness
              that one Rock can achieve and we love pushing the potential of each of our Rocks to the limit.
            </span>
          </div>
        </div>
      </>
    )
  }
}

function mapStateToProps(globalState) {
  return {

  }
}

export default connect(mapStateToProps)(Faq)
