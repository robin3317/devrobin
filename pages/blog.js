import Head from 'next/head';
import BaseLayout from '../components/BaseLayout';
import SectionTitle from '../components/SectionTitle';

const Blog = () => (
  <>
    <Head>
      <title>Robin | Blog</title>
    </Head>

    <BaseLayout>
      <div className="blog section-container">
        <SectionTitle title="Blog" />
        <div className="msg-wrapper">
          <h2 className="msg">
            📢 Blog section will introduce soon, api development is under
            construction! 🙏
          </h2>
        </div>
      </div>
    </BaseLayout>
  </>
);

export default Blog;
