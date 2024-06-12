import Login from "./Login"
import './Project.scss';
import "nprogress/nprogress.css";
import Lesson36 from "./chapter4/lesson36/Lesson36";

const Project = (props) => {
  return (
    <div className="project">
      <Login /> <br />
      <Lesson36 />
    </div>
  );
};

export default Project;