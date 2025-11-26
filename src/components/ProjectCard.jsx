import PropTypes from "prop-types";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
// import { motion } from "framer-motion";

const ProjectCard = (props) => {
  const handleCardClick = () => {
    if (props.preview) {
      window.open(props.preview, '_blank');
    }
  };
  return (
    <div
      className="tw-project-card relative flex flex-col w-full p-2.5 md:p-3 rounded-2xl overflow-hidden bg-[#1b1c1f] border border-white/10 shadow-[0_6px_18px_-4px_rgba(0,0,0,0.55)] hover:shadow-[0_14px_32px_-6px_rgba(0,0,0,0.6)] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer group"
      onClick={handleCardClick}
    >
      {/* Media on top */}
  <div className="relative w-full aspect-[16/9] mb-2.5 md:mb-3 overflow-hidden rounded-xl bg-[#111]">
        <img
          src={props.img}
          alt={props.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      {/* Text below image */}
      <div className="flex flex-col flex-grow">
        <h2 className="text-lg md:text-2xl font-semibold tracking-tight text-white mb-1 md:mb-2 group-hover:text-brandAccent transition-colors leading-snug">{props.name}</h2>
        <p className="text-sm md:text-[0.95rem] leading-relaxed text-gray-300 mb-2 md:mb-2.5 line-clamp-3">
          {props.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-2 md:mb-2.5">
          {props.stack && props.stack.map((tag, idx) => (
            <span key={idx} className="px-2 py-0.5 text-xs font-medium rounded-md bg-[#23232a] text-brandAccent border border-white/10">
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-2 pt-2.5 md:pt-3 border-t border-white/10 mt-auto">
          <div className="flex gap-2 md:gap-2.5 w-full">
            {props.sourceCode && (
              <a 
                href={props.sourceCode} 
                className="inline-flex flex-1 items-center justify-center gap-2 text-gray-300 hover:text-white transition-colors text-sm font-medium px-3 py-2 rounded-lg bg-[#23232a] border border-white/10 h-9"
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                title="View Source Code"
              >
                <FaGithub className="text-lg" />
                <span>Code</span>
              </a>
            )}
            {props.preview && (
              <a 
                href={props.preview} 
                className="inline-flex flex-1 items-center justify-center gap-2 text-gray-300 hover:text-white transition-colors text-sm font-medium px-3 py-2 rounded-lg bg-[#23232a] border border-white/10 h-9"
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                title="View Live Preview"
              >
                <FaExternalLinkAlt className="text-lg" />
                <span>Live</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stack: PropTypes.array,
  img: PropTypes.string,
  sourceCode: PropTypes.string,
  preview: PropTypes.string,
  creator: PropTypes.string,
};

export default ProjectCard;