import Login from "./Login"
import './Project.scss';
import "nprogress/nprogress.css";
import Lesson33 from "./chapter4/lesson33/Lesson33";

const Project = (props) => {
  return (
    <div className="project">
      {/* <Login /> */}
      <Lesson33 />
    </div>
  );
};

export default Project;