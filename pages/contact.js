import styled from 'styled-components'
import Head from 'next/head'
import BaseLayout from '../components/BaseLayout'
import SectionTitle from '../components/SectionTitle'

const Contact = () => (
  <>
    <Head>
      <title>Robin | Contact</title>
    </Head>

    <BaseLayout>
      <ContactContainer>
        <SectionTitle title="Contact" />
      </ContactContainer>
    </BaseLayout>
  </>
)

const ContactContainer = styled.div`
  width: 80%;
  margin: 105px auto 0;
`

export default Contact