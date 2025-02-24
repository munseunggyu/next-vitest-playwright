import React from 'react'

const InputPlaceholder = () => {
  return (
    <div className='space-y-1'>

      <input id="basic" type="text" className='bg-black border' placeholder='값을 입력해주세요.' />
      <div>값2: </div>
    </div>
  )
}

export default InputPlaceholder