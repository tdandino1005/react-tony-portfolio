import React from 'react';
import codequiz from '../../img/codequiz.png';
import FoodFinder from '../../img/FoodFinder.png';
import Notetaker from '../../img/Notetaker.png';
import Winevybe from '../../img/Winevybe.png';
import EmployeeTracker from '../../img/EmployeeTracker.png';
import PWA from '../../img/PWA.png';

import "../../style/portfolio.css";

const styles = {
  h2: {
    textAlign: "center",
  },
  space: {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
  },
  header: {
    textAlign: "center",
    paddingBottom: "0.15rem",
  },
  repo: {
    textAlign: "center",
    color: "#0000FF",
    paddingBottom: "0.15rem",
  },
};

export default function Portfolio() {
  return (
    <div>
      <h2 style={styles.h2}>Portfolio</h2>
      <div className="container">
        <div className="row justify-content-center">
          <section className="card col-sm-3 p-0 m-2">
            <a
              href="https://tdandino1005.github.io/Dandino-code-quiz/"
              target="blank"
            >
              <img
                className="card-img-top"
                src={codequiz}
                alt="screenshot of code quiz"
              />
              <header>
                <h3 style={styles.header}>codequiz</h3>
              </header>
            </a>
            <a
              style={styles.repo}
              href="https://github.com/tdandino1005/Dandino-code-quiz"
              target="blank"
            >
              GitHub Repository
            </a>
            <p style={styles.space}>
            This is a quiz application using HTML, CSS, and Javascript. This application emphasizes the use of Javascript to provide quiz questions and collect user data to determine whether the answers to a question are correct, this then generates a score and appends a final page of results from the user data.This is a quiz application using HTML, CSS, and Javascript. This application emphasizes the use of Javascript to provide quiz questions and collect user data to determine whether the answers to a question are correct, this then generates a score and appends a final page of results from the user data.
            </p>
          </section>

          <section className="card col-sm-3 p-0 m-2">
            <a
              href="https://user-images.githubusercontent.com/114967217/226239410-18da0eca-7fa5-4b74-863e-b9759d0aa259.mp4"
              target="blank"
            >
              <img
                className="card-img-top"
                src={EmployeeTracker}
                alt="Screenshot of employee tracker"
              />
              <header>
                <h3 style={styles.header}>Employee Tracker</h3>
              </header>
            </a>
            <a
              style={styles.repo}
              href="https://github.com/tdandino1005/hotel-employee-tracker"
              target="blank"
            >
              GitHub Repository
            </a>
            <p style={styles.space}>
            This is an hotel employee database for managing's a system's database.
            </p>
          </section>

          <section className="card col-sm-3 p-0 m-2">
            <a
              href="https://63857389528963204b4dc037--startling-biscuit-4e7633.netlify.app/"
              target="blank"
            >
              <img
                className="card-img-top"
                src={FoodFinder}
                alt="Screenshot of Food Finder"
              />
              <header>
                <h3 style={styles.header}>FoodFinder</h3>
              </header>
            </a>
            <a
              style={styles.repo}
              href="https://github.com/eabaynes/Food-Finder"
              target="blank"
            >
              GitHub Repository
            </a>
            <p style={styles.space}>
            Food finder is a simple way to find restaurants that offer delivery near you! 
            The application will display restaurant names, cuisine type, price range, rating, and phone number to find the perfect quick meal solution.
            As our first group project, we learned how to use branches to work on multiple issues as a team.
            </p>
          </section>
        </div>

        <div className="row justify-content-center">
          <section className="card col-sm-3 p-0 m-2">
            <a
              href="https://note-taker-td.herokuapp.com/"
              target="blank"
            >
              <img
                className="card-img-top"
                src={Notetaker}
                alt="Screenshot of notetaker"
              />
              <header>
                <h3 style={styles.header}>Notetaker</h3>
              </header>
            </a>
            <a
              style={styles.repo}
              href="https://github.com/tdandino1005/Notetaker-TD"
              target="blank"
            >
              GitHub Repository
            </a>
            <p style={styles.space}>
            This is a Note-taking app designed to test the developer's ability to implement back-end code to a pre-existing front-end codebase, and show off their Express.js and Heroku deployment skills.
            </p>
          </section>

          <section className="card col-sm-3 p-0 m-2">
            <a
              href="https://winevybe.herokuapp.com/"
              target="blank"
            >
              <img
                className="card-img-top"
                src={Winevybe}
                alt="Screenshot of Winevybe"
              />
              <header>
                <h3 style={styles.header}>Winevybe</h3>
              </header>
            </a>
            <a
              style={styles.repo}
              href="https://github.com/JoeBosz/WineVybes"
              target="blank"
            >
              GitHub Repository
            </a>
            <p style={styles.space}>
            This application is designed to create a space for wine collectors to come together and create a profile. 
            They will be able to keep tabs and update their wine collection as they expand their inventory and pallets.
            </p>
          </section>

          <section className="card col-sm-3 p-0 m-2">
            <a
              href="https://serene-fjord-47597.herokuapp.com/"
              target="blank"
            >
              <img
                className="card-img-top"
                src={PWA}
                alt="Screenshot of text editor"
              />
              <header>
                <h3 style={styles.header}>PWA text editor</h3>
              </header>
            </a>
            <a
              style={styles.repo}
              href="https://github.com/tdandino1005/PWA-text-editor"
              target="blank"
            >
              GitHub Repository
            </a>
            <p style={styles.space}>
            This application takes an existing text editor app and adds functionality for it to work as a PWA and function offline. 
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}