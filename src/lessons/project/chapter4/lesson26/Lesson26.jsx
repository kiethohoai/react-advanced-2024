import './Lesson26.scss'
import Homework26 from './Homework26';
import { useState } from 'react';

const Lesson26 = (props) => {


    return (
        <div>
            <p>Lesson 26: State is isolated and private</p>
            <div>
                <button onClick={() => setIsShowImage(!isShowImage)}>Show/Hide All Image</button>
            </div>
            <Homework26 />
        </div>
    )
}

export default Lesson26;