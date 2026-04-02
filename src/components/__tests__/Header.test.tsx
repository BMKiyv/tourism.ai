import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from '../Header'
import { describe, it, expect, vi } from 'vitest'

describe('Header Mobile Menu Accessibility', () => {
  it('has aria-expanded="false" when closed', () => {
    render(<Header />)
    const toggleButton = screen.getByLabelText(/Open mobile menu/i)
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('has aria-expanded="true" when open', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const toggleButton = screen.getByLabelText(/Open mobile menu/i)
    await user.click(toggleButton)
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true')
  })

  it('closes when Escape key is pressed', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const toggleButton = screen.getByLabelText(/Open mobile menu/i)
    
    // Open menu
    await user.click(toggleButton)
    
    // Find the mobile menu container (it has specific classes)
    const mobileMenu = document.querySelector('.nav-hide-block.alt-nav-hide')
    expect(mobileMenu).toHaveClass('block')
    
    // Press Escape
    fireEvent.keyDown(window, { key: 'Escape', code: 'Escape' })
    
    expect(mobileMenu).toHaveClass('hidden')
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false')
  })
})
