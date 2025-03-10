import React from 'react'
import InputLabel from './input-label'
import InputPlaceholder from './input-placeholder'
import DivContentEditable from './div-contenteditable'

const FormText = () => {
  return (
    <form
      className='space-y-8'
    >
      <InputLabel />
      <hr />
      <InputPlaceholder />
      <hr />
      <DivContentEditable />
    </form>
  )
}

export default FormText