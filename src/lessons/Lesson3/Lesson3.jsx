import { useState } from "react";
import CoolButton from "./CoolButton";

const Lesson3 = (props) => {
    const [name, setName] = useState();
    return (
        <div>
            <label>Name:</label>
            <input type={'text'}
                value={name}
                onChange={(e) => setName(e.target.value)} />
            <div>Your name 's {name} </div>
            <CoolButton btnClass="primary" title="Primary" />
            <CoolButton btnClass="danger" title="Danger" />
        </div>
    )
}

export default Lesson3;