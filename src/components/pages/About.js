import React from 'react';
import Tonypicture from '../../img/Tonypicture.jpg';

const styles = {
  Tonypicture: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: '50%',
    maxHeight: '100%',
    maxWidth: '100%',
    border: '5px solid #0000FF',
    cursor: 'default',

  },
  space: {
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
  },
  h2: {
    textAlign: 'center',
  },
};


export default function About() {
  return (
    <div style={styles.space}>
      <h2 style={styles.h2}>About Me</h2>
      <div>
        <img style={styles.Tonypicture} src={Tonypicture} alt="Tony Dandino" />
      </div>
      <p>
        My name is Tony Dandino and I have been working in the hospitality industry for 20 years.
      </p>
      <p>
          I am hard working and dedicated to my job and I am looking to change careers to something that I am more passionate about.
      </p>
      <p>
    I have always been interested in web stack development and am taking this course to learn and further my knowledge and career.
      </p>
      <p>
        I hope to get a job as a web developer or software engineer after this course to work on creating projects that I am interested in.
      </p>
    </div>
  );  
}
