import styled from 'styled-components'
import Head from 'next/head'
import { Button } from 'react-bootstrap'
import BaseLayout from '../components/BaseLayout'
import SectionTitle from '../components/SectionTitle'

const Portfolio = () => (
  <>
    <Head>
      <title>Robin | Portfolio</title>
    </Head>

    <BaseLayout>
      <PortfolioContainer>
        <SectionTitle title="Portfolio" />

        <PortfolioItemContainer>
          {/* Edutechs */}
          <PortfolioCard>
            <CardLeft width="50%">
              <ProjectImg src="/images/edutechs.png" />
              <p style={{ textAlign: 'center' }}>
                Javascript | JQuery | Firebase | WebRTC | NodeJS | Sass | Custom Redux Like Store Implementation | Responsive Design
              </p>
            </CardLeft>

            <CardRight width="47%">
              <Title>Edutechs</Title>
              <Subtitle>One click digital classroom solution</Subtitle>
              <Description>
                Edutechs is a one click digital video classroom solution along with all
                the features you need to be a successful teacher or to run a
                educational institution, first time in Bangladesh.
              </Description>

              <CustomLinkButton href="https://edutechs.org/" target="_blank">LIVE</CustomLinkButton>
            </CardRight>
          </PortfolioCard>

          <EmptyContainer />

          {/* Ecommerz */}
          <PortfolioCard>
            <CardLeft width="47%">
              <Title>Ecommerz BD</Title>
              <Subtitle>An online shopping app</Subtitle>
              <Description>
                An online shopping application where you can buy your products and pay bills online.<br /><br />
                This is a practice project using ReactJS, React Hooks, React Context API, Redux, Firebase, Stripe,
                Service Workers &amp; Web Workers.
              </Description>

              <CustomLinkButton href="http://ecommerz-bd.herokuapp.com/" target="_blank">LIVE</CustomLinkButton>
              <CustomLinkButton href="https://github.com/robin3317/ecommerce" target="_blank">GITHUB</CustomLinkButton>
            </CardLeft>

            <CardRight width="50%">
              <ProjectImg src="/images/ecommerz.png" />
              <p style={{ textAlign: 'center' }}>
                ReactJS | Redux | Firebase | GraphQL + Apollo
              </p>
            </CardRight>
          </PortfolioCard>
        </PortfolioItemContainer>

      </PortfolioContainer>
    </BaseLayout>
  </>
)

const PortfolioContainer = styled.div`
  width: 80%;
  margin: 105px auto 0;
`

const EmptyContainer = styled.div`
  width: 100%;
  height: 100px;
`

const PortfolioCard = styled.div`
  width: 80%;
  height: 80%;
  box-shadow: 0 0 5px rgba(0,0,0,.3);
  padding: 20px 15px;
  display: flex;
  justify-content: space-between;
`

const PortfolioItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 30px 0;
`

const CardLeft = styled.div`
  width: ${props => props.width || '49%'};
`

const CardRight = styled.div`
  width: ${props => props.width || '49%'};
`

const ProjectImg = styled.img`
  width: 100%;
  height: 80%;
  max-height: 250px;
`

const Title = styled.h1`
  font-size: 36px;
  color: #ffa10a;
`

const Subtitle = styled.h3`
  font-size: 24px;
`

const Description = styled.p`
  margin-top: 20px;
`

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
`

export default Portfolio