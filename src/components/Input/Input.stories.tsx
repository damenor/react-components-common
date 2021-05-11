import * as React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Input, InputProps } from './Input'

export default {
  title: 'Input',
  component: Input,
  description: `A Input.`,
  argTypes: {},
} as Meta

//👇 We create a “template” of how args map to rendering
const Template: Story<InputProps> = ({
  value = 'value', 
  ...args
}) => <Input {...args} value={value} />

export const Default = Template.bind({})
Default.args = {}

export const Password = Template.bind({})
Password.args = { type: 'password' }

export const Number = Template.bind({})
Number.args = { type: 'number' }

export const Color = Template.bind({})
Color.args = { type: 'color' }

export const Date = Template.bind({})
Date.args = { type: 'date' }

export const Placeholder = Template.bind({})
Placeholder.args = { placeholder: 'Placeholder', value: '' }

export const Error = Template.bind({})
Error.args = { error: true }

export const Success = Template.bind({})
Success.args = { success: true }

export const Rounded = Template.bind({})
Rounded.args = { rounded: true }
