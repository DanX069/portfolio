import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/smartex.png";
import projImg2 from "../assets/img/sts.png";
import projImg3 from "../assets/img/cervical.png";
import projImg4 from "../assets/img/cvinc.png";
import projImg5 from "../assets/img/mldl.png";
import projImg6 from "../assets/img/blockchain.png";
import projImg7 from "../assets/img/csebubble.png";
import projImg8 from "../assets/img/port.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "S.M.A.R.T.E.X",
      description: "A software solution used to track and manage the movement of people in and out of campus.",
      imgUrl: projImg1,
      repoUrl: "https://github.com/DanX069/SMARTEX-CAEES",
    },
    {
      title: "Space Travel System",
      description: "A comprehensive Space Travel System in C++, using object-oriented programming to create distinct roles and a versatile ticket booking service for various passenger types and travel options.",
      imgUrl: projImg2,
      repoUrl: "https://github.com/DanX069/Space-Travel-System",
    },
    {
      title: "Cervical Cancer Screening",
      description: "A Python-based binary classifier for cervical cancer screening using key libraries and machine learning techniques, achieving 90% accuracy in prediction with data visualization for enhanced interpretation.",
      imgUrl: projImg3,
      repoUrl: "https://github.com/DanX069/Python-Assignment",
    },
    {
      title: "CV in C",
      description: "A comprehensive Computer Vision Library in C, incorporating standard and advanced image processing techniques such as edge detection, stereo vision, and features like Harris corner detection, HOG, and SIFT.",
      imgUrl: projImg4,
      repoUrl: "https://github.com/DanX069/SMARTEX-CAEES",
    },
    {
      title: "Intro to ML and DL",
      description: "Gained a foundational understanding of various machine learning and deep learning algorithms, developed proficiency in Python, data handling and visualization, evaluated ML model predictions, and applied these skills in a practical project.",
      imgUrl: projImg5,
      repoUrl: "https://github.com/DanX069/SMARTEX-CAEES",
    },
    {
      title: "BlockChain101",
      description: "Comprehensively studied Blockchain, focusing on decentralized and distributed systems, its applications in cryptocurrencies, and grasping essential cryptographic concepts for operational understanding.",
      imgUrl: projImg6,
      repoUrl: "https://github.com/DanX069/BlockChain101",
    },
    {
      title: "CSE-BUBBLE",
      description: "A unique 32-bit processor, CSE-BUBBLE, with a distinct Instruction Set Architecture and segregated Instruction/Data Memory system for enhanced efficiency, including op-code format creation, data path components determination, and development of Verilog modules, culminating in a successful single-cycle instruction execution unit.",
      imgUrl: projImg7,
      repoUrl: "https://github.com/DanX069/CSE-BUBBLE",
    },
    {
      title: "Portfolio Website",
      description: "An interactive, responsive portfolio website utilizing React for front-end development, React-Bootstrap for streamlined CSS framework, and Animate.css for dynamic, engaging animations.",
      imgUrl: projImg8,
      repoUrl: "https://github.com/DanX069/SMARTEX-CAEES",
    },
    {
      title: "CV in C",
      description: "A comprehensive Computer Vision Library in C, incorporating standard and advanced image processing techniques such as edge detection, stereo vision, and features like Harris corner detection, HOG, and SIFT.",
      imgUrl: projImg4,
      repoUrl: "https://github.com/DanX069/SMARTEX-CAEES",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Welcome to my projects hub, where creativity meets code.<br></br>Enjoy exploring the products of my skills and passion!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav> */}
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="second">
                      <p>Sorry to disappoint you folks, but I don't have anymore projects to show you guys:( But sit tight! I am gonna make more interesting fun stuff, coz why not:)</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Sorry to disappoint you folks, but I don't have anymore projects to show you guys:( But sit tight! I am gonna make more interesting fun stuff, coz why not:)</p>
                    </Tab.Pane> */}
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="bgimg"></img>
    </section>
  )
}
