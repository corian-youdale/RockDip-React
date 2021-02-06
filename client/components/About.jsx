import React from 'react'
import { connect } from 'react-redux'
import { Link, Route } from 'react-router-dom'
import { Redirect } from 'react-router'

class About extends React.Component {
    state = {

    }


render () {
    return (
        <>
            <div className="about">
                <h1>What on earth is RockDip?</h1>
            </div>
        </>
    )
}
}

function mapStateToProps(globalState) {
    return {
        user: globalState.user
    }
}

export default connect(mapStateToProps)(About)
