import './NotFound.css';
import {Link} from "react-router-dom";


function NotFound() {
    return (
        <main className="page-container">
            <article>
                <h1>Ooops.....The page you are looking for does not exist</h1>
                <p>Take me back to the <Link to="/" className="inline-link"> home page.</Link></p>
            </article>
        </main>
    );
}

export default NotFound;