import React from 'react'
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Faq extends React.Component{
    render (){
        return(
            <>
                <div className="faq">
                    <h1>{'FAQ & Testimonals'}</h1>
                </div>
            </>
        )
    }
}

function mapStateToProps(globalState){
    return {

    }
}

export default connect(mapStateToProps)(Faq)
