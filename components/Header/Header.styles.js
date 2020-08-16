import styled from 'styled-components'
import { Navbar } from 'react-bootstrap'

export const HeaderContainer = styled(Navbar)`
  position: fixed;
  top: 25px;
  z-index: 1000;
  width: 100vw;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 10px;
  background-color: rgb(248, 248, 248);
`

export const HeaderMain = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderLeft = styled.div``

export const HeaderRight = styled.div``

export const CustomNavItem = styled.a`
`