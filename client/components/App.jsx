import React from 'react'
import { connect } from 'react-redux'
import ReactSVG from 'react-svg'

import { fetchFruits } from '../actions'

import RockDipLogo from "../../server/public/Images/RockDip_Logo_01"

export class App extends React.Component {
  state = {
    fruits: []
  }

  componentDidMount () {
    this.props.dispatch(fetchFruits())
  }

  render () {
    return (
      <div className='app'>
        <header>
          <div>
            {/* Logo & or photo */}
          </div>
          <div className="slogan">
            <h2>Because Rock Beats Chip</h2>
          </div>
          <div className="navBar">
            <nav>
              <div>
                <a className="navBar-left">
                  <img src="server/public/Images/RockDip_Logo_01.svg"></img>
                  <img src="../../server/public/Images/RockDip_Logo_01.svg"></img>
                  <ReactSVG src={RockDipLogo} />
                </a>
              </div>
            </nav>
          </div>
        </header>

        <h1>Fullstack Boilerplate - with Fruits!</h1>
        <ul>
          {this.props.fruits.map(fruit => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps (globalState) {
  return {
    fruits: globalState.fruits
  }
}

export default connect(mapStateToProps)(App)
