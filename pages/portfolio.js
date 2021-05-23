import styled from 'styled-components';
import Head from 'next/head';
import BaseLayout from '../components/BaseLayout';
import SectionTitle from '../components/SectionTitle';
import { mediaQueries } from '../shared/styles/mediaQueries';

const Portfolio = () => (
  <>
    <Head>
      <title>Robin | Portfolio</title>
    </Head>

    <BaseLayout>
      <div className="portfolio-container">
        <SectionTitle title="Portfolio" />

        <PortfolioItemContainer>
          {/* Edutechs */}
          <PortfolioCard>
            <CardLeft>
              <ProjectImg src="/images/edutechs.png" />
              <p style={{ textAlign: 'center' }}>
                Javascript | JQuery | Firebase | WebRTC | NodeJS | Sass | Custom
                Redux Like Store Implementation | Responsive Design
              </p>
            </CardLeft>

            <CardRight>
              <Title>Edutechs</Title>
              <Subtitle>One click digital classroom solution</Subtitle>
              <Description>
                Edutechs is a one click digital video classroom solution along
                with all the features you need to be a successful teacher or to
                run a educational institution, first time in Bangladesh.
                <br />
                <br />I worked almost every part of this application, specially
                in Live Streaming, Signup-Signin, Topic Discussion and Chatting
                Section.
              </Description>

              <CustomLinkButton href="https://edutechs.org/" target="_blank">
                LIVE
              </CustomLinkButton>
            </CardRight>
          </PortfolioCard>

          <EmptyContainer />

          {/* Edutechs Mobile */}
          <PortfolioCard>
            <CardLeft>
              <ProjectImg src="/images/edutech-mobile.png" marginTop />
              <p style={{ textAlign: 'center', marginTop: '15px' }}>
                ReactNative | NativeBase | Firebase
              </p>
            </CardLeft>

            <CardRight>
              <Title>Edutechs Mobile</Title>
              <Subtitle>
                One click Digital Classroom Streaming and Conferencing Solution
              </Subtitle>
              <Description>
                Edutech is Bangladesh's first advanced Integrated Education
                Ecosystem. Introduce your students to a seamless classroom to
                digital learning experience. Monitor their progress and extend
                your support truly beyond the classroom with our One-Click
                Digital Streaming Technology.
                <br />
                <br />
                Implement all the web features in Mobile Application. This
                application is developed by ReactNative and we use NativeBase as
                ReactNative UI library. This was a challenging experience,
                because some apis were different than web!
              </Description>

              <CustomLinkButton
                href="https://play.google.com/store/apps/details?id=com.openvidu_react_native"
                target="_blank"
              >
                Google Play
              </CustomLinkButton>
              <CustomLinkButton
                href="https://apps.apple.com/gb/app/edutech-bd/id1533784019"
                target="_blank"
              >
                App Store
              </CustomLinkButton>
            </CardRight>
          </PortfolioCard>

          <EmptyContainer />

          {/* Ecommerz */}
          <PortfolioCard>
            <CardLeft>
              <ProjectImg src="/images/ecommerz.png" />
              <p style={{ textAlign: 'center' }}>
                ReactJS | Redux | Firebase | GraphQL + Apollo
              </p>
            </CardLeft>

            <CardRight>
              <Title>Ecommerz BD</Title>
              <Subtitle>An online shopping app</Subtitle>
              <Description>
                An online shopping application where you can buy your products
                and pay bills online.
                <br />
                <br />
                This is a practice project using ReactJS, React Hooks, React
                Context API, Redux, Firebase, Stripe, Service Workers &amp; Web
                Workers.
              </Description>

              <CustomLinkButton
                href="http://ecommerz-bd.herokuapp.com/"
                target="_blank"
              >
                LIVE
              </CustomLinkButton>
              <CustomLinkButton
                href="https://github.com/robin3317/ecommerce"
                target="_blank"
              >
                GITHUB
              </CustomLinkButton>
            </CardRight>
          </PortfolioCard>

          <EmptyContainer />

          {/* DIU faculty site */}
          <PortfolioCard>
            <CardLeft>
              <ProjectImg src="/images/diu_faculty_site.png" marginTop />
              <p style={{ textAlign: 'center', marginTop: '15px' }}>
                ReactJS | NextJS | SCSS | MySQL
              </p>
            </CardLeft>

            <CardRight>
              <Title>DIU Faculty Site</Title>
              <Subtitle>All the information about DIU faculties</Subtitle>
              <Description>
                From design to development, I do everything of this site.
                Although actual DIU faculty site is not updated with this design
                and code but you can see the live version of this project by
                bellow following link, hopefully will live very soon.
              </Description>

              <CustomLinkButton
                href="https://www.figma.com/proto/hrVzyQfzcZuFHuaKNLURQH/diu-faculty-page?node-id=239%3A1&scaling=min-zoom&hide-ui=1"
                target="_blank"
              >
                Design
              </CustomLinkButton>
              <CustomLinkButton
                href="https://diu-faculty-site.vercel.app/"
                target="_blank"
              >
                Live
              </CustomLinkButton>
            </CardRight>
          </PortfolioCard>

          <EmptyContainer />

          {/* GoTemplate */}
          <PortfolioCard>
            <CardLeft>
              <ProjectImg src="/images/gotemplate.png" marginTop />
              <p style={{ textAlign: 'center', marginTop: '15px' }}>
                PHP | Laravel | SCSS | MySQL
              </p>
            </CardLeft>

            <CardRight>
              <Title>GoTemplate</Title>
              <Subtitle>
                Easy Way To Sell Your Digital Products and Templates
              </Subtitle>
              <Description>
                GoTemplate is a digital platform where one can buy and sell
                his/her digital products like as web template, themes,
                illustrations e.t.c.
                <br />
                <br />
                From design to development, I do the Design and Frontend part of
                this project. I needed to work some Backend part of this project
                also.
              </Description>

              <CustomLinkButton
                href="https://www.figma.com/proto/iuipBt8sRnacTrBqoI4wO1/Landing-Page?node-id=4%3A0&scaling=min-zoom&hide-ui=1"
                target="_blank"
              >
                Design
              </CustomLinkButton>
              <CustomLinkButton
                href="http://gotemplate.emediaglobal.biz/"
                target="_blank"
              >
                Live
              </CustomLinkButton>
            </CardRight>
          </PortfolioCard>
        </PortfolioItemContainer>
      </div>
    </BaseLayout>
  </>
);

