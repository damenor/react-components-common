import * as React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  
  test('renders a default button with text', async () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
    expect(screen.getByText('Click me')).toHaveClass('button')
  })

  test('renders a default button with text', async () => {
    render(<Button rounded>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
    expect(screen.getByText('Click me')).toHaveClass('button--rounded')
  })

  test('handles onClick', async () => {
    const mockOnClick = jest.fn()
    render(<Button onClick={mockOnClick}>Click me</Button>)
    fireEvent.click(screen.getByText('Click me'))

    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })

})
