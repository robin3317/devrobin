import styled from 'styled-components'
import BaseLayout from '../components/BaseLayout'
import SectionTitle from '../components/SectionTitle'

const Contact = () => (
  <BaseLayout>
    <ContactContainer>
      <SectionTitle title="Contact" />
    </ContactContainer>
  </BaseLayout>
)

const ContactContainer = styled.div`
  width: 80%;
  margin: 80px auto 0;
`

export default Contact