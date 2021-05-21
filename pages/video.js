import styled from 'styled-components';
import Head from 'next/head';
import BaseLayout from '../components/BaseLayout';
import SectionTitle from '../components/SectionTitle';
import { mediaQueries } from '../shared/styles/mediaQueries';

const Video = () => (
  <>
    <Head>
      <title>Robin | Portfolio</title>
    </Head>

    <BaseLayout>
      <VideoContainer>
        <SectionTitle title="Video" />

        <VideoBody>
          <h3
            style={{
              fontSize: '22px',
              marginTop: '50px',
              marginBottom: '20px',
            }}
          >
            LATEST VIDEOS I UPLOADED ON YOUTUBE
          </h3>
          <LatestVideoContainer>
            <iframe
              width="32%"
              height="300"
              frameBorder="0"
              src="https://www.youtube.com/embed/83g6rPtJtno"
            ></iframe>
            <iframe
              width="32%"
              height="300"
              frameBorder="0"
              src="https://www.youtube.com/embed/uRYpG2cGvy0"
            ></iframe>
            <iframe
              width="32%"
              height="300"
              frameBorder="0"
              src="https://www.youtube.com/embed/jmrd0Drz31A"
            ></iframe>
          </LatestVideoContainer>

          <h3
            style={{
              fontSize: '22px',
              marginTop: '50px',
              marginBottom: '20px',
            }}
          >
            FLUTTER TUTORIAL BANGLA - FLUTTER ZERO TO INFINITY
          </h3>
          <iframe
            width="50%"
            height="300"
            frameBorder="0"
            src="https://www.youtube.com/embed/videoseries?list=PLAqczZ5-OdVKJOBskWc_zjsJFwcRlEkzO"
          ></iframe>
          <SizedBox />

          <h3
            style={{
              fontSize: '22px',
              marginTop: '50px',
              marginBottom: '20px',
            }}
          >
            WEB DEVELOPMENT BANGLA - ZERO TO INFINITY
          </h3>
          <iframe
            width="50%"
            height="300"
            frameBorder="0"
            src="https://www.youtube.com/embed/videoseries?list=PLAqczZ5-OdVKXIEoVfggw2OMZto4Oew2B"
          ></iframe>
          <SizedBox />
        </VideoBody>
      </VideoContainer>
    </BaseLayout>
  </>
);

const VideoContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 70px auto 0;
  ${mediaQueries('phone-md-lg')`
    width: 90%;
  `}
  ${mediaQueries('tab-port')`
    width: 90%;
  `}
  ${mediaQueries('tab-901-to-1420')`
    width: 90%;
  `}
  iframe {
    ${mediaQueries('phone-md-lg')`
      width: 100%;
      &:not(:last-child) {
        margin-bottom: 15px;
      }
    `}
  }
`;

const VideoBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LatestVideoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  ${mediaQueries('phone-lg')`
    flex-direction: column;
  `}
`;

const SizedBox = styled.div`
  width: 100%;
  height: 30px;
`;

export default Video;
