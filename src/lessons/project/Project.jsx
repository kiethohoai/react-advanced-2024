import Login from "./Login"
import './Project.scss';
import Lesson25 from "./chapter3/Lesson25";
import 'nprogress/nprogress.css';

const Project = (props) => {
    return (
        <div className="project">
            <Login />
            <Lesson25 />

        </div>
    )
}

export default Project;