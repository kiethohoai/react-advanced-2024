import Login from "./Login"
import './Project.scss';
import "nprogress/nprogress.css";
import Lesson34 from "./chapter4/lesson34/Lesson34";
import Lesson331 from "./chapter4/lesson33/Lesson331";

const Project = (props) => {
  return (
    <div className="project">
      {/* <Login /> */}
      <Lesson331 />
    </div>
  );
};

export default Project;