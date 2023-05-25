import { Col } from "react-bootstrap";
import { ReactComponent as GithubIcon } from "../assets/img/nav-icon2.svg";

export const ProjectCard = ({ title, description, imgUrl, repoUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="proj-url">
          <a href={repoUrl} target="_blank" rel="noopener noreferrer">
            <GithubIcon className="github-icon" /> 
          </a>
          </div>
          
        </div>
      </div>
    </Col>
  )
}
