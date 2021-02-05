import React from 'react'
import { connect } from 'react-redux'

import Nav from './Nav'
import { Route } from 'react-router-dom'

class Homepage extends React.Component {
    render () {
        return (
            <div className='homepage'>
                <div>
                    <Route path = '/' component={Nav}/>
                </div>
                <div className='homepage-photo'>
                    {/* <img src="" alt="Epic Rock + Dip Photo"></img> */}
                </div>
            </div>
        )
    }
}

function mapStateToProps(globalState) {
    return {

    }
}

export default connect(mapStateToProps)(Homepage)
