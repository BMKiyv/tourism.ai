'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@/components/AuthProvider'
import Link from 'next/link'

export default function UserAccountPage() {
  const { user, refreshUser } = useAuth()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (user) {
      setName(user.name || '')
      setEmail(user.email || '')
    }
  }, [user])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    setSuccess('')

    try {
      const res = await fetch(`/api/users/${user?.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
        }),
      })

      if (res.ok) {
        setSuccess('Your account was updated successfully.')
        refreshUser()
      } else {
        const data = await res.json()
        setError(data.errors?.[0]?.message || 'There was an error updating your account.')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  if (!user) {
    return (
      <div className="w-users-userformpagewrap">
        <div className="w-users-userloginformwrapper">
          <div className="w-users-userformheader">
            <h2>Please log in to view your account</h2>
          </div>
          <Link href="/log-in" className="w-users-userformbutton w-button">Log In</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="w-users-useraccountwrapper">
      <div className="w-users-blockheader">
        <h2>My Account</h2>
      </div>
      <div className="w-users-blockcontent">
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="Email">Email</label>
            <input
              disabled
              name="Email"
              id="Email"
              value={email}
              className="w-input w-input-disabled"
              type="email"
            />
            <label htmlFor="Name">Name</label>
            <input
              className="w-input"
              maxLength={256}
              name="Name"
              placeholder="Name"
              type="text"
              id="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            
            <h3>Password settings</h3>
            <Link href="/reset-password" style={{ display: 'block', marginBottom: '20px' }}>
              Reset password
            </Link>

            <input
              type="submit"
              value={isLoading ? 'Saving...' : 'Save Changes'}
              className="w-users-useraccountformsavebutton w-button"
              disabled={isLoading}
            />
          </form>

          {success && (
            <div className="w-users-userformsuccessstate w-form-success" style={{ display: 'block' }}>
              <p>{success}</p>
            </div>
          )}

          {error && (
            <div className="w-form-fail" style={{ display: 'block' }}>
              <div className="user-form-error-msg">{error}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
