import * as React from 'react'

import { getClassName } from '../../utils/getClassName'

import './Avatar.module.css'

export interface AvatarProps {
  className?: string
  urlImage?: string
  letter?: string
  style?: React.CSSProperties
  variant?: 'xsmall' | 'small' | 'normal' | 'large' | 'xlarge'
}

export const Avatar = ({
  className,
  urlImage,
  letter,
  style = {},
  variant = 'normal'
}: AvatarProps): JSX.Element => {

  const defaultStyles = React.useCallback(() => {
    let styles = { ...style } 
    if(urlImage) styles = { ...styles, backgroundImage: `url(${urlImage})`} 
    return styles
   }, [urlImage, style])

  return (
    <div 
      className={getClassName({
        defaultClass: 'avatar',
        className,
        conditionals: { [variant]: true, letter: letter ? true : false }
      })}
      style={defaultStyles()}>
        { letter && <span className="avatar__letter" >{letter}</span> }
    </div>
  )

}
