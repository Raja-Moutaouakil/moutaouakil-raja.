import socials from "../content/socials";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

const ContactForm = () => {
  return (
    <div className="contact-section">
      <div className="contact-info">
        <h1>Let&apos;s talk about everything!</h1>
        <p>
          Don&apos;t like forms? Send me an{" "}
          <a href="mailto:rajaemoutaouakil362@gmail.com">email</a>. 👋
        </p>
        <h3>Or find me on:</h3>
        <div className="hero-socials" aria-label="Contact social links">
          {socials.map((social, index) => (
            <a
              key={`${social.url || social.name}-${index}`}
              href={social.url}
              aria-label={social.name}
              title={social.name}
            >
              <img src={`/socials/${social.icon}`} alt={social.name} />
            </a>
          ))}
        </div>
        <div>
          <p className="contact-links">
            <MdEmail />
            rajaemoutaouakil362@gmail.com
          </p>
          <br />
          <p className="contact-links">
            <FaPhoneAlt />
           
          </p>
          <br />
          <p className="contact-links">
            <IoLocation />
            Morocco
          </p>
          <br />
        </div>
      </div>
      <div className="contact-form">
        <form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <input
            type="text"
            name="senderName"
            placeholder="Your Name"
            required
          />
          <input type="text" name="senderEmail" placeholder="Email" required />
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea
            placeholder="Your Message"
            name="message"
            required
          ></textarea>
          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;