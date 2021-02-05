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
                <nav className="navBar">
                    <div className="nav-logo">
                        <Link to="/">
                            <img src="images/RockDipLogoBold_white.png"/>
                        </Link>
                    </div>
                    <div className="text">
                        {/* Link to shop */}
                        <span> Shop </span>
                    </div>
                    <div className="text">
                        {/* Link to About */}
                        <span> About </span>
                    </div>
                    <div className="text">
                        {/* Link to FAQ */}
                        <span> FAQ / Testimonials </span>
                    </div>
                    <div className="text">
                        {/* Link to Signup */}
                        <span> Sign Up </span>
                    </div>
                    <div>
                        {/* Shopping cart logo, conditional if logged in */}
                        {/* Your account logo, conditional if logged in */}
                    </div>
                </nav>
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

