import styled from 'styled-components'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandshake } from '@fortawesome/free-solid-svg-icons'
import { Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap'
import BaseLayout from '../components/BaseLayout'
import SectionTitle from '../components/SectionTitle'
import Link from 'next/link'
import { mediaQueries } from '../shared/styles/mediaQueries'

const Contact = () => (
  <>
    <Head>
      <title>Robin | Contact</title>
    </Head>

    <BaseLayout>
      <ContactContainer>
        <SectionTitle title="Contact" />

        <ContactBody>
          <h3>Get In Touch</h3>
          <p style={{textAlign: 'center', width: '80%'}}>
            You can contact me easily by submitting this form. If you want to contact with me
            via other platforms such as facebook, linkedin - you can do it from
            <Link href="/" passHref> here</Link>.
          </p>

          <ContactFormContainer>
            <FormContainerLeft>
              <FontAwesomeIcon icon={faHandshake} style={{ color: 'white', fontSize: '60px' }} />
              <p>Thank You</p>
              <p>Do you have any queries?</p>
            </FormContainerLeft>

            <FormContainerRight>
              <Form>
                <FormGroup>
                  <FormLabel>Email address</FormLabel>
                  <FormControl type="email" placeholder="youremail@gmail.com" />
                </FormGroup>

                <FormGroup>
                  <FormLabel>Name</FormLabel>
                  <FormControl type="text" placeholder="John Doe" />
                </FormGroup>

                <FormGroup>
                  <FormLabel>Message</FormLabel>
                  <FormControl as="textarea" rows="3" type="text" placeholder="Write here..." />
                </FormGroup>

                <Button className="float-right" varient="primary" type="submit">Submit</Button>
              </Form>
            </FormContainerRight>
          </ContactFormContainer>
        </ContactBody>
      </ContactContainer>
    </BaseLayout>
  </>
)

const ContactContainer = styled.div`
  width: 80%;
  margin: 105px auto 0;
  ${mediaQueries('phone-lg')`
    width: 90%;
  `}
`

const ContactBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const ContactFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 40px;
  ${mediaQueries('phone-lg')`
    flex-direction: column;
  `}
`

const FormContainerLeft = styled.div`
  background: linear-gradient(134deg, rgb(106, 152, 240) 0%, rgb(73, 97, 220) 99%);
  width: 30%;
  min-height: 250px;
  max-height: 250px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 15px 10px;
  ${mediaQueries('phone-lg')`
    width: 70%;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-top-right-radius: 5px;
  `}
`

const FormContainerRight = styled.div`
  width: 60%;
  min-height: 300px;
  box-shadow: 0 0 5px rgba(0,0,0,.3);
  border-radius: 5px;
  padding: 25px 15px;
  ${mediaQueries('phone-lg')`
    width: 100%;
  `}
`

export default Contact