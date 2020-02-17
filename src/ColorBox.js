import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    console.log(this)

    const newOpacity = this.props.opacity - 0.1 ;
    const innerBox = newOpacity >= 0.1 ? (<ColorBox opacity={newOpacity} />) : null;
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {innerBox}
      </div>
    )
  }

}

