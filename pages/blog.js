import styled from 'styled-components'
import BaseLayout from '../components/BaseLayout'
import SectionTitle from '../components/SectionTitle'

const Blog = () => (
  <BaseLayout>
    <BlogContainer>
      <SectionTitle title="Blog" />
    </BlogContainer>
  </BaseLayout>
)

const BlogContainer = styled.div`
  width: 80%;
  margin: 80px auto 0;
`

export default Blog