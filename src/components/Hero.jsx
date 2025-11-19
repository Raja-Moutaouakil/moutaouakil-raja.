import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Heading from "./Heading";
import socials from "../content/socials";
import Typewriter from "typewriter-effect";

const Hero = (props) => {
  return (
    <section className="w-full flex flex-col justify-center items-center" style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="flex flex-col justify-center items-center w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center"
          style={{
            width: "280px",
            height: "280px",
            borderRadius: "50%",
            overflow: "hidden",
            boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
            border: "4px solid #fff",
            background: "linear-gradient(135deg, #232526 0%, #414345 100%)"
          }}
        >
          <img
            src={props.img}
            alt="Profile"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </motion.div>
      </div>
      <div className="mt-8 w-full flex flex-col items-center">
        <Heading firstWord="About" secondWord="Me" />
        <div className="mt-4 max-w-2xl text-center">
          <h3 className="text-2xl font-bold text-white mb-2">
            <Typewriter
              options={{
                strings: ["I am a Software Engineer", "I build modern web apps", "I love coding!"],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
          <p className="text-lg text-gray-300 mb-4">{props.description}</p>
        </div>
      </div>
      <div className="mt-4 flex gap-4 justify-center">
        {socials.map((social, idx) => (
          <a key={idx} href={social.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl">
            <img src={`/socials/${social.icon}`} alt="" style={{ width: "32px", height: "32px" }} />
          </a>
        ))}
      </div>
    </section>
  );
};
export default Hero;
Hero.propTypes = {
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};