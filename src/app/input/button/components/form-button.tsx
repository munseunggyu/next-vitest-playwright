import React from 'react'
import Checkbox from './checkbox'
import RadioButton from './radio-button'

const FormButton = () => {
  return (
    <form className='space-y-2'>
      <Checkbox />
      <hr />
      <RadioButton />
    </form>
  )
}

export default FormButton