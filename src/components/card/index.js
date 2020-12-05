import React, { Component } from 'react'

import Paper from '@material-ui/core/Paper'

import './style.css'

class Smallcard extends Component {
    render() {
        return (
                <Paper className="card" elevation={0} onClick = {() => {return this.props.setTable(this.props.category)}} >
                {this.props.category}
                <br />
                <span className="count">{this.props.count}</span>
                </Paper>
        )
    }
}

export default Smallcard