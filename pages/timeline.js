import styled from 'styled-components'
import Head from 'next/head'
import Link from 'next/link'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faArrowRight, faUniversity, faVideo, faBlog } from '@fortawesome/free-solid-svg-icons'
import BaseLayout from '../components/BaseLayout'
import SectionTitle from '../components/SectionTitle'
import { mediaQueries } from '../shared/styles/mediaQueries'

const Timeline = () => (
  <>
    <Head>
      <title>Robin | Portfolio</title>
    </Head>

    <BaseLayout>
      <TimelineContainer>
        <SectionTitle title="Timeline" />

        <TimelineBody>
          <h3 style={{ fontSize: '22px', marginTop: '10px' }}>MY ROAD TO GLORY!</h3>
          <p style={{textAlign: 'center'}}>
            Below you can see a timeline of my professional accomplishments along with some educational accomplishments.
            I hope that will motivate you to follow your dreams and to write down your own accomplishments
            along the way!
          </p>

          {/* Corona Engineering */}
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#fff', boxShadow: '0 0 5px rgba(0,0,0,.3)' }}
              contentArrowStyle={{ borderRight: '7px solid  #fff' }}
              date="Mar 2019 - Present"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <CustomTimelineTag bgColor="rgb(33, 150, 243)">JOB</CustomTimelineTag>
              <Title className="vertical-timeline-element-title">Software Developer</Title>
              <Subtitle className="vertical-timeline-element-subtitle">Corona Engineering Ltd.</Subtitle>
              <p>
                Developing a WebRTC based one click digital video classroom solution, firstime in Bangladesh.
              </p>
              <ExternalLink href="https://edutechs.org/" target="_blank">
                Check it out here <FontAwesomeIcon icon={faArrowRight} />
              </ExternalLink>
            </VerticalTimelineElement>
          </VerticalTimeline>

          {/* Gain Solutions */}
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#fff', boxShadow: '0 0 5px rgba(0,0,0,.3)' }}
              contentArrowStyle={{ borderRight: '7px solid  #fff' }}
              date="Nov 2018 - Feb 2019"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
              position="right"
            >
              <CustomTimelineTag bgColor="rgb(33, 150, 243)">JOB</CustomTimelineTag>
              <Title className="vertical-timeline-element-title">Junior Web Developer</Title>
              <Subtitle className="vertical-timeline-element-subtitle">Gain Solutions</Subtitle>
              <p>
                Developed a Customer Relationship Management system using React-Redux-NodeJS.
              </p>
              <ExternalLink href="https://gain.solutions/" target="_blank">
                Company website <FontAwesomeIcon icon={faArrowRight} />
              </ExternalLink>
            </VerticalTimelineElement>
          </VerticalTimeline>

          {/* B.Sc */}
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: '#fff', boxShadow: '0 0 5px rgba(0,0,0,.3)' }}
              contentArrowStyle={{ borderRight: '7px solid  #fff' }}
              date="2014 - 2018"
              iconStyle={{ background: 'rgb(1, 143, 105)', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faUniversity} />}
            >
              <CustomTimelineTag bgColor="rgb(1, 143, 105)">EDUCATION</CustomTimelineTag>
              <Title className="vertical-timeline-element-title">B.sc in CSE, 3.57/4.00</Title>
              <Subtitle className="vertical-timeline-element-subtitle">Daffodil International University</Subtitle>
              <p>
                I completed my B.Sc from Daffodil International University under Computer Science And
                Engineering department. I completed 60 courses including Lab with total credit 148.
              </p>
              <ExternalLink href="http://daffodilvarsity.edu.bd/" target="_blank">
                University website <FontAwesomeIcon icon={faArrowRight} />
              </ExternalLink>
            </VerticalTimelineElement>
          </VerticalTimeline>

          {/* Write First Medium Post */}
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: '#fff', boxShadow: '0 0 5px rgba(0,0,0,.3)' }}
              contentArrowStyle={{ borderRight: '7px solid  #fff' }}
              date="29 Aug 2018"
              iconStyle={{ background: 'black', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faBlog} />}
              position="right"
            >
              <CustomTimelineTag bgColor="black">MEDIUM</CustomTimelineTag>
              <p>
                Write first Medium post about my experience to learn programming.
              </p>
              <ExternalLink href="https://medium.com/@robin4java/my-journey-and-one-common-mistake-we-are-doing-when-learning-programming-a04175c75f64" target="_blank">
                Check it out here <FontAwesomeIcon icon={faArrowRight} />
              </ExternalLink>
            </VerticalTimelineElement>
          </VerticalTimeline>

          {/* Upload First Youtube video */}
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: '#fff', boxShadow: '0 0 5px rgba(0,0,0,.3)' }}
              contentArrowStyle={{ borderRight: '7px solid  #fff' }}
              date="29 Aug 2018"
              iconStyle={{ background: 'red', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faVideo} />}
            >
              <CustomTimelineTag bgColor="red">YOUTUBE</CustomTimelineTag>
              <p>
                Upload first YouTube video related to Flutter Development.
              </p>
              <ExternalLink href="https://www.youtube.com/c/codeonces" target="_blank">
                Channel link <FontAwesomeIcon icon={faArrowRight} />
              </ExternalLink>
            </VerticalTimelineElement>
          </VerticalTimeline>

          {/* H.S.C */}
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: '#fff', boxShadow: '0 0 5px rgba(0,0,0,.3)' }}
              contentArrowStyle={{ borderRight: '7px solid  #fff' }}
              date="2012"
              iconStyle={{ background: 'rgb(1, 143, 105)', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faUniversity} />}
              position="right"
            >
              <CustomTimelineTag bgColor="rgb(1, 143, 105)">EDUCATION</CustomTimelineTag>
              <Title className="vertical-timeline-element-title">H.S.C in Science, 5.00/5.00</Title>
              <Subtitle className="vertical-timeline-element-subtitle">Ispahani Public School &amp; College, Cumilla</Subtitle>
              <p>
                I passed Higher Secondary School Certificate Examination from Ispahani Public School &amp; College under Science group in 2012.
              </p>
              <ExternalLink href="http://www.ipsc.edu.bd/" target="_blank">
                College website <FontAwesomeIcon icon={faArrowRight} />
              </ExternalLink>
            </VerticalTimelineElement>
          </VerticalTimeline>

          {/* S.S.C */}
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: '#fff', boxShadow: '0 0 5px rgba(0,0,0,.3)' }}
              contentArrowStyle={{ borderRight: '7px solid  #fff' }}
              date="2010"
              iconStyle={{ background: 'rgb(1, 143, 105)', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faUniversity} />}
            >
              <CustomTimelineTag bgColor="rgb(1, 143, 105)">EDUCATION</CustomTimelineTag>
              <Title className="vertical-timeline-element-title">S.S.C in Science, 5.00/5.00</Title>
              <Subtitle className="vertical-timeline-element-subtitle">Ispahani Public School &amp; College, Cumilla</Subtitle>
              <p>
                I passed Secondary School Certificate Examination from Ispahani Public School &amp; College under Science group in 2010.
              </p>
              <ExternalLink href="http://www.ipsc.edu.bd/" target="_blank">
                School website <FontAwesomeIcon icon={faArrowRight} />
              </ExternalLink>
            </VerticalTimelineElement>
          </VerticalTimeline>

        </TimelineBody>

      </TimelineContainer>
    </BaseLayout>
  </>
)

const Title = styled.h3`
  font-size: 24px;
`

const Subtitle = styled.h4`
  font-size: 20px;
`

const TimelineContainer = styled.div`
  width: 80%;
  margin: 105px auto 0;
  ${mediaQueries('phone-lg')`
    width: 90%;
  `}
`

const TimelineBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const CustomTimelineTag = styled.div`
  display: inline-block;
  margin-bottom: 3px;
  background-color: ${props => props.bgColor};
  color: #fff;
  font-size: 14px;
  padding: 5px;
  border-radius: 3px;
`

const ExternalLink = styled.a`
  text-decoration: none;
  text-align: right;
  display: block;
`

export default Timeline