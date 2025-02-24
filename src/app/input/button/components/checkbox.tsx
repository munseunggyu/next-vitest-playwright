'use client'

import React, { useState } from 'react'

const Checkbox = () => {
  const [checked, setChecked] = useState(false)
  return (
    <div>
      <div className='space-x-2'>
        <input checked={checked} onChange={(e) => setChecked(e.target.checked)} type="checkbox" id='checkbox' />
        <label htmlFor="checkbox">체크박스</label>
      </div>
      <div>
        체크박스값: {checked ? '참' : '거짓'}
      </div>

    </div>

  )
}

export default Checkbox