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
                    <span className="slogan">Doesn't Have Enough Slogans</span>
                    {/* Make the slogans random each time */}
                </div>
                <footer>
                    <span>RockDip is a ficticiously Trademarked product of Penekis Industries, which is a subsidiary of The Bank of Chaos</span>
                    <br></br>
                    <a href='https://pngtree.com/so/outdoor'>Homepage photo credit: pngtree.com</a>
                </footer>
            </>
        )
    }
}

function mapStateToProps(globalState) {
    return {

    }
}

export default connect(mapStateToProps)(Homepage)
