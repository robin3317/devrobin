import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import BaseLayout from '../../components/BaseLayout';

const Project = () => {
  const router = useRouter();
  const [projectDetails, setProjectDetails] = useState(null);

  useEffect(() => {
    fetch('/api/projects')
      .then((response) => response.json())
      .then((json) => {
        setProjectDetails(json.projects);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Robin | </title>
      </Head>
      <BaseLayout>
        <h1>Hello!</h1>
      </BaseLayout>
    </>
  );
};

export default Project;
