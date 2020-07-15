import styled from 'styled-components'
import Head from 'next/head'
import BaseLayout from '../components/BaseLayout'
import SectionTitle from '../components/SectionTitle'

const Timeline = () => (
  <>
    <Head>
      <title>Robin | Portfolio</title>
    </Head>

    <BaseLayout>
      <TimelineContainer>
        <SectionTitle title="Timeline" />
      </TimelineContainer>
    </BaseLayout>
  </>
)

const TimelineContainer = styled.div`
  width: 80%;
  margin: 80px auto 0;
`

export default Timeline