import { useState } from "react";
import "./User.scss";

const User = (props) => {
    const { data } = props;
    const [show, setShow] = useState(true);
    const [isShowImage, setIsShowImage] = useState(true);

    return (
        <div className="detail-user">
            <div className="user-id">ID: {data && data.id}</div>
            <div className="user-username">Username: {data && data.username}</div>

            {isShowImage && isShowImage === true && <div className="user-image">
                <img
                    src={`data:image/png;base64,${data.image}`}
                    alt="user-image"
                />
            </div>}

            <div className="user-button">
                <button onClick={() => setIsShowImage(!isShowImage)}>Hide/Show Images</button>
            </div>
        </div>
    );
};

export default User;
