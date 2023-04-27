import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import Mixuxe from '../assets/img/Mixuxe.png';
import Twitter from '../assets/img/twitter.png';
import InterviewTracker from '../assets/img/InterviewTracker.png';
import Ad3lie from '../assets/img/Ad3lie.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: 'Mixuxe',
      description: 'Bootstrap Author Website',
      imgUrl: Mixuxe,
      websiteLink: 'https://katathay.github.io/Mixuxe/',
       githubLink: 'https://github.com/KatAthay/Mixuxe',
    },
    {
      title: 'Nemesis',
      description:
        'Application that performs API calls to Twitter with specified user and search terms returned.',
      imgUrl: Twitter,
      websiteLink: 'https://katathay.github.io/Mixuxe/',
      githubLink: 'https://github.com/KatAthay/Mixuxe',
    },
    {
      title: 'Application & Algo Tracker',
      description:
        "Application to track application, interviews, & algorithms you've completed.",
      imgUrl: InterviewTracker,
      websiteLink: 'https://katathay.github.io/Mixuxe/',
      githubLink: 'https://github.com/KatAthay/Mixuxe',
    },
    {
      title: 'Ad3lie',
      description: 'D3.js modularizations as reusable React components.',
      imgUrl: Ad3lie,
      websiteLink: 'https://www.ad3lie.dev',
      githubLink: 'https://github.com/oslabs-beta/ad3lie',
    },
  ];

  return (
    <section className='project' id='project'>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <h2>Projects</h2>
                  {/* <p>
                    Recents Projects include the repository link and the website link if applicable. 
                  </p> */}
                  <Tab.Container id='projects-tabs' defaultActiveKey='first'>

                    
                    <Tab.Content
                      id='slideInUp'
                      className={
                        isVisible ? 'animate__animated animate__slideInUp' : ''
                      }
                    >
                    
                      {projects.map((project, index) => (
                          <div key={index} className="mb-5">
                            <ProjectCard {...project} />
                            <div className="d-flex justify-content-center">
                              <a href="#website-link">Website Link</a>
                              <span className="mx-2">|</span>
                              <a href="#github-link">GitHub Link</a>
                            </div>
                          </div>
                        ))}
                        {/* <Row>
                          {projects.map((project, index) => {
                            return  <ProjectCard key={index} {...project} />;
                          })}
                        </Row> */}
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className='background-image-right'
        src={colorSharp2}
        alt='background'
      ></img>
    </section>
  );
};
