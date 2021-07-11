import Head from 'next/head';
import Link from 'next/link';
import BaseLayout from '../components/BaseLayout';
import SectionTitle from '../components/SectionTitle';

const Portfolio = () => (
  <>
    <Head>
      <title>Robin | Portfolio</title>
    </Head>

    <BaseLayout>
      <div className="portfolio-container">
        <SectionTitle title="Portfolio" />

        <div className="portfolio-item-container">
          {/* Edutechs */}
          <div className="portfolio-card">
            <div className="card-left">
              <img className="project-img" src="/images/edutechs.png" />
              <p style={{ textAlign: 'center' }}>
                Javascript | JQuery | Firebase | WebRTC | NodeJS | Sass | Custom
                Redux Like Store Implementation | Responsive Design
              </p>
            </div>

            <div className="card-right">
              <h1 className="title">Edutechs</h1>
              <h2>One click digital classroom solution</h2>
              <p className="mt-20">
                Edutechs is a one click digital video classroom solution along
                with all the features you need to be a successful teacher or to
                run a educational institution, first time in Bangladesh.
                <br />
                <br />I worked almost every part of this application, specially
                in Live Streaming, Signup-Signin, Topic Discussion and Chatting
                Section.
              </p>

              <a
                className="custom-btn"
                href="https://edutechs.org/"
                target="_blank"
              >
                LIVE
              </a>

              <Link href="/portfolio/edutechs-web">
                <a className="custom-btn">Details</a>
              </Link>
            </div>
          </div>

          <div className="empty-container" />

          {/* Edutechs Mobile */}
          <div className="portfolio-card">
            <div className="card-left">
              <img
                className="project-img mt-20"
                src="/images/edutech-mobile.png"
              />
              <p className="tag">ReactNative | NativeBase | Firebase</p>
            </div>

            <div className="card-right">
              <h1 className="title">Edutechs Mobile</h1>
              <h2>
                One click Digital Classroom Streaming and Conferencing Solution
              </h2>
              <p className="mt-20">
                Edutech is Bangladesh's first advanced Integrated Education
                Ecosystem. Introduce your students to a seamless classroom to
                digital learning experience. Monitor their progress and extend
                your support truly beyond the classroom with our One-Click
                Digital Streaming Technology.
                <br />
                <br />
                Implement all the web features in Mobile Application. This
                application is developed by ReactNative and we use NativeBase as
                ReactNative UI library. This was a challenging experience,
                because some apis were different than web!
              </p>

              <a
                className="custom-btn"
                href="https://play.google.com/store/apps/details?id=com.openvidu_react_native"
                target="_blank"
              >
                Google Play
              </a>
              <a
                className="custom-btn"
                href="https://apps.apple.com/gb/app/edutech-bd/id1533784019"
                target="_blank"
              >
                App Store
              </a>
            </div>
          </div>

          <div className="empty-container" />

          {/* Ecommerz */}
          <div className="portfolio-card">
            <div className="card-left">
              <img className="project-img" src="/images/ecommerz.png" />
              <p style={{ textAlign: 'center' }}>
                ReactJS | Redux | Firebase | GraphQL + Apollo
              </p>
            </div>

            <div className="card-right">
              <h1 className="title">Ecommerz BD</h1>
              <h2>An online shopping app</h2>
              <p className="mt-20">
                An online shopping application where you can buy your products
                and pay bills online.
                <br />
                <br />
                This is a practice project using ReactJS, React Hooks, React
                Context API, Redux, Firebase, Stripe, Service Workers &amp; Web
                Workers.
              </p>

              <a
                className="custom-btn"
                href="http://ecommerz-bd.herokuapp.com/"
                target="_blank"
              >
                LIVE
              </a>
              <a
                className="custom-btn"
                href="https://github.com/robin3317/ecommerce"
                target="_blank"
              >
                GITHUB
              </a>
            </div>
          </div>

          <div className="empty-container" />

          {/* DIU faculty site */}
          <div className="portfolio-card">
            <div className="card-left">
              <img
                className="project-img mt-20"
                src="/images/diu_faculty_site.png"
              />
              <p className="tag">ReactJS | NextJS | SCSS | MySQL</p>
            </div>

            <div className="card-right">
              <h1 className="title">DIU Faculty Site</h1>
              <h2>All the information about DIU faculties</h2>
              <p className="mt-20">
                From design to development, I do everything of this site.
                Although actual DIU faculty site is not updated with this design
                and code but you can see the live version of this project by
                bellow following link, hopefully will live very soon.
              </p>

              <a
                className="custom-btn"
                href="https://www.figma.com/proto/hrVzyQfzcZuFHuaKNLURQH/diu-faculty-page?node-id=239%3A1&scaling=min-zoom&hide-ui=1"
                target="_blank"
              >
                Design
              </a>
              <a
                className="custom-btn"
                href="https://diu-faculty-site.vercel.app/"
                target="_blank"
              >
                Live
              </a>
            </div>
          </div>

          <div className="empty-container" />

          {/* GoTemplate */}
          <div className="portfolio-card">
            <div className="card-left">
              <img className="project-img mt-20" src="/images/gotemplate.png" />
              <p className="tag">PHP | Laravel | SCSS | MySQL</p>
            </div>

            <div className="card-right">
              <h1 className="title">GoTemplate</h1>
              <h2>Easy Way To Sell Your Digital Products and Templates</h2>
              <p className="mt-20">
                GoTemplate is a digital platform where one can buy and sell
                his/her digital products like as web template, themes,
                illustrations e.t.c.
                <br />
                <br />
                From design to development, I do the Design and Frontend part of
                this project. I needed to work some Backend part of this project
                also.
              </p>

              <a
                className="custom-btn"
                href="https://www.figma.com/proto/iuipBt8sRnacTrBqoI4wO1/Landing-Page?node-id=4%3A0&scaling=min-zoom&hide-ui=1"
                target="_blank"
              >
                Design
              </a>
              <a
                className="custom-btn"
                href="http://gotemplate.emediaglobal.biz/"
                target="_blank"
              >
                Live
              </a>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  </>
);

export default Portfolio;
