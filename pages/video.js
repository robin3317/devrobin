import styled from 'styled-components'
import Head from 'next/head'
import BaseLayout from '../components/BaseLayout'
import SectionTitle from '../components/SectionTitle'

const Video = () => (
  <>
    <Head>
      <title>Robin | Portfolio</title>
    </Head>

    <BaseLayout>
      <VideoContainer>
        <SectionTitle title="Video" />
      </VideoContainer>
    </BaseLayout>
  </>
)

const VideoContainer = styled.div`
  width: 80%;
  margin: 105px auto 0;
`

export default Video