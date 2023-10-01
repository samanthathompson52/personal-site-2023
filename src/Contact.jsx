import resumeIcon from './images/resume-icon.png';
import emailIcon from './images/email-icon.png';
import linkedinIcon from './images/linkedin-icon.png';
import githubIcon from './images/github-circle-icon.png';

const Contact = () => {
  return (
      <div id= "contact" className = "bg-mainlight md:p-20 p-10 mb-20 align-top">
          <div className = "text-center">   
            <h1 className = "md:text-5xl text-4xl bold">Get in Touch</h1>
            <div className = "flex justify-center pt-3">
              <div className = "m-2">
                <a href = "/Resume.pdf" target="_blank"><img src={resumeIcon} className = "icon" alt="Resume icon"></img></a>
                <p>Resume</p>
              </div>
              <div className = "m-2">
                <a href="mailto:samanthaThompson521@gmail.com" target="_blank"><img src={emailIcon} className = "icon" alt="Email icon"></img></a>
                <p>Email</p>
              </div>
              <div className = "m-2">
                <a href="https://www.linkedin.com/in/sammie-thompson/" target="_blank"><img src={linkedinIcon} className = "icon" alt="LinkedIn icon"></img></a>
                <p>LinkedIn</p>
              </div>
              <div className = "m-2">
                <a href="https://github.com/samanthathompson52" target="_blank"><img src={githubIcon} className = "icon" alt="Github icon"></img></a>
                <p>Github</p>
              </div>
            </div>
          </div>
      </div> 
  );
}

export default Contact;
