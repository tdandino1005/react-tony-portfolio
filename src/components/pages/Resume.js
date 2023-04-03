import React from 'react';
import ResumeTonyDandino from '../../pdf/Tony_Dandino_Resume.pdf';


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
        <a style={styles.link} href={ResumeTonyDandino} download>
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
        (04/2011 – 4/2023)
        <ul>
          <li>
            Responsible for the overall management of the hotel, including all operations and restaurants.
          </li>
          <li>
            Creates
          </li>
          <li>
            Designed and implemented over 50 technology classes for library
            patrons, resulting in an increase in digital literacy skills among
            attendees.
          </li>
          <li>
            Provided personalized reference services to patrons at the Info Desk
            to determine their information needs and deliver tailored solutions,
            promoting the use of library resources and technology.
          </li>
        </ul>
      </p>
      <p>
        <h4>Library Assistant – Cataloging</h4>
        <h5>Whitman College, Walla Walla, WA</h5>
        (6/2014- 4/2016)
        <ul>
          <li>
            Improved the accessibility and organization of library materials by
            cataloging over 13,000 items in the III and Alma Database using copy
            and original cataloging methods.
          </li>
          <li>
            Played an integral role in the supervision and professional
            development of a team of three student workers, providing guidance
            and support to ensure the success of both the workers and the
            library.
          </li>
          <li>
            Conducted a comprehensive weeding project of the government
            documents collection, removing outdated and irrelevant materials and
            making space for other collections.
          </li>
        </ul>
      </p>
      <p>
        <h4>Library Assistant</h4>
        <h5>Whitman County Library, Colfax, WA</h5>
        (5/2008 - 5/2014)
        <ul>
          <li>
            Improved the accessibility and organization of library materials by
            cataloging over 5,000 items in the Horizon Database using copy and
            original cataloging methods.
          </li>
          <li>
            Managed a collection of over 5,000 popular movies, music, and
            eBooks, ensuring timely acquisition and removal of materials to keep
            the collection up-to-date and relevant for library users.
          </li>
          <li>
            Designed and implemented over 30 technology classes for library
            patrons, resulting in an increase in digital literacy skills among
            attendees.
          </li>
          <li>
            Provided personalized reference services to patrons at the reference
            and circulation desk to determine their information needs and
            deliver tailored solutions, promoting the use of library resources
            and technology.
          </li>
        </ul>
      </p>
      <h3 style={styles.h3}>Education</h3>
      <p>
        <h4>Coding Bootcamp Certificate of Completion (2/2023)</h4>
        University of Washington Professional & Continuing Education, Seattle,
        WA
      </p>
      <p>
        <h4>Master of Library and Information Science (5/2014)</h4>
        San José State University, San José, CA
      </p>
      <p>
        <h4>Bachelor of Arts in Literature (3/2008)</h4>
        The Evergreen State College, Olympia, WA
      </p>
    </div>
  );
}