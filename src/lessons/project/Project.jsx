import Login from "./Login"
import './Project.scss';
import "nprogress/nprogress.css";
import Timer from "./chapter4/lesson29/Timer";
// import Lesson30 from "./chapter4/lesson30/Lesson30";
import Lesson28 from "./chapter4/lesson28/Lesson28";

const Project = (props) => {
  return (
    <div className="project">
      {/* <Login /> */}
      <Lesson28 />
    </div>
  );
};

export default Project;