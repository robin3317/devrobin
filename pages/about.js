import styled from 'styled-components'
import Head from 'next/head'
import BaseLayout from '../components/BaseLayout'
import SectionTitle from '../components/SectionTitle'

const About = () => (
  <>
    <Head>
      <title>Robin | About Me</title>
    </Head>

    <BaseLayout>
      <AboutContainer>
        <SectionTitle title="About" />
        <Introduction>
          <LeftIntro>
            <p>
              A motivated, passionate and experienced Full Stack Developer from Bangladesh,
              currently staying in Dhaka. I'm working with JavaScript, Flutter and Web Technology.
              I love to work with challenge, passion and new technology.
            </p>
            <HighlightedContainer>
              <VerticalHr />
              <p>Love to convert thoughts into CODE.</p>
            </HighlightedContainer>
            <p>
              I love to learn new technology and share my knowledge with others. In a nutshell,
              I am nothing but a learner. And I don't want to be perfect,
              I want to be honest about myself.
            </p>
          </LeftIntro>

          <RightIntro>
            <AvatarContainer>
              <Avatar src="/images/avatar.png" alt="Abdur Rahman Robin | Codeonces" />
              <Outline />
            </AvatarContainer>
            <Name>ABDUR RAHMAN ROBIN</Name>
            <Designation>FULL STACK SOFTWARE DEVELOPER</Designation>
          </RightIntro>

        </Introduction>
      </AboutContainer>
    </BaseLayout>
  </>
)

const AboutContainer = styled.div`
  width: 80%;
  margin: 80px auto 0;
`

const Introduction = styled.div`
  display: flex;
  justify-content: space-between;
`
const LeftIntro = styled.div`
  width: 52%;
  line-height: 1.8;
`

const RightIntro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
`
const AvatarContainer = styled.div`
  position: relative;
`

const Outline = styled.div`
  width: 160px;
  height: 290px;
  background-color: #5295E1;
  position: absolute;
  bottom: 0;
  right: -15px;
  z-index: -1;
`

const Avatar = styled.img`
  width: 320px;
  height: 330px;
`

const Name = styled.h1``

const Designation = styled.h2`
  font-size: 1.37em;
  margin-top: 0;
`

const HighlightedContainer = styled.div`
  display: flex;
  align-items: center;
`

const VerticalHr = styled.div`
  background-color: #D89024;
  width: 5px;
  height: 30px;
  margin-right: 20px;
`

export default About