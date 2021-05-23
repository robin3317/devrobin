import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
} from 'react-bootstrap';
import BaseLayout from '../components/BaseLayout';
import SectionTitle from '../components/SectionTitle';
import Link from 'next/link';

const Contact = () => (
  <>
    <Head>
      <title>Robin | Contact</title>
    </Head>

    <BaseLayout>
      <div className="contact section-container">
        <SectionTitle title="Contact" />

        <div className="contact-body">
          <h3>Get In Touch</h3>
          <p style={{ textAlign: 'center', width: '80%' }}>
            You can contact me easily by submitting this form. If you want to
            contact with me via other platforms such as facebook, linkedin - you
            can do it from
            <Link href="/" passHref>
              <a> here</a>
            </Link>
            .
          </p>

          <p
            style={{
              backgroundColor: 'salmon',
              padding: '2px 10px',
              borderRadius: '5px',
            }}
          >
            📢 Contact by submitting this form isn't working currently! Sorry
            for that 🙏
          </p>

          <div className="form-container">
            <div className="form-container__left">
              <FontAwesomeIcon
                icon={faHandshake}
                style={{ color: 'white', fontSize: '60px' }}
              />
              <p>Thank You</p>
              <p>Do you have any queries?</p>
            </div>

            <div className="form-container__right">
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
                  <FormControl
                    as="textarea"
                    rows="3"
                    type="text"
                    placeholder="Write here..."
                  />
                </FormGroup>

                <Button className="float-right" varient="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  </>
);

export default Contact;
