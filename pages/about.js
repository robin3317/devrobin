import Head from 'next/head';
import BaseLayout from '../components/BaseLayout';
import SectionTitle from '../components/SectionTitle';
import Skillset from '../components/Skillset';
import Card from '../components/Card';
import { mediaQueries } from '../shared/styles/mediaQueries';

const About = () => (
  <>
    <Head>
      <title>Robin | About Me</title>
    </Head>

    <BaseLayout>
      <div className="about section-container">
        <SectionTitle title="About" />
        <div className="intro">
          <div className="intro-left">
            <p>
              A motivated, passionate and experienced Full Stack Developer from
              Bangladesh, currently staying in Dhaka. I'm working with
              JavaScript, Flutter and Web Technology. I love to work with
              challenge, passion and new technology.
            </p>
            <div className="highlighted-container">
              <div className="v-hr" />
              <p>Love to convert thoughts into CODE.</p>
            </div>
            <p>
              I love to learn new technology and share my knowledge with others.
              In a nutshell, I am nothing but a learner. And I don't want to be
              perfect, I want to be honest about myself.
            </p>
          </div>

          <div className="intro-right">
            <p className="p-relative">
              <img
                className="avatar"
                src="/images/avatar.png"
                alt="Abdur Rahman Robin | Codeonces"
              />
              <div className="outline" />
            </p>
            <h1>ABDUR RAHMAN ROBIN</h1>
            <h2 className="mt-0">FULL STACK SOFTWARE DEVELOPER</h2>
          </div>
        </div>

        <div className="about-skillset-container">
          <h3 className="section-header">My Skillsets</h3>

          <div className="skillsets">
            <div className="single-type-skillset__container">
              <Skillset
                imgSrc="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                title="Javascript"
              />
              {/* <Skillset
                imgSrc="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png"
                title="Typescript"
              /> */}
              <Skillset
                imgSrc="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                title="ReactJS"
              />
              <Skillset
                imgSrc="https://redux.js.org/img/redux.svg"
                title="Redux"
              />
              {/* <Skillset
                imgSrc="https://raw.githubusercontent.com/github/explore/5c058a388828bb5fde0bcafd4bc867b5bb3f26f3/topics/graphql/graphql.png"
                title="GraphQL"
              /> */}
              <Skillset
                imgSrc="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
                title="Node"
              />
              <Skillset imgSrc="https://deno.land/logo.svg" title="Deno" />
              <Skillset
                imgSrc="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/flutter/flutter.png"
                title="Flutter"
              />
              <Skillset
                imgSrc="https://reactnative.dev/img/header_logo.svg"
                title="React Native"
              />
              <Skillset
                imgSrc="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/firebase/firebase.png"
                title="Firebase"
              />
            </div>

            <div className="single-type-skillset__container">
              <Skillset imgSrc="./images/figma.svg" title="Figma" />
              <Skillset
                imgSrc="https://www.adobe.com/content/dam/cc/icons/xd.svg"
                title="Adobe XD"
              />
              <Skillset
                imgSrc="https://www.adobe.com/content/dam/cc/icons/photoshop-mobile.svg"
                title="Photoshop"
              />
              <Skillset
                imgSrc="https://www.adobe.com/content/dam/cc/icons/pr_cc_app_RGB.svg"
                title="Premier Pro"
              />
            </div>
          </div>
        </div>

        <div className="about-service-container">
          <h3 className="section-header">Service Offers</h3>

          <div className="service-card-container">
            <Card width="23.50%" maxWidth="300px" style={{ marginRight: '2%' }}>
              <div className="offer-container">
                <img src="./images/s1.png" alt="web development" />
                <p className="mt-10">WEB DEVELOPMENT</p>
                <p>Any kind of web application you want to build.</p>
              </div>
            </Card>

            <Card width="23.50%" maxWidth="300px" style={{ marginRight: '2%' }}>
              <div className="offer-container">
                <img src="./images/s2.png" alt="ui/ux design" />
                <p className="mt-10">UI/UX DESIGN</p>
                <p>Any kind of ui/ux design you want to build.</p>
              </div>
            </Card>

            <Card width="23.50%" maxWidth="300px" style={{ marginRight: '2%' }}>
              <div className="offer-container">
                <img src="./images/s3.png" alt="app design" />
                <p className="mt-10">APP DESIGN</p>
                <p>Any kind of app design you want to build.</p>
              </div>
            </Card>

            <Card width="23.50%" maxWidth="300px">
              <div className="offer-container">
                <img src="./images/s4.png" alt="mobile app development" />
                <p className="mt-10">MOBILE APP DEVELOPMENT</p>
                <p>Any kind of web application you want to build.</p>
              </div>
            </Card>
          </div>
        </div>

        {/* <FeedbackContainer>
          <h3 class="section-header">Some Positive Feedback That Encourage Me</h3>

          <FeedbackCardContainer>
            <Card width="30%" maxWidth="620px" style={{marginRight: '5%'}}>
                <FeedbackHeader>
                  <FeedbackAvatar src="/images/avatar_robin.png" />
                  <FeedbackIntro>
                    <FeedbackName>Bradley Erickson</FeedbackName>
                    <FeedbackDesignation>UI/UX Designer</FeedbackDesignation>
                    <FeedbackCompany>XYZ Company</FeedbackCompany>
                  </FeedbackIntro>
                </FeedbackHeader>

                <FeedbackDescription>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </FeedbackDescription>
            </Card>

            <Card width="30%" maxWidth="620px" style={{marginRight: '5%'}}>
              <FeedbackHeader>
                <FeedbackAvatar src="/images/avatar_robin.png" />
                <FeedbackIntro>
                  <FeedbackName>Bradley Erickson</FeedbackName>
                  <FeedbackDesignation>UI/UX Designer</FeedbackDesignation>
                  <FeedbackCompany>XYZ Company</FeedbackCompany>
                </FeedbackIntro>
              </FeedbackHeader>

              <FeedbackDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </FeedbackDescription>
            </Card>

            <Card width="30%" maxWidth="620px">
              <FeedbackHeader>
                <FeedbackAvatar src="/images/avatar_robin.png" />
                <FeedbackIntro>
                  <FeedbackName>Bradley Erickson</FeedbackName>
                  <FeedbackDesignation>UI/UX Designer</FeedbackDesignation>
                  <FeedbackCompany>XYZ Company</FeedbackCompany>
                </FeedbackIntro>
              </FeedbackHeader>

              <FeedbackDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </FeedbackDescription>
            </Card>
          </FeedbackCardContainer>
        </FeedbackContainer> */}
      </div>
    </BaseLayout>
  </>
);

// const FeedbackContainer = styled.div`
//   margin-top: 50px;
//   margin-bottom: 30px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const FeedbackCardContainer = styled.div`
//   display: flex;
//   width: 100%;
//   justify-content: center;
//   flex-wrap: wrap;
//   margin-top: 20px;
// `;

// const FeedbackHeader = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const FeedbackAvatar = styled.img`
//   width: 80px;
//   height: 80px;
//   border-radius: 50%;
//   margin-right: 20px;
// `;

// const FeedbackIntro = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const FeedbackName = styled.h4`
//   margin: 0;
// `;

// const FeedbackDesignation = styled.p`
//   margin: 0;
// `;

// const FeedbackCompany = styled.p`
//   margin: 0;
// `;

// const FeedbackDescription = styled.p``;

export default About;
