import Head from 'next/head';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase,
  faArrowRight,
  faUniversity,
  faVideo,
  faBlog,
} from '@fortawesome/free-solid-svg-icons';
import BaseLayout from '../components/BaseLayout';
import SectionTitle from '../components/SectionTitle';

const Timeline = () => (
  <>
    <Head>
      <title>Robin | Portfolio</title>
    </Head>

    <BaseLayout>
      <div className="timeline section-container">
        <SectionTitle title="Timeline" />

        <div className="timeline-body">
          <h3 style={{ fontSize: '22px', marginTop: '10px' }}>
            MY ROAD TO GLORY!
          </h3>
          <p style={{ textAlign: 'center' }}>
            Below you can see a timeline of my professional accomplishments
            along with some educational accomplishments. I hope that will
            motivate you to follow your dreams and to write down your own
            accomplishments along the way!
          </p>

          {/* Daffodil International University */}
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: '#fff',
                boxShadow: '0 0 5px rgba(0,0,0,.3)',
              }}
              contentArrowStyle={{ borderRight: '7px solid  #fff' }}
              date="Oct 2020 - Present"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
              position="right"
            >
              <div
                className="tag"
                style={{ backgroundColor: 'rgb(33, 150, 243)' }}
              >
                JOB
              </div>
              <h3 className="vertical-timeline-element-title title">
                Software Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle subtitle">
                Daffodil International University
              </h4>
              <p>
                Develop and maintain different websites of Daffodil
                International University and Daffodil Family as and when
                required.
              </p>
              <a
                className="external-link"
                href="http://daffodilvarsity.edu.bd/"
                target="_blank"
              >
                Company website &#187;
              </a>
            </VerticalTimelineElement>
          </VerticalTimeline>

          {/* Corona Engineering */}
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: '#fff',
                boxShadow: '0 0 5px rgba(0,0,0,.3)',
              }}
              contentArrowStyle={{ borderRight: '7px solid  #fff' }}
              date="Mar 2019 - Sept 2020"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <div
                className="tag"
                style={{ backgroundColor: 'rgb(33, 150, 243)' }}
              >
                JOB
              </div>
              <h3 className="vertical-timeline-element-title title">
                Software Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle subtitle">
                Corona Engineering Ltd.
              </h4>
              <p>
                Developing a WebRTC based one click digital video classroom
                solution, firstime in Bangladesh.
              </p>
              <a
                className="external-link"
                href="https://edutechs.org/"
                target="_blank"
              >
                Check it out here &#187;
              </a>
            </VerticalTimelineElement>
          </VerticalTimeline>

          {/* Gain Solutions */}
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                background: '#fff',
                boxShadow: '0 0 5px rgba(0,0,0,.3)',
              }}
              contentArrowStyle={{ borderRight: '7px solid  #fff' }}
              date="Nov 2018 - Feb 2019"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
              position="right"
            >
              <div
                className="tag"
                style={{ backgroundColor: 'rgb(33, 150, 243)' }}
              >
                JOB
              </div>
              <h3 className="vertical-timeline-element-title title">
                Junior Web Developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle subtitle">
                Gain Solutions
              </h4>
              <p>
                Developed a Customer Relationship Management system using
                React-Redux-NodeJS.
              </p>
              <a
                className="external-link"
                href="https://gain.solutions/"
                target="_blank"
              >
                Company website &#187;
              </a>
            </VerticalTimelineElement>
          </VerticalTimeline>

          {/* B.Sc */}
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{
                background: '#fff',
                boxShadow: '0 0 5px rgba(0,0,0,.3)',
              }}
              contentArrowStyle={{ borderRight: '7px solid  #fff' }}
              date="2014 - 2018"
              iconStyle={{ background: 'rgb(1, 143, 105)', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faUniversity} />}
            >
              <div
                className="tag"
                style={{ backgroundColor: 'rgb(1, 143, 105)' }}
              >
                EDUCATION
              </div>
              <h3 className="vertical-timeline-element-title title">
                B.sc in CSE, 3.57/4.00
              </h3>
              <h4 className="vertical-timeline-element-subtitle subtitle">
                Daffodil International University
              </h4>
              <p>
                I completed my B.Sc from Daffodil International University under
                Computer Science And Engineering department. I completed 60
                courses including Lab with total credit 148.
              </p>
              <a
                className="external-link"
                href="http://daffodilvarsity.edu.bd/"
                target="_blank"
              >
                University website &#187;
              </a>
            </VerticalTimelineElement>
          </VerticalTimeline>

          {/* Write First Medium Post */}
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{
                background: '#fff',
                boxShadow: '0 0 5px rgba(0,0,0,.3)',
              }}
              contentArrowStyle={{ borderRight: '7px solid  #fff' }}
              date="29 Aug 2018"
              iconStyle={{ background: 'black', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faBlog} />}
              position="right"
            >
              <div className="tag" style={{ backgroundColor: 'black' }}>
                MEDIUM
              </div>
              <p>
                Write first Medium post about my experience to learn
                programming.
              </p>
              <a
                className="external-link"
                href="https://medium.com/@robin4java/my-journey-and-one-common-mistake-we-are-doing-when-learning-programming-a04175c75f64"
                target="_blank"
              >
                Check it out here &#187;
              </a>
            </VerticalTimelineElement>
          </VerticalTimeline>

          {/* Upload First Youtube video */}
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{
                background: '#fff',
                boxShadow: '0 0 5px rgba(0,0,0,.3)',
              }}
              contentArrowStyle={{ borderRight: '7px solid  #fff' }}
              date="29 Aug 2018"
              iconStyle={{ background: 'red', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faVideo} />}
            >
              <div className="tag" style={{ backgroundColor: 'red' }}>
                YOUTUBE
              </div>
              <p>Upload first YouTube video related to Flutter Development.</p>
              <a
                className="external-link"
                href="https://www.youtube.com/c/codeonces"
                target="_blank"
              >
                Channel link &#187;
              </a>
            </VerticalTimelineElement>
          </VerticalTimeline>

          {/* H.S.C */}
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{
                background: '#fff',
                boxShadow: '0 0 5px rgba(0,0,0,.3)',
              }}
              contentArrowStyle={{ borderRight: '7px solid  #fff' }}
              date="2012"
              iconStyle={{ background: 'rgb(1, 143, 105)', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faUniversity} />}
              position="right"
            >
              <div
                className="tag"
                style={{ backgroundColor: 'rgb(1, 143, 105)' }}
              >
                EDUCATION
              </div>
              <h3 className="vertical-timeline-element-title title">
                H.S.C in Science, 5.00/5.00
              </h3>
              <h4 className="vertical-timeline-element-subtitle subtitle">
                Ispahani Public School &amp; College, Cumilla
              </h4>
              <p>
                I passed Higher Secondary School Certificate Examination from
                Ispahani Public School &amp; College under Science group in
                2012.
              </p>
              <a
                className="external-link"
                href="http://www.ipsc.edu.bd/"
                target="_blank"
              >
                College website &#187;
              </a>
            </VerticalTimelineElement>
          </VerticalTimeline>

          {/* S.S.C */}
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{
                background: '#fff',
                boxShadow: '0 0 5px rgba(0,0,0,.3)',
              }}
              contentArrowStyle={{ borderRight: '7px solid  #fff' }}
              date="2010"
              iconStyle={{ background: 'rgb(1, 143, 105)', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faUniversity} />}
            >
              <div
                className="tag"
                style={{ backgroundColor: 'rgb(1, 143, 105)' }}
              >
                EDUCATION
              </div>
              <h3 className="vertical-timeline-element-title title">
                S.S.C in Science, 5.00/5.00
              </h3>
              <h4 className="vertical-timeline-element-subtitle subtitle">
                Ispahani Public School &amp; College, Cumilla
              </h4>
              <p>
                I passed Secondary School Certificate Examination from Ispahani
                Public School &amp; College under Science group in 2010.
              </p>
              <a
                className="external-link"
                href="http://www.ipsc.edu.bd/"
                target="_blank"
              >
                School website &#187;
              </a>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </BaseLayout>
  </>
);

export default Timeline;
