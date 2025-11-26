
import PropTypes from "prop-types";
import socials from "../content/socials";
import userData from "../content/information";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

// Small helper components for cleaner JSX
const RoleBadges = () => {
  const roles = ["Software Engineer", "AI Enthusiast", "Problem Solver"];
  return (
    <ul className="flex flex-wrap gap-2 mt-4" aria-label="Roles list">
      {roles.map((r) => (
        <li
          key={r}
          className="text-xs md:text-sm tracking-wide uppercase px-3 py-1 rounded-full bg-gradient-to-r from-gray-800/80 to-gray-900/80 border border-white/10 shadow-inner backdrop-blur-sm text-gray-200"
        >
          {r}
        </li>
      ))}
    </ul>
  );
};

const CTAButtons = () => (
  <div className="flex flex-wrap gap-4 mt-8" aria-label="Primary actions">
    <a
      href="#projects"
      className="group relative inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl overflow-hidden bg-gradient-to-r from-red-500 to-red-400 text-white shadow-[0_8px_24px_-6px_rgba(250,57,57,0.45)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400 hover:shadow-[0_8px_32px_-4px_rgba(250,57,57,0.6)] transition"
    >
      <span className="relative z-10">View Projects</span>
      <span className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 opacity-0 group-hover:opacity-100 transition" />
    </a>
    <a
      href="#contact"
      className="group relative inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl overflow-hidden bg-gray-800 text-gray-100 border border-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:bg-gray-700 transition"
    >
      <span className="relative z-10">Contact Me</span>
    </a>
  </div>
);

const SocialRow = () => (
  <div className="flex gap-3 mt-6" aria-label="Social links">
    {socials.map((social, idx) => (
      <a
        key={`${social.url || social.name}-${idx}`}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={social.name}
        title={social.name}
        className="p-2 rounded-lg bg-gray-800/60 border border-white/10 backdrop-blur-sm hover:border-red-400 hover:text-white transition group"
      >
        <img
          src={`/socials/${social.icon}`}
          alt={social.name}
          className="w-6 h-6 opacity-80 group-hover:opacity-100"
        />
      </a>
    ))}
  </div>
);

const Hero = ({ img, description }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.25 } }
  };
  const fadeSlideUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  };
  const fadeSlideRight = {
    hidden: { opacity: 0, x: -28 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  };

  const roles = ["Software Engineer", "AI Enthusiast", "Problem Solver", "Clean Code Advocate"];

  return (
    <motion.section
      id="about"
      initial="hidden"
      animate="visible"
      variants={container}
      className="relative w-full flex items-center justify-center px-6 pt-16 pb-24 md:pt-20 md:pb-28 overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black transition-colors" aria-hidden="true" />
      <div className="absolute -top-32 -left-32 w-72 h-72 rounded-full bg-brand/10 blur-3xl" aria-hidden="true" />
      <div className="absolute -bottom-32 -right-32 w-72 h-72 rounded-full bg-brandAccent/10 blur-3xl" aria-hidden="true" />

      <motion.div variants={fadeSlideUp} className="relative w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
        {/* Left: Text content */}
        <motion.div variants={fadeSlideRight} className="flex flex-col">
          <h1
            id="about-heading"
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            <span className="inline-block bg-gradient-to-r from-brand to-brandAccent bg-clip-text text-transparent">
              &lt;About Me/&gt;
            </span>
          </h1>
          <div className="mt-4 text-brandAccent/90 text-sm md:text-base font-mono tracking-wider h-6" aria-live="polite">
            <Typewriter
              options={{
                strings: roles,
                autoStart: true,
                loop: true,
                deleteSpeed: 40,
              }}
            />
          </div>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-300 max-w-xl">
            {description || userData.description}
          </p>
          <RoleBadges />
          <CTAButtons />
          <SocialRow />
        </motion.div>

        {/* Right: Profile / avatar */}
        <motion.div variants={fadeSlideUp} className="flex justify-center md:justify-end">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-brand via-brandAccent to-brand opacity-30 group-hover:opacity-50 blur-lg transition" aria-hidden="true" />
            <div className="relative w-64 h-80 md:w-72 md:h-[22rem] rounded-3xl overflow-hidden border border-white/10 shadow-brand-glow bg-gray-900/40 backdrop-blur-md">
              <img
                src={img}
                alt={`Profile portrait of ${userData.firstName} ${userData.lastName}`}
                className="w-full h-full object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" aria-hidden="true" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

Hero.propTypes = {
  img: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default Hero;