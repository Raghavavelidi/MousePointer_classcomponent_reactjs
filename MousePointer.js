import React, { Component } from 'react'

 class MousePointer extends Component {
    constructor(){
        super()
        this.state={
            count:0,
            x:0,
            y:0
        }

    }
    logMousePointer =(e)=>{
        this.setState({
            x: e.clientX,
            y: e.clientY
        })

    }
    componentDidMount(){
        window.addEventListener('mousemove',this.logMousePointer);

    }
  render() {
    return (
      <div>
      X - {this.state.x}
      <br />Y - {this.state.y}
      </div>
    )
  }
}

export default MousePointer