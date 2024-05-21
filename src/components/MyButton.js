import React from "react"
import { Link } from 'react-router-dom';
import '../styles/style.css';

const MyButton = ({text, link}) => {

    return (
        <Link to={link} className="text-white my-btn px-5">{text}</Link>
    )
}

export default MyButton;