import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    let currOpacity = this.props.opacity
    let newOpacity = currOpacity - 0.1
    return (
      <div className="color-box" style={{opacity: currOpacity /*replace null with the value*/}}>
        {/* your conditional code here! */
          currOpacity < 0.2 ? null : ( <ColorBox opacity={newOpacity} />)
        }
      </div>
    )
  }

}

