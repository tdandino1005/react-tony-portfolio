import React from 'react';
import ResumeAnthonyDandino from '../../pdf/Anthony_Dandino_Resume.PDF';


const styles = {
  h2: {
    textAlign: "center",
  },
  link: {
    color: "#0000FF",
  },
  space: {
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
  },
  h3: {
    paddingTop: "0.75rem",
  },
};

export default function Resume() {
  return (
    <div style={styles.space}>
      <h2 style={styles.h2}>Resume</h2>
      <p style={styles.h2}>
        <a style={styles.link} href={ResumeAnthonyDandino} download>
          Download Full Resume
        </a>
      </p>
      <h3 style={styles.h3}>Technical Proficiencies</h3>
      <p>
        <h4>Proficiencies for Full Stack Development</h4>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>JQuery</li>
          <li>Bootstrap</li>
          <li>React</li>
          <li>Object-Oriented Programming</li>
          <li>MySQL</li>
          <li>Sequelize</li>
          <li>MongoDB</li>
          <li>Model-View-Controller</li>
          <li>Express</li>
          <li>Node</li>
          <li>React</li>
          <li>MERN</li>
        </ul>
      </p>
      <h3 style={styles.h3}>Work Experience</h3>
      <p>
        <h4>General Manager for Cheshire Hotel</h4>
        <h5>St. Louis, Mo 63117</h5>
        (04/2012 – 4/2023)
        <ul>
          <li>
            Responsible for the overall management of the hotel, including all operations and restaurants.
          </li>
          <li>
            Creates overall performance and development
          </li>
          <li>
            Creates a postive work envirnonment which thrives on teamwork and being productive while maintaining costs
          </li>
          <li>
            Manages all sales records, conrollable expesnes and cost items affecting the profibility of the hotel
          </li>
        </ul>
      </p>
      <p>
        <h4>Food and Beverage Director</h4>
        <h5>Hilton St. Louis Airport</h5>
        (1/2010 - 4/2012)
        <ul>
          <li>
            Ensured guest  service standards through prompt, efficient, and friendly service.
          </li>
          <li>
            Coordinated Standard Operation Procedures to departments to ensure proceses and workflow.
          </li>
          <li>
            Operated department within budget for food, beverage, labor, and controllable expenses.
          </li>
          <li>
            Led and executed all company initiatives ensuring sales and profibility goals were executed.
          </li>
        </ul>
      </p>
    </div>
  );
}