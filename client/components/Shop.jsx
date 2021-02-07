import React from 'react'
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Shop extends React.Component{
    render (){
        return(
            <>
                <div className="shop">
                    <div className="title">
                        <h1>Shop Goes Here</h1>
                    </div>
                </div>
            </>
        )
    }
}

function mapStateToProps(globalState){
    return {

    }
}

export default connect(mapStateToProps)(Shop)
