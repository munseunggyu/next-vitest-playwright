import React from 'react'

const InputLabel = () => {
  return (
    <div className='space-y-1'>
      <div>
        <label htmlFor="label">라벨</label>
      </div>
      <input type="text" id='label' className='bg-black border' />
      <div>값1: </div>
    </div>
  )
}

export default InputLabel