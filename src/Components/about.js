import * as React from 'react';
import { useState } from 'react';
import { makeStyles, Button } from "@fluentui/react-components";
import { AppsList24Regular, ArrowCircleRight48Filled } from "@fluentui/react-icons";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
  },
  btn: { 
    marginTop: "10px",  
    display: "flex",
    justifyContent: "center"
  }
});

function About() {
  const styles = useStyles();
  const [popupVisible, setPopupVisible] = useState(false);


 
  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className="about-section">
          <h2>About Us</h2>
          <div className="para">
            <p>
              As one of the global digital solutions companies, Ensar serves leading enterprises across industries, offering them tailored, domain-specific IT solutions and services. Our Industry IT Solutions have been developed keeping in mind the unique challenges of every business line
              Ensar is a Chicago based global digital agency and innovation firm that serves a world-class and diverse client base. With a decade of experience delivering success and a global team of 100+ practitioners, that focus on IoT, AI, Web, Mobile, Cloud, and Security solutions.
            </p>
            <div className={styles.btn}>
            <Button appearance="primary" icon={<AppsList24Regular/>}  onClick={openPopup}>More Info</Button>
            </div>
          </div>
        </div>
      </div>

      {popupVisible && (
        <div className="popup-background" >
          <div className="popup-content" >
            <h2>More Information</h2>
            <p>
              Ensar is a Chicago based global digital agency and innovation firm that serves a world-class and diverse client base. With a decade of experience delivering
               success and a global team of 100+ practitioners, that focus on IoT, AI, Web, Mobile, Cloud, and Security solutions.
            </p>
            <Button icon={<ArrowCircleRight48Filled />} appearance="primary" className={styles.btn} onClick={closePopup}>Close</Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default About;
