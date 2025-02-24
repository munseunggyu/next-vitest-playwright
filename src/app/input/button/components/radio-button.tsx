'use client'

import React, { useState } from 'react'

const fruit = {
  apple: 'apple',
  banna: 'banna',
  mango: 'mango',
} as const;

type Fruit = keyof typeof fruit;

const RadioButton = () => {
  const [radio, setRadio] = useState<Fruit>(fruit.apple);

  const handleChangeRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    setRadio(e.target.value as Fruit)
  }
  return (
    <div>
      <div className='flex items-center gap-1'>
        <input value={'apple'} checked={radio === 'apple'} onChange={handleChangeRadio} type="radio" name="fruit" id='apple' />
        <label htmlFor="apple">
          apple
        </label>
      </div>
      <div className='flex items-center gap-1'>
        <input value={'banna'} checked={radio === 'banna'} onChange={handleChangeRadio} type="radio" name="fruit" id='banna' />
        <label htmlFor="banna">
          banna
        </label>
      </div>
      <div className='flex items-center gap-1'>
        <input value={'mango'} checked={radio === 'mango'} onChange={handleChangeRadio} type="radio" name="fruit" id='mango' />
        <label htmlFor="mango">
          mango
        </label>
      </div>
      <div className='text-[orange]'>
        라디오값: {radio}
      </div>
    </div>
  )
}

export default RadioButton