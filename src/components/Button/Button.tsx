import * as React from 'react'
import { getClassName } from '../../utils/getClassName'

import './Button.module.css'

export interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  type?: 'button' | 'reset' | 'submit' 
  style?: React.CSSProperties
  rounded?: boolean
  error?: boolean
  success?: boolean
  outline?: boolean
  ref?: any
}

export const Button = React.forwardRef(({
  children,
  onClick,
  className,
  type = 'button',
  style = {},
  error = false,
  success = false,
  rounded = false,
  outline = false,
}: ButtonProps, ref: any): JSX.Element => {

  return (
    <button 
      ref={ref}
      className={getClassName({
        defaultClass: 'button',
        className,
        conditionals: { rounded, outline, error, success },
      })}
      type={type} 
      style={style}
      onClick={onClick}>
        {children}
    </button>
  )

})
