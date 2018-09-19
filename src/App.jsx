/* ========= React ========= */
import React, {Component} from 'react'

/* ========= Components ========= */
import Gauge from './Gauge.jsx'

/* ===== Singleton Socket ======= */
import socket from './socket.js'


export default class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
            temperature: 50
        }        
        this.updateTemperature = newValue => {
            this.setState({temperature: newValue})
        }

        // Enables D3 remote updating without re-rendering
        this.updateGauge = () => {}
        this.setUpdater = newFunction => {
            this.updateGauge = newFunction
        }

        // Handles integers sent by server
        socket.on('temperature', data => {
            const t = Number.parseInt(data) || 0
            console.log(t)
            this.updateTemperature(t)
            this.updateGauge(t)
        })

    }

	render() {
		return (
			<div>
                Current Temperature: {this.state.temperature}
                <Gauge updateD3={this.setUpdater}/>
			</div>
		)
	}
}
