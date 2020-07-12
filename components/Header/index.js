import Link from 'next/link'
import { HeaderContainer, HeaderMain, HeaderLeft, HeaderRight, NavItem } from './Header.styles'

const Logo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="45" viewBox="0 0 60 50">
    <path id="laptop-code-solid" d="M23.909,25.552a1.458,1.458,0,0,0,2.122,0l1.06-1.1a1.609,1.609,0,0,0,0-2.21L23.742,18.75l3.348-3.488a1.609,1.609,0,0,0,0-2.21l-1.06-1.1a1.458,1.458,0,0,0-2.122,0l-5.469,5.7a1.609,1.609,0,0,0,0,2.21Zm9-1.1,1.06,1.1a1.458,1.458,0,0,0,2.122,0l5.469-5.7a1.609,1.609,0,0,0,0-2.21l-5.469-5.7a1.458,1.458,0,0,0-2.122,0l-1.06,1.1a1.609,1.609,0,0,0,0,2.21l3.348,3.487L32.91,22.238a1.609,1.609,0,0,0,0,2.21ZM58.5,40.625H35.769A3.014,3.014,0,0,1,32.7,43.75H27a3.252,3.252,0,0,1-3.072-3.125H1.5A1.537,1.537,0,0,0,0,42.188V43.75A6.147,6.147,0,0,0,6,50H54a6.147,6.147,0,0,0,6-6.25V42.188A1.537,1.537,0,0,0,58.5,40.625ZM54,4.688A4.61,4.61,0,0,0,49.5,0h-39A4.61,4.61,0,0,0,6,4.688V37.5H54ZM48,31.25H12v-25H48Z" fill="#5295e1"/>
  </svg>
)

const Header = () => (
  <HeaderContainer>
    <HeaderMain>
      <HeaderLeft>
        <Link href="/" passHref><NavItem>{<Logo />}</NavItem></Link>
      </HeaderLeft>

      <HeaderRight>
        <Link href="/" passHref><NavItem>Home</NavItem></Link>
        <Link href="/about" passHref><NavItem>About Me</NavItem></Link>
        <Link href="/portfolio" passHref><NavItem>Portfolio</NavItem></Link>
        <Link href="/timeline" passHref><NavItem>Timeline</NavItem></Link>
        <Link href="/blog" passHref><NavItem>Blog</NavItem></Link>
        <Link href="/video" passHref><NavItem>Video</NavItem></Link>
        <Link href="/contact" passHref><NavItem>Contact</NavItem></Link>
      </HeaderRight>
    </HeaderMain>
  </HeaderContainer>
)

export default Header