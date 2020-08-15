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
        <div style={{ width: '100%', height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <h2>COMING SOON!</h2>
        </div>
      </BlogContainer>
    </BaseLayout>
  </>
)

const BlogContainer = styled.div`
  width: 80%;
  margin: 105px auto 0;
`

export default Blog