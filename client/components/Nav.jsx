import React from 'react'
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Nav extends React.Component {


render () {
    return (
      <>
        <header>
            <div>
              {/* Logo & or photo */}
            </div>
            <div className="slogan">
              <h2>Because Rock Beats Chip</h2>
            </div>
            <div className="navBar">
                <nav>
                    <div className="nav-logo">
                        <Link to="/">
                            <img src="images/RockDipLogoBold_white.png"/>
                        </Link>
                    </div>
                    <div className="nav-shop">
                        {/* Link to shop */}
                        <span> Shop </span>
                    </div>
                    <div className="nav-about">
                        {/* Link to About */}
                        <span> About </span>
                    </div>
                    <div className="nav-faq">
                        {/* Link to FAQ */}
                        <span> FAQ / Testimonials </span>
                    </div>
                    <div className="nav-signup">
                        {/* Link to Signup */}
                        <span> Sign Up </span>
                    </div>
                    <div>
                        {/* Shopping cart logo, conditional if logged in */}
                        {/* Your account logo, conditional if logged in */}
                    </div>
                </nav>
            </div>
        </header>
      </>
    )
  }
}
function mapStateToProps(globalState) {
    return {
      // isAuthenticated: globalState.isAuthenticated
      user: globalState.user
    }
}

export default connect(mapStateToProps)(Nav)
// export default connect()(Nav)

