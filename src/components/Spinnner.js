import React, { Component } from 'react'
import loading from './loding.gif' 

export class Spinnner extends Component {
  render() {
    return (
      <div className='text-center'><img height={50} width={50} src={loading} alt="loading..." /></div>
    )
  }
}

export default Spinnner