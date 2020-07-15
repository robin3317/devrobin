import styled from 'styled-components'
import Head from 'next/head'
import BaseLayout from '../components/BaseLayout'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Robin | Home</title>
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
              <Intro>
                <div>
                  <p>Class Myself {'{'}</p>
                    <p style={{paddingLeft: 30}}>constructor() {'{'}</p>
                      <p style={{paddingLeft: 60}}>this.name = 'Abdur Rahman Robin';</p>
                      <p style={{paddingLeft: 60}}>this.companyName = 'Corona Engineering Ltd.';</p>
                    <p style={{paddingLeft: 30}}>{'}'}</p>
                  <p>{'}'}</p>
                </div>
              </Intro>

              <Description>
                <p><span style={{color: '#1078EE'}}>console.log(</span>{"`"}Hello &amp;
                Welcome, my name is <span style={{color: '#D89024'}}>{"${this.name}"}</span>. I'm a
                full stack software developer working in <span style={{color: '#D89024'}}>{"${this.companyName}"}</span>.
                I love to convert my thoughts into code. And love to share my
                knowledge with others. \n<br />
                If you have a project or creative need that I can help with,
                please feel free to contact.{"`"}<span style={{color: '#1078EE'}}>)</span>;</p>
              </Description>

              <ContactContainer>
                <ContactItem target="_blank" href="mailto:abdurrahmanrobin47@gmail.com">
                  <img align="left" alt="Abdur Rahman Robin | Gmail" src="https://img.icons8.com/color/40/000000/gmail.png" />
                </ContactItem>

                <ContactItem target="_blank" href="https://www.github.com/robin3317">
                  <img align="left" alt="Abdur Rahman Robin | Github" src="https://img.icons8.com/fluent/40/000000/github.png" />
                </ContactItem>

                <ContactItem target="_blank" href="https://www.linkedin.com/in/robin4java/">
                  <img align="left" alt="Abdur Rahman Robin | Linkedin" src="https://img.icons8.com/color/40/000000/linkedin.png" />
                </ContactItem>

                <ContactItem target="_blank" href="https://twitter.com/robin4java">
                  <img align="left" alt="Abdur Rahman Robin | Twitter" src="https://img.icons8.com/color/40/000000/twitter.png" />
                </ContactItem>

                <ContactItem target="_blank" href="https://fb.com/robin4java">
                  <img align="left" alt="Abdur Rahman Robin | Facebook" src="https://img.icons8.com/color/40/000000/facebook-new.png" />
                </ContactItem>
              </ContactContainer>
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


const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
`

const HomeLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
`

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

const HomeRightContainer = styled.div`
  width: 50%;
`

const Intro = styled.div`
  color: #48586B;
  font-weight: 500;
  display: flex;
  justify-content: center;
  margin: 60px 0;
`

const Description = styled.div`
  color: #48586B;
  font-weight: 500;
`

const ContactContainer = styled.div`
  display: flex;
  margin-top: 30px;
`

const ContactItem = styled.a`
 margin-right: 20px;
`