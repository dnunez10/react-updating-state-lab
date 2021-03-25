// Code YouTubeDebugger Component Here
import React from 'react'

export default class YouTubeDebugger extends React.Component {
    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }

    bitrateChange = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            } 
        })
    }

    resolutionB = () => {
        this.setState({
            settings: {   
                ...this.state.settings,                            
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        })
    }

    render() {
        return (
            <div>
                <br/>
                <button className='bitrate' onClick={this.bitrateChange}>{this.state.settings.bitrate}</button> <br/>          

                <br/>
                <button className='resolution' onClick={this.resolutionB}>{this.state.settings.video.resolution}</button>
            </div>
        )
    }
}