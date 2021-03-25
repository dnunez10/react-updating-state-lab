// Code DigitalClicker Component Here
import React from 'react'

export default class DigitalClicker extends React.Component {
    state = {
        timesClicked: 0
    }

    handleClick = () => {
        let count = this.state.timesClicked + 1
        this.setState({
            timesClicked: count
        })
    }


    render() {
        return(
            <div>                
                <button style={{height: 50, width: 50}} onClick={this.handleClick}>{this.state.timesClicked}</button>
                
            </div>
            
        )
    }
}