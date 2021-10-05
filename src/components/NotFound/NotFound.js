import React from 'react';
import { Link } from 'react-router-dom';

const styles={
    position:"absolute",
    // top:"10px"
    bottom:"-12%",
    right:"50%",
    transform:"translate(50%)",
    padding:" 7px 27px",
    backgroundColor:"lightgreen",
    border:"none",
    borerRadius:"5px"
}
const NotFound = () => {
    return (
        <div>
            <img src="./images/404.gif" alt="" />
        <Link to="/home">
            <button style={styles}>GO BACK</button>
        </Link>
        </div>
    );
};

export default NotFound;