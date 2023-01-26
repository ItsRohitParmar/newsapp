import React from 'react'
import loading from './loading.gif'
  const Spinner = () =>{
    return (
        <div className='text-center'>
            <img alt='abc' src={loading} alter="loading"/>
        </div>
    )
}

export default Spinner