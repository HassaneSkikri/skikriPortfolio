import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import projImg10 from "../assets/img/project-img10.png";
import projImg11 from "../assets/img/project-img11.png";
import projImg12 from "../assets/img/project-img12.png";
import projImg13 from "../assets/img/project-img13.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Covid 19 analysis",
      description: "This project focuses on analyzing COVID-19 data using SQL queries and visualizing the results using Tableau public",
      imgUrl: projImg1,
    },
    {
      title: "Step by step to learn DS",
      description: "This project focuses on understanding evey steps to learn to be a data scientist",
      imgUrl: projImg2,
    },
    {
      title: "Titanic project",
      description: "Predict survival on the Titanic and get familiar with ML basics. ",
      imgUrl: projImg3,
    },
    {
      title: "Predict Health of Horses",
      description: "Given various medical indicators, predict the health outcomes of horses.",
      imgUrl: projImg4,
    },
    {
      title: "Bank Churn prediction",
      description: "my task is to predict whether a customer continues with their account or closes it (e.g., churns).",
      imgUrl: projImg5,
    },
    {
      title: "Multi-Class Prediction of Obesity Risk",
      description: "The goal of this competition is to use various factors to predict obesity risk in individuals, which is related to cardiovascular disease",
      imgUrl: projImg6,
    },
    {
      title: "Software Defects prediction",
      description: "My task is to predict whether a customer continues with their account or closes it (e.g., churns).",
      imgUrl: projImg7,
    },
    {
      title: "Mini projects for learning data science fundamentals",
      description: "This repository contains a collection of notebooks that provide practical learning for skills such as data cleaning, data visualization and models training ...",
      imgUrl: projImg8,
    },
    {
      title: "create 7 Machine learning algorithms from scratch",
      description: "This repository contains a collection of notebooks that provide 7 algorithme of machine learning from scratch.",
      imgUrl: projImg9,
    },
    {
      title: "To do list with flask",
      description: "through this project , i learn the fundamental concepts of flask and how to deploy my application to the users",
      imgUrl: projImg10,
    },
    {
      title: "California House Pricing end to end project",
      description: "this project consists to build a full stack project from gathering data to deployment",
      imgUrl: projImg11,
    },

    {
      title: "Student Exam Performance Predictor full stack project",
      description: "This  end-to-end project implements a machine learning model to predict students' mathematics scores based on demographic data and scores in other subjects.",
      imgUrl: projImg12,
    },

    {
      title: "Voice-Assisted Chatbot for the Visually Impaired",
      description: "This project is dedicated to designing an innovative chatbot equipped with speech recognition capabilities to empower blind individuals",
      imgUrl: projImg13,
    },
    
  ];
  // Split the projects into two arrays for the tabs
  const firstSixProjects = projects.slice(0, 6);
  const secondSixProjects = projects.slice(6, 12);
  const futureProjects = projects.slice(12); // Assuming there's only one here, as per your description

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                  <h2>Projects</h2>
                  <p>Here is a showcase of my advanced predictive modeling and data visualization techniques applied in various projects to derive actionable insights from complex datasets.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {firstSixProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {secondSixProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {futureProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                          {/* Add a title or message indicating upcoming projects */}
                          <Col size={12}>
                            <h3>Stay tuned for more exciting projects in the future!</h3>
                          </Col>
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Colorful background" />
    </section>
  );
}