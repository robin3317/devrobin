import styled from 'styled-components'
import BaseLayout from '../components/BaseLayout'
import SectionTitle from '../components/SectionTitle'

const Portfolio = () => (
  <BaseLayout>
    <PortfolioContainer>
      <SectionTitle title="Portfolio" />
    </PortfolioContainer>
  </BaseLayout>
)

const PortfolioContainer = styled.div`
  width: 80%;
  margin: 80px auto 0;
`

export default Portfolio