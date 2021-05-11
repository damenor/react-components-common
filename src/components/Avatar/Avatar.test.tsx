import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { Avatar } from './Avatar'

describe('Avatar', () => {
  
  test('renders a default button with text', async () => {
    render(<Avatar letter="D" />)
  })

})
