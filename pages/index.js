import styled from 'styled-components'
import Head from 'next/head'
import BaseLayout from '../components/BaseLayout'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Abdur Rahman Robin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <BaseLayout>
          <HomeContainer>
            <HomeLeftContainer>
              <TriangleWrapper>
                <Triangle />
                <Avatar src="/images/avatar.jpg" />
              </TriangleWrapper>

              <InfoContainer>
                <Name>ABDUR RAHMAN ROBIN</Name>
                <Designation>FULL STACK SOFTWARE DEVELOPER</Designation>
                <Resume>Download Resume</Resume>
              </InfoContainer>
            </HomeLeftContainer>

            <HomeRightContainer>

            </HomeRightContainer>
          </HomeContainer>
        </BaseLayout>
      </main>

      <style jsx global>
        {`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}
      </style>
    </div>
  )
}


const HomeContainer = styled.div``

const HomeLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`
const HomeRightContainer = styled.div``

const InfoContainer = styled.div`
  margin: 0 auto;
`

const Triangle = styled.div`
  clip-path: polygon(100% 0, 0 0, 50% 90%);
  background-color: #5295E1;
  width: 100%;
  height: 45vh;
`

const TriangleWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

const Avatar = styled.img`
  position: absolute;
  border-radius: 100%;
`

const Name = styled.h1`
  color: #48586B;
`

const Designation = styled.h2`
  font-size: 1.37em;
  color: #48586B;
`

const Resume = styled.button`
  border: none;
  outline: none;
  color: #ffffff;
  background-color: #5295E1;
  padding: 7px 10px;
  border-radius: 3px;
  cursor: pointer;
`