'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const res = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })

      const data = await res.json()

      if (res.ok) {
        router.push('/')
        router.refresh()
      } else {
        setError(data.errors?.[0]?.message || 'Invalid email or password. Please try again.')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-users-userformpagewrap">
      <div className="w-users-userloginformwrapper">
        <form onSubmit={handleSubmit}>
          <div className="w-users-userformheader">
            <h2>Log in</h2>
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
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            className="w-input"
            id="Password"
            name="Password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="submit"
            value={isLoading ? 'Please wait...' : 'Log In'}
            className="w-users-userformbutton login w-button"
            disabled={isLoading}
          />
          <div className="w-users-userformfooter">
            <span>Don't have an account?</span>
            <Link href="/sign-up" className="w-inline-block">Sign Up</Link>
          </div>
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