const EmptyContainer = styled.div`
  width: 100%;
  height: 100px;
`;

const PortfolioCard = styled.div`
  width: 80%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  ${mediaQueries('phone-md-lg')`
    width: 100%;
  `}
  ${mediaQueries('tab-port')`
    width: 100%;
  `}
`;

const PortfolioItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 30px 0;
`;

const CardLeft = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardRight = styled.div`
  width: 100%;
`;

const ProjectImg = styled.img`
  width: 70%;
  max-height: 500px;
  margin-top: ${(props) => (props.marginTop ? '20px' : '0')};
  border-radius: 5px;
  ${mediaQueries('tab-port')`
    width: 85%;
  `}
  ${mediaQueries('phone-md-lg')`
    width: 100%;
  `}
`;

const Title = styled.h1`
  color: #ffa10a;
`;

const Subtitle = styled.h2``;

const Description = styled.p`
  margin-top: 20px;
`;

const CustomLinkButton = styled.a`
  padding: 5px 10px;
  border: 3px solid #ffa10a;
  background-color: #fff;
  min-width: 100px;
  color: #ffa10a;
  text-decoration: none;
  display: inline-block;
  text-align: center;
  margin-right: 20px;

  &:hover {
    background-color: #ffa10a;
    color: #fff;
    text-decoration: none;
  }
`;

export default Portfolio;
