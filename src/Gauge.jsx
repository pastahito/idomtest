/* ========= React ========= */
import React, {Component} from 'react'

/* ========== CSS ========== */
import './gauge.css'

export default class Gauge extends Component {
	constructor(props) {
        super(props)
    }

    // No need to update, D3 handles its own rendering
    componentWillUpdate() {
        return false
    }

    // This is the actual D3 wrapper
    componentDidMount() {
        
        // D3 Gauge sample found here:
        // http://bl.ocks.org/NPashaP/59c2c7483fb61070486835d15c807941
        var svg=d3.select('#gauge-svg')
        var g=svg.append('g').attr('transform','translate(450,350)')
        const domain = [0,100]
        const gg = viz.gg()
        .domain(domain)
        .outerRadius(300)
        .innerRadius(30)
        .value(0.5*(domain[1]+domain[0]))
        .duration(500)
        gg.defs(svg)
        g.call(gg)

        // Wrapper's key line. The updating is triggered by the parent
        this.props.updateD3(t => gg.setNeedle(t))
    }

	render() {
		return (
			<div id='gauge'>
                <svg id='gauge-svg' height='700px' width='800px'/>
            </div>
		)
	}
}
