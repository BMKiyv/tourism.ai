import Link from 'next/link'

export default function AccessDeniedPage() {
  return (
    <div className="w-users-userformpagewrap">
      <div className="w-users-userformheader">
        <img src="https://d3e54v103j8qbb.cloudfront.net/static/utility-lock.ae54711958.svg" alt="" />
        <h2>Access Denied</h2>
      </div>
      <p>A site membership is required to view this page. Please <Link href="/sign-up">Sign up</Link> or <Link href="/log-in">Log in</Link>.</p>
    </div>
  )
}
