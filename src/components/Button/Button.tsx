import * as React from 'react'
import { getClassName } from '../../utils/getClassName'

import './Button.module.css'

export interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  type?: 'button' | 'reset' | 'submit' 
  style?: React.CSSProperties
  error?: boolean
  success?: boolean
  variant?: 'primary' | 'secondary' | 'tertuary'
  clear?: boolean
  rounded?: boolean
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
  clear = false,
  rounded = false,
  outline = false,
  variant = 'primary'
}: ButtonProps, ref: any): JSX.Element => {

  return (
    <button 
      ref={ref}
      className={getClassName({
        defaultClass: 'button',
        className,
        conditionals: { 
          clear, 
          rounded, 
          outline, 
          error, 
          success,
          [variant]: true
        },
      })}
      type={type} 
      style={style}
      onClick={onClick}>
        {children}
    </button>
  )

})
