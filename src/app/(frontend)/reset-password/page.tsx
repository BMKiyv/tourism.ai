'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ResetPasswordPage() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const res = await fetch('/api/users/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
        }),
      })

      if (res.ok) {
        setSuccess(true)
      } else {
        const data = await res.json()
        setError(data.errors?.[0]?.message || 'There was an error resetting your password. Please try again.')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  if (success) {
    return (
      <div className="w-users-userformpagewrap">
        <div className="w-users-userresetpasswordformwrapper">
          <div className="w-users-userformsuccessstate w-form-success" style={{ display: 'block' }}>
            <div className="w-users-userformheader">
              <img src="https://d3e54v103j8qbb.cloudfront.net/img/email-72.67fa6be437.svg" loading="lazy" alt="" />
              <h2>Password Reset Email Sent</h2>
            </div>
            <p>If we found an account associated with that email address, we've sent a link to reset your password.</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-users-userformpagewrap">
      <div className="w-users-userresetpasswordformwrapper">
        <form onSubmit={handleSubmit}>
          <div className="w-users-userformheader">
            <h2>Reset Password</h2>
          </div>
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            className="w-input"
            id="Email"
            name="Email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="submit"
            value={isLoading ? 'Please wait...' : 'Reset Password'}
            className="w-users-userformbutton w-button"
            disabled={isLoading}
          />
        </form>

        {error && (
          <div className="w-users-userformerrorstate w-form-fail" style={{ display: 'block' }}>
            <div className="user-form-error-msg">{error}</div>
          </div>
        )}
      </div>
    </div>
  )
}
