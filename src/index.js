import React from "react";
import ReactDOM from "react-dom";
import Parallax from "react-springy-parallax";
import {
  TitlePage,
  About,
  Education,
  Work,
  Skills,
  LMS,
  LMSDescription,
  MIS,
  Web,
  ThankYou,
} from "./Pages";

const styles = {
  fontFamily: "Menlo-Regular, Menlo, monospace",
  fontSize: 14,
  lineHeight: "10px",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

class App extends React.Component {
  render() {
    return (
      <Parallax horizontal ref="parallax" pages={9}>
        {/* Title page */}
        <Parallax.Layer
          offset={0}
          speed={1}
          style={styles}
          style={{ backgroundColor: "black" }}
        />
        {/* About Me */}
        <Parallax.Layer
          offset={1}
          speed={1}
          style={styles}
          style={{ backgroundColor: "#805E73" }}
        />
        {/* Education */}
        <Parallax.Layer
          offset={2}
          speed={1}
          style={styles}
          style={{ backgroundColor: "#87BCDE" }}
        />
        {/* Work */}
        <Parallax.Layer
          offset={3}
          speed={1}
          style={styles}
          style={{ backgroundColor: "#010560" }}
        />
        {/* Skills */}
        <Parallax.Layer
          offset={4}
          speed={1}
          style={styles}
          style={{ backgroundColor: "#87BCDE" }}
        />
        {/* LMS */}
        <Parallax.Layer
          offset={5}
          speed={1}
          style={styles}
          style={{ backgroundColor: "#e5fdfd" }}
        />
        {/* MIS */}
        <Parallax.Layer
          offset={6}
          speed={1}
          style={styles}
          style={{ backgroundColor: "#87BCDE" }}
        />
        {/* Web */}
        <Parallax.Layer
          offset={7}
          speed={1}
          style={styles}
          style={{ backgroundColor: "#87BCDE" }}
        />
        {/* Thank You */}
        <Parallax.Layer
          offset={8}
          speed={1}
          style={styles}
          style={{ backgroundColor: "#87BCDE" }}
        />

        <Parallax.Layer
          offset={0}
          speed={1}
          style={styles}
          onClick={() => this.refs.parallax.scrollTo(1)}
        >
          <TitlePage />
        </Parallax.Layer>

        <Parallax.Layer
          offset={1}
          speed={1}
          style={styles}
          onClick={() => this.refs.parallax.scrollTo(2)}
        >
          <About />
        </Parallax.Layer>

        <Parallax.Layer
          offset={2}
          speed={1}
          style={styles}
          onClick={() => this.refs.parallax.scrollTo(3)}
        >
          <Education />
        </Parallax.Layer>
        <Parallax.Layer
          offset={3}
          speed={1}
          style={styles}
          onClick={() => this.refs.parallax.scrollTo(4)}
        >
          <Work />
        </Parallax.Layer>
        <Parallax.Layer
          offset={4}
          speed={1}
          style={styles}
          onClick={() => this.refs.parallax.scrollTo(5)}
        >
          <Skills />
        </Parallax.Layer>
        <Parallax.Layer
          offset={5}
          speed={1}
          style={styles}
          onClick={() => this.refs.parallax.scrollTo(6)}
        >
          <LMSDescription />
          <LMS />
        </Parallax.Layer>
        <Parallax.Layer
          offset={6}
          speed={1}
          style={styles}
          onClick={() => this.refs.parallax.scrollTo(7)}
        >
          <MIS />
        </Parallax.Layer>
        <Parallax.Layer
          offset={7}
          speed={1}
          style={styles}
          onClick={() => this.refs.parallax.scrollTo(8)}
        >
          <Web />
        </Parallax.Layer>
        <Parallax.Layer
          offset={8}
          speed={1}
          style={styles}
          onClick={() => this.refs.parallax.scrollTo(0)}
        >
          <ThankYou />
        </Parallax.Layer>
      </Parallax>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
