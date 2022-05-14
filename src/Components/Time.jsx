import React, { Component } from 'react'

export default class Time extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Time: new Date().toLocaleTimeString()
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                Time: new Date().toLocaleTimeString()
            })
            console.log(this.state.Time);
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }
    render() {
        return (
            <div>{this.state.Time}</div>
        )
    }
}
