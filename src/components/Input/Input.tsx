import * as React from 'react'

import './Input.module.css'
import { getClassName } from '../../utils/getClassName'

type InputType = 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week'

export interface InputProps {
  value: string | number
  onChange: (value: string) => void 
  className?: string
  placeholder?: string
  type?: InputType 
  style?: React.CSSProperties
  error?: boolean
  success?: boolean
  rounded?: boolean
  ref?: any
}

export const Input = React.forwardRef(({
  value,
  onChange,
  className,
  placeholder,
  type = 'text',
  style = {},
  error = false,
  success = false,
  rounded = false,
}: InputProps, ref: any): JSX.Element => {

  return (
    <input 
      ref={ref}
      className={getClassName({
        defaultClass: 'input',
        className,
        conditionals: { error, success, rounded },
      })}
      style={style}
      type={type}
      value={value} 
      placeholder={placeholder}
      onChange={e => onChange(e.target.value)}/>
  )

})
