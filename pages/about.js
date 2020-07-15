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
      </AboutContainer>
    </BaseLayout>
  </>
)

const AboutContainer = styled.div`
  width: 80%;
  margin: 80px auto 0;
`

export default About