import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';
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
          {/* Flutter zero to infinity */}
          <CardContainer>
            <a
              href="https://www.youtube.com/playlist?list=PLAqczZ5-OdVKJOBskWc_zjsJFwcRlEkzO"
              target="_blank"
            >
              <CardThumbnail src="./images/v0_flutter_tutorial.jpg" />
            </a>
            <CardBody>
              <CardTitle
                href="https://www.youtube.com/playlist?list=PLAqczZ5-OdVKJOBskWc_zjsJFwcRlEkzO"
                target="_blank"
              >
                Flutter Tutorial - Zero to Infinity
              </CardTitle>
              <CardDescription>
                From this tutorial series you will be able to build iOS and
                Android Apps with a Single Code base.
              </CardDescription>
            </CardBody>
            <CardFooter>
              <FooterContent>63 Lectures</FooterContent>
              <FooterContent>13 Hours</FooterContent>
            </CardFooter>
          </CardContainer>

          {/* Dart Programming Language */}
          <CardContainer>
            <a
              href="https://www.youtube.com/playlist?list=PLAqczZ5-OdVIMZYeryirjRzAizx9ik6TZ"
              target="_blank"
            >
              <CardThumbnail src="./images/v_dart.png" />
            </a>
            <CardBody>
              <CardTitle
                href="https://www.youtube.com/playlist?list=PLAqczZ5-OdVIMZYeryirjRzAizx9ik6TZ"
                target="_blank"
              >
                Dart Programming Language
              </CardTitle>
              <CardDescription>
                This tutorial series is all about Google Dart Programming
                Language. You can find all the topics related to dart
                programming...
              </CardDescription>
            </CardBody>
            <CardFooter>
              <FooterContent>35 Lectures</FooterContent>
              <FooterContent>7 Hours</FooterContent>
            </CardFooter>
          </CardContainer>

          {/* Avengers App */}
          <CardContainer>
            <a
              href="https://www.youtube.com/playlist?list=PLAqczZ5-OdVK2HvZh0UAsIhxn23wRjcZF"
              target="_blank"
            >
              <CardThumbnail src="./images/v2_flutter_avengers.png" />
            </a>
            <CardBody>
              <CardTitle
                href="https://www.youtube.com/playlist?list=PLAqczZ5-OdVK2HvZh0UAsIhxn23wRjcZF"
                target="_blank"
              >
                Flutter Avengers App
              </CardTitle>
              <CardDescription>
                From this flutter tutorial bangla series, you can learn how to
                develop a simple flutter app with the combination of some...
              </CardDescription>
            </CardBody>
            <CardFooter>
              <FooterContent>7 Lectures</FooterContent>
              <FooterContent>2 Hours</FooterContent>
            </CardFooter>
          </CardContainer>

          {/* Color Guessing Game */}
          <CardContainer>
            <a href="https://youtu.be/83g6rPtJtno" target="_blank">
              <CardThumbnail src="./images/v3_color_guessing_game.jpg" />
            </a>
            <CardBody>
              <CardTitle href="https://youtu.be/83g6rPtJtno" target="_blank">
                Flutter Color Guessing Game
              </CardTitle>
              <CardDescription>
                In this tutorial i build a simple color guessing app from
                scratch. Lots of concepts are discussed in this video like as...
              </CardDescription>
            </CardBody>
            <CardFooter>
              <FooterContent>Single Lecture</FooterContent>
              <FooterContent>1:29 Hours</FooterContent>
            </CardFooter>
          </CardContainer>

          {/* Brain Treaser */}
          <CardContainer>
            <a href="https://youtu.be/OMbhQKpxX5g" target="_blank">
              <CardThumbnail src="./images/v1_brain_teaser.png" />
            </a>
            <CardBody>
              <CardTitle href="https://youtu.be/OMbhQKpxX5g" target="_blank">
                Flutter Brain-Teaser Game
              </CardTitle>
              <CardDescription>
                Brain-Teaser or Sharp Your Brain is a simple math base game
                whcih can help you to think quickly.
              </CardDescription>
            </CardBody>
            <CardFooter>
              <FooterContent>Single Lecture</FooterContent>
              <FooterContent>1:21 Hours</FooterContent>
            </CardFooter>
          </CardContainer>
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
`;

const VideoBody = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const CardContainer = styled.div`
  box-shadow: -10px 10px 14px -5px rgb(25 42 70 / 13%);
  border-radius: 5px;
  max-width: 350px;
  margin: 20px;
`;

const CardThumbnail = styled.img`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 100%;
  height: 185px;
`;

const CardBody = styled.div`
  padding: 10px;
`;

const CardTitle = styled.a`
  cursor: pointer;
`;

const CardDescription = styled.p`
  font-size: 16px;
`;

const CardFooter = styled.div`
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: space-between;
`;

const FooterContent = styled.p`
  padding: 10px;
  margin: 0;
  font-size: 14px;
`;

const SizedBox = styled.div`
  width: 100%;
  height: 30px;
`;

export default Video;
