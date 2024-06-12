import Login from "./Login"
import './Project.scss';
import "nprogress/nprogress.css";
import Timer from "./chapter4/lesson29/Timer";
import Lesson30 from "./chapter4/lesson30/Lesson30";

const Project = (props) => {
  return (
    <div className="project">
      {/* <Login /> */}
      <Lesson30 />
    </div>
  );
};

export default Project;