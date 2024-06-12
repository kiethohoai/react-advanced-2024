import Login from "./Login"
import './Project.scss';
import "nprogress/nprogress.css";
import Lesson32 from "./chapter4/lesson32/Lesson32";

const Project = (props) => {
  return (
    <div className="project">
      {/* <Login /> */}
      <Lesson32 />
    </div>
  );
};

export default Project;