import Head from 'next/head';
import { useRouter } from 'next/router';
import BaseLayout from '../../components/BaseLayout';
import SectionTitle from '../../components/SectionTitle';
import { Projects } from '../api/projects';

const Project = (props) => {
  const router = useRouter();

  const filteredProject = Projects.filter((item) => item.id === props.query);

  const project = filteredProject[0];

  return (
    <>
      <Head>
        <title>Robin | {project.heading && project.heading}</title>
      </Head>
      <BaseLayout>
        {project ? (
          <div className="portfolio-container">
            <p className="full-width text-center">
              📢 I'm currently working in this section, hopefully it will
              updated very soon. Some features may not work as you expect! Sorry
              🙏
            </p>

            <SectionTitle title={project.heading} />

            <div className="portfolio-item-container">
              <img
                className="project-img"
                src={project.imgPath && project.imgPath}
              />
              <p style={{ textAlign: 'center' }}>{project.usedTechs}</p>
            </div>

            <h2 className="mt-5">{project.subHeading && project.subHeading}</h2>
            <p
              dangerouslySetInnerHTML={{
                __html: project.description && project.description,
              }}
            />
            <div className="back-btn" onClick={() => router.back()}>
              <span>&#xab;&nbsp;</span>
              <span>Back to portfolio page</span>
            </div>
          </div>
        ) : (
          <>
            <div className="container text-center">
              For some reasons, project data isn't showing. Will fix it soon.
              Thanks
            </div>
            <div className="back-btn" onClick={() => router.back()}>
              &#xab;&nbsp;
              <span>Back to portfolio page</span>
            </div>
          </>
        )}
      </BaseLayout>
    </>
  );
};

export async function getServerSideProps(context) {
  const query = context.query.singleProject;

  return {
    props: {
      query: query,
    },
  };
}

export default Project;
