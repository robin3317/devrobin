import styled from 'styled-components';
import Head from 'next/head';
import BaseLayout from '../components/BaseLayout';
import SectionTitle from '../components/SectionTitle';
import { mediaQueries } from '../shared/styles/mediaQueries';

const Blog = () => (
  <>
    <Head>
      <title>Robin | Blog</title>
    </Head>

    <BaseLayout>
      <BlogContainer>
        <SectionTitle title="Blog" />
        <div
          style={{
            width: '100%',
            height: '400px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CustomMessage>
            📢 Blog section will introduce soon, api development is under
            construction! 🙏
          </CustomMessage>
        </div>
      </BlogContainer>
    </BaseLayout>
  </>
);

const CustomMessage = styled.h2`
  padding: 15px;
  border-radius: 5px;
  width: 50%;
  text-align: center;
  ${mediaQueries('phone-md-lg')`
    width: 90%;
  `}
  ${mediaQueries('tab-port')`
    width: 70%;
  `}
`;

const BlogContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 70px auto 0;
  ${mediaQueries('phone-md-lg')`
    width: 90%;
  `}
  ${mediaQueries('tab-port')`
    width: 90%;
  `}
  ${mediaQueries('tab-901-to-1420')`
    width: 90%;
  `}
`;

export default Blog;
