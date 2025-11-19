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
    <div className="project-card cursor-pointer" onClick={handleCardClick}>
      <div className="project-img" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '220px', background: 'linear-gradient(135deg, #212529 60%, #fa3939 100%)', borderRadius: '15px', overflow: 'hidden', marginBottom: '20px'}}>
        <img 
          src={props.img} 
          alt={props.name} 
          style={{
            width: '90%',
            height: '180px',
            objectFit: 'cover',
            borderRadius: '12px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.15)'
          }} 
        />
      </div>
      <div className="project-title">
        <h2>{props.name}</h2>
      </div>
      <div className="project-description">
        <p>{props.description}</p>
      </div>
      <div className="project-tags">
        {props.stack && props.stack.map((tag, idx) => (
          <span key={idx} className="bg-red-200 text-red-800 px-2 py-1 rounded mr-2 text-xs">{tag}</span>
        ))}
      </div>
      <div className="project-links">
        {props.sourceCode && (
          <div>
            <a href={props.sourceCode} className="github" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href={props.preview} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt />
            </a>
          </div>
        )}
      </div>
      <div className="project-creator text-center mt-2 text-xs text-gray-400">
        {props.creator}
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stack: PropTypes.array,
  img: PropTypes.string,
  source: PropTypes.string,
  preview: PropTypes.string,
};

export default ProjectCard;