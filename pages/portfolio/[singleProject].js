import Head from 'next/head';
import { useRouter } from 'next/router';
import BaseLayout from '../../components/BaseLayout';
import { Projects } from '../api/projects';

const Project = () => {
  const router = useRouter();

  const filteredProject = Projects.filter(
    (item) => item.id === router.query.singleProject
  );

  const project = filteredProject[0];

  return (
    <>
      <Head>
        <title>Robin | {project.heading}</title>
      </Head>
      <BaseLayout>
        <div>
          <p className="mt-5 full-width text-center">
            This section is under construction, will be updated very soon
            <strong>(within 14th July, 2021)</strong>. Thanks for your patient
          </p>
          <h1>{project.heading}</h1>
          <img className="project-img" src={project.imgPath} />
          <h2 className="mt-5">{project.subHeading}</h2>
          <p dangerouslySetInnerHTML={{ __html: project.description }} />
          <span onClick={() => router.back()}>Back to portfolio page</span>
        </div>
      </BaseLayout>
    </>
  );
};

export default Project;
