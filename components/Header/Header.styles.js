import styled from 'styled-components'

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0px;
  display: flex;
  -webkit-box-align: center;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100vw;
  background-color: rgb(248, 248, 248);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 5px 10px;
  z-index: 1000;
`

export const HeaderMain = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderLeft = styled.div``

export const HeaderRight = styled.div``

export const NavItem = styled.a`
  text-decoration: none;
  margin-left: 40px;
  color: #1078EE;
  font-weight: 500;
  &:visited, &:focus {
    color: #1078EE;
  }
`