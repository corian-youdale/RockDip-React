import React from 'react'
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

// import headerbackground from '../../server/public/images/headerBackground'

class Nav extends React.Component {


render () {
    return (
      <>
                <nav className="navBar">
                    <div className="nav-logo">
                        <Link to="/">
                            <img src="images/RockDipLogoBold_white.png" />
                        </Link>
                    </div>
                    <div className="text">
                        <Link to="/shop">
                            <span> Shop </span>
                        </Link>
                    </div>
                    <div className="text">
                        <Link to="/about">
                          <span> About </span>
                        </Link>
                    </div>
                    <div className="text">
                        <Link to="/faq">
                            <span> {'FAQ & Testimonials'}</span>
                        </Link>
                    </div>
                    <div className="text">
                        <Link to="/signup">
                            <span> Sign Up </span>
                        </Link>
                    </div>
                    <div>
                        {/* Shopping cart logo, conditional if logged in */}
                        {/* Your account logo, conditional if logged in */}
                    </div>
                </nav>
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

