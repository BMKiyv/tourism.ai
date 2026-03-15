'use client'

import { useState, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'

function UpdatePasswordForm() {
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const token = searchParams.get('token')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    setIsLoading(true)
    setError('')

    try {
      const res = await fetch('/api/users/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token,
          password,
        }),
      })

      if (res.ok) {
        setSuccess(true)
      } else {
        const data = await res.json()
        setError(data.errors?.[0]?.message || 'There was an error updating your password. Please try again.')
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
        <div className="w-users-userupdatepasswordformwrapper">
          <div className="w-users-userformsuccessstate w-form-success" style={{ display: 'block' }}>
            <div className="w-users-userformheader">
              <img src="https://d3e54v103j8qbb.cloudfront.net/img/thumbs-up-72.cbcaec93bc.svg" loading="lazy" alt="" />
              <h2>Password updated</h2>
            </div>
            <p>Your password was updated successfully. You can now log in with your new password.</p>
            <Link href="/log-in" className="w-button">Go to Login</Link>
          </div>
        </div>
      </div>
    )
  }

  if (!token) {
    return (
      <div className="w-users-userformpagewrap">
        <div className="w-users-userupdatepasswordformwrapper">
          <div className="w-form-fail" style={{ display: 'block' }}>
            <div className="user-form-error-msg">Invalid or missing token. Please request a new password reset link.</div>
            <Link href="/reset-password" style={{ display: 'block', marginTop: '20px' }}>Request new link</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-users-userformpagewrap">
      <div className="w-users-userupdatepasswordformwrapper">
        <form onSubmit={handleSubmit}>
          <div className="w-users-userformheader">
            <h2>Update Password</h2>
          </div>
          <p>Please enter your new password in the field below.</p>
          <label htmlFor="Password">New Password</label>
          <input
            type="password"
            className="w-input"
            id="Password"
            name="Password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="ConfirmPassword">Confirm New Password</label>
          <input
            type="password"
            className="w-input"
            id="ConfirmPassword"
            name="ConfirmPassword"
            placeholder="Confirm New Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <input
            type="submit"
            value={isLoading ? 'Please wait...' : 'Update Password'}
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

export default function UpdatePasswordPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UpdatePasswordForm />
    </Suspense>
  )
}
