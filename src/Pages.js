import React, { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
import SkillBar from "react-skills-bars";
import LazilyRender from "react-lazily-render";
import { useTransition, animated, config } from "react-spring";
import Style from "./Pages.css";

const lmsSlides = [
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
    url: "https://i.imgur.com/q60Ma3B.jpg",
  },
  {
    id: 3,
    url: "https://i.imgur.com/RKlrnVR.png",
  },
];

const misSlides = [
  {
    id: 0,
    url: "https://i.imgur.com/UJbM5hZ.jpg",
  },
  {
    id: 1,
    url: "https://i.imgur.com/c6MitAQ.png",
  },
  {
    id: 2,
    url: "https://i.imgur.com/jrgfbfS.png",
  },
];

const skills = [
  {
    type: ".NET",
    level: 75,
  },
  {
    type: "Web Development",
    level: 50,
  },
  {
    type: "Git",
    level: 50,
  },
  {
    type: "Android",
    level: 25,
  },
  {
    type: "Data Analytics",
    level: 50,
  },
  {
    type: "Database Management",
    level: 75,
  },
  {
    type: "Cloud Technology",
    level: 25,
  },
  {
    type: "Hardware",
    level: 75,
  },
  {
    type: "Teamwork",
    level: 100,
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
        <div className="centeredContent">
          <h1>About Me</h1>
          <p>
            I am an IT Professional with a passion for programming. My hobbies
            include Gaming, Judo and Working out. A fresh graduate with
            outstanding grades looking for career oppurtunities in the IT
            industry. A man of focus, commitment and sheer will.
          </p>
        </div>
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

const LMS = () => {
  const [index, set] = useState(0);
  const transitions = useTransition(lmsSlides[index], (item) => item.id, {
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

const MIS = () => {
  const [index, set] = useState(0);
  const transitions = useTransition(misSlides[index], (item) => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses,
  });
  useEffect(
    () => void setInterval(() => set((state) => (state + 1) % 3), 2000),
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

class MISDescription extends React.Component {
  render() {
    return (
      <div className="misPage">
        <div className="centeredContent">
          <Image
            src="https://1000logos.net/wp-content/uploads/2019/03/PNP-Logo.png"
            roundedCircle
            className="misImage"
          />
          <h2>Management Information System for Novaliches Police Station 4</h2>
          <p>
            Manages police records such as jail visits, criminal records and
            stolen vehicle reports. Developed using C#, MySQL and WPF with
            Microsoft PowerBI for the dashboard. Uses the MVVM framework.
          </p>
        </div>
      </div>
    );
  }
}

class Web extends React.Component {
  render() {
    return (
      <div>
        <h1>Web Development</h1>
        <div className="webPage">
          <Image
            src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"
            className="webLogo"
          />
          <Image
            src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png"
            className="webLogo"
          />
          <Image
            src="https://impact-hr.com/wp-content/uploads/2017/04/javascript_round.png"
            className="webLogo"
          />
          <Image
            src="https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png"
            className="webLogo"
          />
        </div>
      </div>
    );
  }
}
class ThankYou extends React.Component {
  render() {
    return (
      <div>
        <h1>Thank you!</h1>
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
  LMSDescription,
  MIS,
  MISDescription,
  Web,
  ThankYou,
};
