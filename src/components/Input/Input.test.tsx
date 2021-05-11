import * as React from 'react'
import { render, screen } from '@testing-library/react'

import { Input } from './Input'

describe('Input', () => {
  
  test('renders a default Input', async () => {
    render(<Input value={'value'} onChange={() => {}} />)
    expect(screen.getByDisplayValue('value')) .toHaveClass('input')
  })

  test('renders a rounded Input', async () => {
    render(<Input rounded value={'value'} onChange={() => {}} />)
    expect(screen.getByDisplayValue('value')) .toHaveClass('input input--rounded')
  })

  test('renders a error Input', async () => {
    render(<Input error value={'value'} onChange={() => {}} />)
    expect(screen.getByDisplayValue('value')) .toHaveClass('input input--error')
  })

  test('renders a success Input', async () => {
    render(<Input success value={'value'} onChange={() => {}} />)
    expect(screen.getByDisplayValue('value')) .toHaveClass('input input--success')
  })

})
