import * as React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { Button, ButtonProps } from './Button'

export default {
  title: 'Button',
  component: Button,
  description: `A button.`,
  argTypes: {},
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args}>Click me</Button>

export const Default = Template.bind({})
Default.args = {}

export const Secondary = Template.bind({})
Secondary.args = { variant: 'secondary' }

export const Tertuary = Template.bind({})
Tertuary.args = { variant: 'tertuary' }

export const Error = Template.bind({})
Error.args = { error: true }

export const Success = Template.bind({})
Success.args = { success: true }

export const Clear = Template.bind({})
Clear.args = { clear: true }

export const Rounded = Template.bind({})
Rounded.args = { rounded: true }

export const Outline = Template.bind({})
Outline.args = { outline: true }

export const RoundedOutline = Template.bind({})
RoundedOutline.args = { rounded: true, outline: true }

export const OnClick = Template.bind({})
OnClick.args = {
  // eslint-disable-next-line no-alert
  onClick: () => alert('Clicked the button!'),
}
