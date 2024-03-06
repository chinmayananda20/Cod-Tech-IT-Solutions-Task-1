// a component which is used in case of loading 
import React, { Component } from 'react'

export class Spinner extends Component {
  render() {
    return (
      <div>
        <div className=" spinner-border" role="status">
  <span className ="sr-only ">Loading...</span>
</div>
      </div>
    )
  }
}

export default Spinner