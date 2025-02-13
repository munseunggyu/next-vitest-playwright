'use client'
import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <div className='text-xl font-bold mb-2'>
        카운터: {count}
      </div>
      <div className='flex gap-2'>
        <button onClick={() => setCount(prev => prev + 1)} className='border py-1 px-2.5 rounded-md'>+1</button>
        <button onClick={() => setCount(prev => prev - 1)} className='border py-1 px-2.5 rounded-md'>-1</button>
        <button onClick={() => setCount(0)} className='border py-1 px-2.5 rounded-md'>reset</button>
      </div>
    </div>
  )
}

export default Counter