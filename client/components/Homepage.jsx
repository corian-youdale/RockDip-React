import React from 'react'
import { connect } from 'react-redux'

import Nav from './Nav'
import { Route } from 'react-router-dom'

class Homepage extends React.Component {
    render () {
        return (
            <> 
                <div className='homepage'>
                    <div className="headerBackground">
                        <img src="images/headerBackgroundSized.png" />
                    </div>
                    <h3 className="brandName">RockDip. </h3>
                    {/* <h2 className="slogan">Doesn't Have Enough Slogans</h2> */}
                    {/* Make the slogans random each time */}
            </div>
            </>
        )
    }
}

function mapStateToProps(globalState) {
    return {

    }
}

export default connect(mapStateToProps)(Homepage)
