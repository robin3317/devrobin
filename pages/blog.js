import styled from 'styled-components'
import Head from 'next/head'
import BaseLayout from '../components/BaseLayout'
import SectionTitle from '../components/SectionTitle'

const Blog = () => (
  <>
    <Head>
      <title>Robin | Blog</title>
    </Head>

    <BaseLayout>
      <BlogContainer>
        <SectionTitle title="Blog" />
      </BlogContainer>
    </BaseLayout>
  </>
)

const BlogContainer = styled.div`
  width: 80%;
  margin: 80px auto 0;
`

export default Blog