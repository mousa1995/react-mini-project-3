import React, { Component } from 'react'

export default class Time extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Time: new Date().toLocaleTimeString()
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                Time: new Date().toLocaleTimeString()
            })
        })
    }
    render() {
        return (
            <div>{this.state.Time}</div>
        )
    }
}
