'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function SignUpPage() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const res = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          name,
          password,
        }),
      })

      const data = await res.json()

      if (res.ok) {
        setSuccess(true)
        setTimeout(() => {
          router.push('/log-in')
        }, 3000)
      } else {
        setError(data.errors?.[0]?.message || 'There was an error signing you up. Please try again.')
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
        <div className="w-users-usersignupformwrapper">
          <div className="w-users-userformsuccessstate w-form-success" style={{ display: 'block' }}>
            <div className="w-users-userformheader">
              <img src="https://d3e54v103j8qbb.cloudfront.net/img/thumbs-up-72.cbcaec93bc.svg" loading="lazy" alt="" />
              <h2>Account created</h2>
            </div>
            <p>Your account was created successfully. You will be redirected to the login page shortly.</p>
            <Link href="/log-in" className="w-inline-block">If nothing happens, click here.</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-users-userformpagewrap">
      <div className="w-users-usersignupformwrapper">
        <form onSubmit={handleSubmit}>
          <div className="w-users-userformheader">
            <h2>Sign up</h2>
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
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            className="w-input"
            id="Name"
            name="Name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={isLoading ? 'Please wait...' : 'Sign Up'}
            className="w-users-userformbutton w-button"
            disabled={isLoading}
          />
          <div className="w-users-userformfooter">
            <span>Already have an account?</span>
            <Link href="/log-in" className="w-inline-block">Log In</Link>
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
