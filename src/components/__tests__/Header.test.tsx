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
    const mobileMenu = document.querySelector('.nav-hide-block.alt-nav-hide') as HTMLElement
    expect(mobileMenu.style.display).toBe('block')
    
    // Press Escape
    fireEvent.keyDown(window, { key: 'Escape', code: 'Escape' })
    
    expect(mobileMenu.style.display).toBe('none')
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('focuses the toggle button when opened (it is the close button now)', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const toggleButton = screen.getByLabelText(/Open mobile menu/i)
    
    await user.click(toggleButton)
    
    expect(toggleButton).toHaveFocus()
    expect(toggleButton).toHaveAttribute('aria-label', 'Close mobile menu')
  })
})

describe('Header Mobile Language Switcher', () => {
  it('displays language buttons horizontally and centered', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByLabelText(/Open mobile menu/i))
    
    const langContainer = screen.getByText('UA').parentElement
    expect(langContainer).toHaveClass('flex')
    expect(langContainer).toHaveClass('flex-row')
    expect(langContainer).toHaveClass('gap-2')
    
    const parentContainer = langContainer?.parentElement
    expect(parentContainer).toHaveClass('justify-center')
  })

  it('toggles to "X" icon when menu is open', async () => {
    const user = userEvent.setup()
    render(<Header />)
    const toggleButton = screen.getByLabelText(/Open mobile menu/i)
    
    await user.click(toggleButton)
    
    expect(toggleButton).toHaveAttribute('aria-label', 'Close mobile menu')
    const exitIcon = toggleButton.querySelector('.mob-menu-exit')
    expect(exitIcon).toHaveClass('active')
  })

  it('styles the active language button correctly', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByLabelText(/Open mobile menu/i))
    
    const uaButton = screen.getByText('UA')
    // Active language (default UA) should have specific classes
    expect(uaButton).toHaveClass('bg-[#b2e0f9]')
    expect(uaButton).toHaveClass('text-[#2d5ca6]')
    expect(uaButton).toHaveClass('font-bold')
    expect(uaButton).toHaveClass('rounded-full')
  })

  it('styles the non-active language button correctly', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByLabelText(/Open mobile menu/i))
    
    const enButton = screen.getByText('EN')
    // Non-active language (default EN) should have specific classes
    expect(enButton).toHaveClass('text-gray-500')
    // User requested "active is bold, non-active is normal"
    expect(enButton).not.toHaveClass('font-bold')
  })

  it('has no underlines or shadows', async () => {
    const user = userEvent.setup()
    render(<Header />)
    await user.click(screen.getByLabelText(/Open mobile menu/i))
    
    const uaButton = screen.getByText('UA')
    const enButton = screen.getByText('EN')
    
    expect(uaButton).toHaveClass('!no-underline')
    expect(uaButton).toHaveClass('!shadow-none')
    expect(enButton).toHaveClass('!no-underline')
    expect(enButton).toHaveClass('!shadow-none')
  })
})
