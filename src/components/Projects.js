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
    },
    {
      title: 'Nemesis',
      description:
        'Application that performs API calls to Twitter with specified user and search terms returned.',
      imgUrl: Twitter,
    },
    {
      title: 'Application & Algo Tracker',
      description:
        "Application to track application, interviews, & algorithms you've completed.",
      imgUrl: InterviewTracker,
    },
    {
      title: 'Ad3lie',
      description: 'D3.js modularizations as reusable React components.',
      imgUrl: Ad3lie,
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
                  <p>
                    Recents Projects include the repository link and the website link if applicable. 
                  </p>
                  <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                    {/* <Nav
                      variant='pills'
                      className='nav-pills mb-5 justify-content-center align-items-center'
                      id='pills-tab'
                    >
                      <Nav.Item>
                        <Nav.Link eventKey='first'>Projects Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='second'>Projects Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='third'>Projects Tab 3</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey='fourth'>Projects Tab </Nav.Link>
                      </Nav.Item>
                    </Nav> */}
                    
                    <Tab.Content
                      id='slideInUp'
                      className={
                        isVisible ? 'animate__animated animate__slideInUp' : ''
                      }
                    >
                      <Tab.Pane eventKey='first'>
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey='section'>
                        <p>
                          Not sure if this tab will be kept either. I may just
                          delete the tabs and link my app's directly to the
                          screenshots
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey='third'>
                        <p>
                          Not sure if this tab will be kept either. I may just
                          delete the tabs and link my app's directly to the
                          screenshots
                        </p>
                      </Tab.Pane>
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
