import React from 'react'

const DivContentEditable = () => {
  return (
    <div className='space-y-1'>

      <div id='div-content' className='bg-black border' contentEditable />
      <div>값3: </div>
    </div>
  )
}

export default DivContentEditable