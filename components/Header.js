import Link from 'next/link'

const Header = () => (
  <div>
    <Link href="/"><a>Home</a></Link>
    <Link href="/about"><a>About Me</a></Link>
    <Link href="/portfolio"><a>Portfolio</a></Link>
    <Link href="/timeline"><a>Timeline</a></Link>
    <Link href="/blog"><a>Blog</a></Link>
    <Link href="/video"><a>Video</a></Link>
    <Link href="/contact"><a>Contact</a></Link>
  </div>
)

export default Header