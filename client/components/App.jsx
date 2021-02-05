import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Nav from './Nav'
import Homepage from './Homepage'

// import { fetchUser } from '../actions'

export class App extends React.Component {

  state = {
    user: []
  }

  componentDidMount () {
    // this.props.dispatch(fetchUser())
  }

  render () {
    return (
      <div className='app'>
        <Router>
          <Route path="/" component={Nav}/>

          <Switch>
            <Route exact path='/' component={Homepage}/>
          </Switch>
        </Router>
      </div>
    )
  }
}

function mapStateToProps (globalState) {
  return {
    user: globalState.user,
  }
}

export default connect(wmapStateToProps)(App)
