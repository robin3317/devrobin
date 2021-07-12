import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import BaseLayout from '../components/BaseLayout';
import SectionTitle from '../components/SectionTitle';
import { Projects } from './api/projects';

const Portfolio = () => {
  const buttonAccordingToLink = {
    github: 'Github',
    playStore: 'Play Store',
    appStore: 'App Store',
    live: 'Live',
    design: 'Design',
  };

  return (
    <>
      <Head>
        <title>Robin | Portfolio</title>
      </Head>

      <BaseLayout>
        <div className="portfolio-container">
          <SectionTitle title="Portfolio" />

          <div className="portfolio-item-container">
            {Projects.map((project) => {
              return (
                <React.Fragment key={project.id}>
                  <div className="portfolio-card">
                    <div className="card-left">
                      <img className="project-img" src={project.imgPath} />
                      <p style={{ textAlign: 'center' }}>{project.usedTechs}</p>
                    </div>

                    <div className="card-right">
                      <h1 className="title">{project.heading}</h1>
                      <h2>{project.subHeading}</h2>
                      <p
                        className="mt-20"
                        dangerouslySetInnerHTML={{
                          __html: project.shortDescription,
                        }}
                      />

                      {Object.keys(project.links).map((link) => {
                        return (
                          <a
                            className="custom-btn"
                            href={project.links[link]}
                            target="_blank"
                            key={`${project.id}_${link}`}
                          >
                            {buttonAccordingToLink[link]}
                          </a>
                        );
                      })}

                      {/* Checking deployment */}
                      <Link
                        href={`/portfolio/[singleProject]`}
                        as={`/portfolio/${project.id}`}
                      >
                        <a className="custom-btn">Details</a>
                      </Link>
                    </div>
                  </div>

                  <div className="empty-container" />
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </BaseLayout>
    </>
  );
};

export default Portfolio;
