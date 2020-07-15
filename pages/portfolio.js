import styled from 'styled-components'
import Head from 'next/head'
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
      </PortfolioContainer>
    </BaseLayout>
  </>
)

const PortfolioContainer = styled.div`
  width: 80%;
  margin: 80px auto 0;
`

export default Portfolio