import React from 'react'
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

class SignUp extends React.Component{
    render (){
        return(
            <>
                <div className="signup">
                    <h1>Sign Up Goes Here</h1>
                </div>
            </>
        )
    }
}

function mapStateToProps(globalState){
    return {

    }
}

export default connect(mapStateToProps)(SignUp)
