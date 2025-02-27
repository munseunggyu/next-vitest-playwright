'use client'

import React, { useState } from 'react'

const fruit = {
  apple: 'apple',
  banna: 'banna',
  mango: 'mango',
} as const;

type Fruit = keyof typeof fruit;

const SelectButton = () => {
  const [selectValue, setSelectValue] = useState<Fruit>(fruit.apple);

  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value)
    setSelectValue(e.target.value as Fruit)
  }
  return (
    <div>
      <select
      value={selectValue}
      onChange={handleChangeSelect}
      className='text-black'
      id='select'
      >
        <option value={fruit.apple}>
          {fruit.apple}
        </option>
        <option value={fruit.banna}>
          {fruit.banna}
        </option>
        <option value={fruit.mango}>
          {fruit.mango}
        </option>
      </select>
      <div className='text-[orange]'>
        선택된값: {selectValue}
      </div>
    </div>
  )
}

export default SelectButton