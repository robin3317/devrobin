import styled from 'styled-components'
import BaseLayout from '../components/BaseLayout'
import SectionTitle from '../components/SectionTitle'

const Video = () => (
  <BaseLayout>
    <VideoContainer>
      <SectionTitle title="Video" />
    </VideoContainer>
  </BaseLayout>
)

const VideoContainer = styled.div`
  width: 80%;
  margin: 80px auto 0;
`

export default Video