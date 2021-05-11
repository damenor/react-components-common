import * as React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Avatar, AvatarProps } from './Avatar'
import { AVATAR_IMAGE, AVATAR_IMAGE2 } from '../../constants'

export default {
  title: 'Avatar',
  component: Avatar,
  description: `A Avatar.`,
  argTypes: {},
} as Meta

//👇 We create a “template” of how args map to rendering
const Template: Story<AvatarProps> = (args) => <Avatar {...args} />

const urlImage = AVATAR_IMAGE

export const Default = Template.bind({})
Default.args = { urlImage }

export const XSmall = Template.bind({})
XSmall.args = { variant: 'xsmall', urlImage }

export const Small = Template.bind({})
Small.args = { variant: 'small', urlImage }

export const Large = Template.bind({})
Large.args = { variant: 'large', urlImage }

export const XLarge = Template.bind({})
XLarge.args = { variant: 'xlarge', urlImage }

export const XSmallLetter = Template.bind({})
XSmallLetter.args = { variant: 'xsmall', letter: 'xs' }

export const SmallLetter = Template.bind({})
SmallLetter.args = { variant: 'small', letter: 's' }

export const DefaultLetter = Template.bind({})
DefaultLetter.args = { variant: 'normal', letter: 'm' }

export const LargeLetter = Template.bind({})
LargeLetter.args = { variant: 'large', letter: 'l' }

export const XLargeLetter = Template.bind({})
XLargeLetter.args = { variant: 'xlarge', letter: 'xl' }
