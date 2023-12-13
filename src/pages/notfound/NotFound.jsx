import React from 'react';
import './NotFound.css';
import {Link} from "react-router-dom";


function NotFound(){
    return (
        <main className="page-container">
            <h1>Ooops.....The page you are looking for does not exist</h1>
            <p>Take me back to the <Link to="/"> home page.</Link></p>
        </main>
    );
}

export default NotFound;