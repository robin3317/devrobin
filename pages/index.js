import styled from 'styled-components';
import Head from 'next/head';
import BaseLayout from '../components/BaseLayout';
import { mediaQueries } from '../shared/styles/mediaQueries';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Robin | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <BaseLayout>
          <div className="home">
            <div className="home-left">
              <div className="triangle-wrapper">
                <div className="triangle" />
                <img
                  className="home-avatar"
                  src="/images/avatar_robin.png"
                  alt="Abdur Rahman Robin | Codeonces"
                />
              </div>

              <div className="info">
                <h1 className="mt-10">ABDUR RAHMAN ROBIN</h1>
                <h2>FULL STACK SOFTWARE DEVELOPER</h2>
                <a
                  className="resume-btn"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Recommand to open resume in browser after downloading!"
                  href="./cv/Abdur_Rahman_Robin_CV.pdf"
                  target="_blank"
                  download
                >
                  Download Resume
                </a>
              </div>
            </div>

            <div className="home-right">
              <div className="home-right__intro">
                <div>
                  <p>Class Myself {'{'}</p>
                  <p style={{ paddingLeft: 30 }}>constructor() {'{'}</p>
                  <p style={{ paddingLeft: 60 }}>
                    this.name = 'Abdur Rahman Robin';
                  </p>
                  <p style={{ paddingLeft: 60 }}>
                    this.companyName = 'Daffodil International University';
                  </p>
                  <p style={{ paddingLeft: 30 }}>{'}'}</p>
                  <p>{'}'}</p>
                </div>
              </div>

              <div className="home-right__description">
                <p>
                  <span style={{ color: '#1078EE' }}>console.log(</span>
                  {'`'}Hello &amp; Welcome, my name is{' '}
                  <span style={{ color: '#D89024' }}>{'${this.name}'}</span>.
                  I'm a full stack software developer working in{' '}
                  <span style={{ color: '#D89024' }}>
                    {'${this.companyName}'}
                  </span>
                  . I love to convert my thoughts into code. And love to share
                  my knowledge with others. \n
                  <br />
                  If you have a project or creative need that I can help with,
                  please feel free to contact.{'`'}
                  <span style={{ color: '#1078EE' }}>)</span>;
                </p>
              </div>

              <div className="home-right__contact">
                <a
                  className="mr-20"
                  target="_blank"
                  href="mailto:abdurrahmanrobin47@gmail.com"
                >
                  <img
                    align="left"
                    alt="Abdur Rahman Robin | Gmail"
                    src="https://img.icons8.com/color/40/000000/gmail.png"
                  />
                </a>

                <a
                  className="mr-20"
                  target="_blank"
                  href="https://www.github.com/robin3317"
                >
                  <img
                    align="left"
                    alt="Abdur Rahman Robin | Github"
                    src="https://img.icons8.com/fluent/40/000000/github.png"
                  />
                </a>

                <a
                  className="mr-20"
                  target="_blank"
                  href="https://stackoverflow.com/users/7387089/robin?tab=profile"
                >
                  <img
                    align="left"
                    alt="Abdur Rahman Robin | Stackoverflow"
                    src="https://img.icons8.com/color/40/000000/stackoverflow.png"
                  />
                </a>

                <a
                  className="mr-20"
                  target="_blank"
                  href="https://www.linkedin.com/in/robin4java/"
                >
                  <img
                    align="left"
                    alt="Abdur Rahman Robin | Linkedin"
                    src="https://img.icons8.com/color/40/000000/linkedin.png"
                  />
                </a>

                <a
                  className="mr-20"
                  target="_blank"
                  href="https://twitter.com/robin4java"
                >
                  <img
                    align="left"
                    alt="Abdur Rahman Robin | Twitter"
                    src="https://img.icons8.com/color/40/000000/twitter.png"
                  />
                </a>

                <a
                  className="mr-20"
                  target="_blank"
                  href="https://fb.com/robin4java"
                >
                  <img
                    align="left"
                    alt="Abdur Rahman Robin | Facebook"
                    src="https://img.icons8.com/color/40/000000/facebook-new.png"
                  />
                </a>
              </div>
            </div>
          </div>
        </BaseLayout>
      </main>
    </div>
  );
}
