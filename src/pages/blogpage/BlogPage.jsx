import {useParams} from "react-router-dom";
import Data from '../../constants/data.json';
import {Link} from "react-router-dom";
import showDate from "../../helpers/showDate.js";
import './BlogPage.css';

function BlogPage() {
    const {id} = useParams();
    const num = id - 1;
    // console.log(Data[num]);

    const blogData = Data[num];
    console.log(blogData);

    return (
        <main className="page-wrapper">
            <article className="myPost">
                <header>
                    <h1>{blogData.title}</h1>
                    <h2>{blogData.subtitle}</h2>
                </header>
                <div className="blog-details">
                    <p>Geschreven door {blogData.author} op {showDate(blogData.created)}</p>
                    <div className="blog-read-duration">
                        <img src="" alt=""/>
                        <span>{blogData.readTime} minuten lezen</span>
                    </div>
                </div>
                <section className="blog-body">
                    <div className="blog-txt">
                        <p>
                            {blogData.content}
                        </p>
                    </div>
                    <div className="blog-txt">
                        <p>{blogData.comments} reacties - {blogData.shares} keer gedeeld</p>
                    </div>
                    <div className="link-back">
                        <Link to="/posts" className="inline-link">
                            Terug naar de overzicht
                        </Link>
                    </div>
                </section>
            </article>
        </main>
    )

}

export default BlogPage;