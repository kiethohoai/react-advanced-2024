import Login from "./Login"
import './Project.scss';
import Lesson24 from "./chapter3/Lesson24";
// import 'nprogress/nprogress.css';

const Project = (props) => {
    return (
        <div className="project">
            <Login />
            <Lesson24 />

        </div>
    )
}

export default Project;