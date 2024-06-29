import React from 'react'

const Cardheader = ({cardtype,price}) => {
  return (
    <div className='card-title'>
          <p className='text-muted plan'>{cardtype}</p>
          <h1>${ price }/month</h1>
    </div>
  )
}

export default Cardheader