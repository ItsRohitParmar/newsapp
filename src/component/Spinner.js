import React, { Component } from 'react'
import loading from './loading.gif'
export class Spinner extends Component {
  render() {
    return (
        <div className='text-center'>
            <img alt='abc' src={loading} alter="loading"/>
        </div>
    )
  }
}

export default Spinner