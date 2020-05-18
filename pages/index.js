import Link from 'next/link'

export default () => {
  return (
    <>
      <div>hello world</div>
      <ul>
        <li>
          <Link href='/blog/[post]' as='/blog/one'>
            <a>One</a>
          </Link>
        </li>
        <li>
          <Link href='/blog/[post]' as='/blog/two'>
            <a>Two</a>
          </Link>
        </li>
        <li>
          <Link href='/blog/[post]' as='/blog/three'>
            <a>Three</a>
          </Link>
        </li>
      </ul>
    </>
  )
}