import React, { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import SkillBar from "react-skills-bars";
import LazilyRender from "react-lazily-render";
import { useTransition, animated, config } from "react-spring";
import Style from "./Pages.css";

const skills = [
  {
    type: "Java",
    level: 100,
  },
  {
    type: "React",
    level: 85,
  },
  {
    type: "Javascript",
    level: 75,
  },
  {
    type: "Spring",
    level: 50,
  },
  {
    type: "Docker",
    level: 25,
  },
  {
    type: "HTML",
    level: 20,
  },
  {
    type: "NoSQL",
    level: 0,
  },
];

class TitlePage extends React.Component {
  render() {
    return (
      <div className="titlePage">
        <Image
          src="https://i.imgur.com/YAtGr4q.png"
          roundedCircle
          className="titleImage"
        />
        <h1>Michael Francisco</h1>
        <h2>IT Professional</h2>
      </div>
    );
  }
}

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>About Me</h1>
        <p>I am an IT Professional with a passion for programming.</p>
      </div>
    );
  }
}

class Education extends React.Component {
  render() {
    return (
      <div className="educationPage">
        <div className="leftColumn">
          <center>
            <Image
              src="https://www.mapua.edu.ph/About/Images/Mapua%20Logo-01-01.png"
              roundedCircle
              className="titleImage"
            />
            <h2>Mapua University</h2>
            <h3>(2013-2016)</h3>
            <h3>Computer Engineering Undergraduate</h3>
          </center>
        </div>
        <div className="rightColumn">
          <center>
            <Image
              src="https://upload.wikimedia.org/wikipedia/en/1/11/QCU_Logo_2019.png"
              roundedCircle
              className="titleImage"
            />
            <h2>Quezon City University</h2>
            <h3>(2017-2020)</h3>

            <h3>Information Technology Graduate</h3>
          </center>
        </div>
      </div>
    );
  }
}

class Work extends React.Component {
  render() {
    return (
      <div className="workPage">
        <center>
          <Image
            src="https://siva.jsstatic.com/ph/48941/images/logo/48941_logo_0_515661.jpg"
            roundedCircle
            className="workImage"
          />
          <h2>Alpa Plumbing Works Inc.</h2>
          <p>
            Worked with Alpa Plumbing Works Inc. for my on-the-job training.
            Developed an inventory system for the company using Visual Basic
            .NET. Responsible for maintaining and repairing IT hardware such as
            computer units and biometric devices, maintaining and updating the
            company database and troubleshooting common software issues.
          </p>
        </center>
      </div>
    );
  }
}

class Skills extends React.Component {
  render() {
    return (
      <div className="skillsPage">
        <h1>Skills</h1>
        <LazilyRender content={<SkillBar skills={skills} />} />{" "}
      </div>
    );
  }
}

const slides = [
  {
    id: 0,
    url: "https://i.imgur.com/BvK217B.png",
  },
  {
    id: 1,
    url: "https://i.imgur.com/RNBlXri.png",
  },
  {
    id: 2,
    url: "https://i.imgur.com/J2GrqnI.png",
  },
  {
    id: 3,
    url: "https://i.imgur.com/68yBcKE.jpeg",
  },
];

const LMS = () => {
  const [index, set] = useState(0);
  const transitions = useTransition(slides[index], (item) => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  });
  useEffect(
    () => void setInterval(() => set((state) => (state + 1) % 4), 2000),
    []
  );
  return transitions.map(({ item, props, key }) => (
    <animated.div
      key={key}
      className="bg"
      style={{
        ...props,
        backgroundImage: `url(${item.url})`,
      }}
    />
  ));
};

class LMSDescription extends React.Component {
  render() {
    return (
      <div className="lmsPage">
        <div className="centeredContent">
          <Image
            src="https://i.imgur.com/7KPiClN.jpg"
            roundedCircle
            className="workImage"
          />
          <h2>Logistics Management System for Fervar Ledesma Corporation</h2>
          <p>
            Tracks and monitors the movement of materials within the company.
            Features live-tracking of cargo using an android application and a
            digital scale using Arduino. Developed using C#, Java, MySQL, Google
            Cloud Platform and Firebase.
          </p>
        </div>
      </div>
    );
  }
}

class MIS extends React.Component {
  render() {
    return (
      <div>
        <h1>About Me</h1>
        <p>I am an IT Professional with a passion for programming. </p>
      </div>
    );
  }
}

class Web extends React.Component {
  render() {
    return (
      <div>
        <h1>About Me</h1>
        <p>I am an IT Professional with a passion for programming. </p>
      </div>
    );
  }
}
class ThankYou extends React.Component {
  render() {
    return (
      <div>
        <h1>About Me</h1>
        <p>I am an IT Professional with a passion for programming. </p>
      </div>
    );
  }
}

export {
  TitlePage,
  About,
  Education,
  Work,
  Skills,
  LMS,
  MIS,
  Web,
  ThankYou,
  LMSDescription,
};
