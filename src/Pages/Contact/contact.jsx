import Navigation from "../../Components/Navigation/navigation";
import Footer from "../../Components/Footer/footer";
import '../Contact/contact.css';
import  { FiGithub } from "react-icons/fi";
import { SiLinkedin } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";
import { useEffect, useState } from 'react';

const Contact = () => {
  const [currentOption, setCurrentOption] = useState({});

  useEffect(() => {
    const options = [
      {
        name: 'Kayce Dutton',
        email: 'kayceDutton@TheYellowStone.com',
        subject: 'Wild horse consulting',
        message: 'The only thing I’ve got left is to make a future for my son. This is the only thing I’ve got to give him.'
      },
      {
        name: 'John Dutton',
        email: 'johnDutton@TheYellowStone.com',
        subject: 'The yellowstone',
        message: 'You want to be me someday? Then become something that can help me protect this place'
      },
      {
        name: 'Rip Wheeler',
        email: 'ripWheeler@TheYellowStone.com',
        subject: 'Cowboys wanted',
        message: 'Hey! You! Where’d you learn to cowboy?'
      },
      {
        name: 'Beth Dutton',
        email: 'bethDutton@TheYellowStone.com',
        subject: 'Real estate purchasing consulting',
        message: 'No one wants to merge with you. You have a three-to-one debt ratio. It’d be easier to sell VCRs.'
      }
    ]
    const randomOption = options[Math.floor((Math.random()*options.length))]
    setCurrentOption(randomOption)
  }, [])

  return (
    <>
      <Navigation />
      <div className="contact-column">
        <div className="top-item">
          <h1>Connect with me!</h1>
        </div>
        <div className="contact-icons">
          <a
            className="github"
            href="https://github.com/JordyPena"
            target="_blank"
            rel='noreferrer noopener'
          >
            <FiGithub size={50} />
          </a>

          <a
            className="linkedin"
            href="https://www.linkedin.com/in/jordypenadev/"
            target="_blank"
            rel='noreferrer noopener'
          >
            <SiLinkedin size={50} />
          </a>

          <a
            className="email"
            href="mailto:jordypenamontes@gmail.com"
            target="_blank"
            rel='noreferrer noopener'
          >
            <AiOutlineMail size={50} />
          </a>
        </div>

        <div className="bottom-item">
          <form
            className="contact-form"
            action="https://formspree.io/mgenndrq"
            method="POST"
          >
            <label htmlFor="user-name">Name</label>
            <input
              placeholder={currentOption.name}
              className="user-name"
              type="text"
              name="name"
              required
            />
            <label htmlFor="email-input">Email</label>
            <input
              placeholder={currentOption.email}
              className="email-input"
              type="text"
              name="email"
              required
            />
            <label htmlFor="subject">Subject</label>
            <input
              placeholder={currentOption.subject}
              className="subject"
              type="text"
              name="email"
              required
            />
            <label htmlFor="message">Message</label>
            <textarea
              placeholder={currentOption.message}
              className="message"
              name="message"
              required
            ></textarea>
            <button className="contact-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Contact;
