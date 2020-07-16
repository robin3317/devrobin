import styled, { css } from 'styled-components'
import Head from 'next/head'
import BaseLayout from '../components/BaseLayout'
import SectionTitle from '../components/SectionTitle'
import Skillset from '../components/Skillset'

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

        <SkillsetsContainer>
          <SectionHeader>My Skillsets</SectionHeader>

          <Skillsets>
            <Development>
              <Skillset imgSrc="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" title="Javascript" />
              <Skillset imgSrc="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png" title="Typescript" />
              <Skillset imgSrc="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" title="ReactJS" />
              <Skillset imgSrc="https://redux.js.org/img/redux.svg" title="Redux" />
              <Skillset imgSrc="https://raw.githubusercontent.com/github/explore/5c058a388828bb5fde0bcafd4bc867b5bb3f26f3/topics/graphql/graphql.png" title="GraphQL" />
              <Skillset imgSrc="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" title="Node" />
              <Skillset imgSrc="https://deno.land/logo.svg" title="Deno" />
              <Skillset imgSrc="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/flutter/flutter.png" title="Flutter" />
              <Skillset imgSrc="https://reactnative.dev/img/header_logo.svg" title="React Native" />
              <Skillset imgSrc="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png" title="Firebase" />
            </Development>

            <Design>
              <Skillset imgSrc="https://www.adobe.com/content/dam/cc/icons/xd.svg" title="Adobe XD" />
              <Skillset imgSrc="https://www.adobe.com/content/dam/cc/icons/photoshop-mobile.svg" title="Photoshop" />
              <Skillset imgSrc="https://www.adobe.com/content/dam/cc/icons/pr_cc_app_RGB.svg" title="Premier Pro" />
            </Design>
          </Skillsets>
        </SkillsetsContainer>
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

const SkillsetsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`

const Skillsets = styled.div`
  display: flex;
  flex-direction: column;
`

const sectionStyles = css`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const Development = styled.div`${sectionStyles}`

const Design = styled.div`${sectionStyles}`

const SectionHeader = styled.h3`
  font-size: 32px;
  font-weight: 500;
`

export default About