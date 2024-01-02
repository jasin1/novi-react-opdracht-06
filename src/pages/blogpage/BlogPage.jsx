import {useParams} from "react-router-dom";
// import Data from '../../constants/data.json';
import {Link} from "react-router-dom";
import showDate from "../../helpers/showDate.js";
import './BlogPage.css';
import {useEffect, useState} from "react";
import axios from "axios";

function BlogPage() {
    const {id} = useParams();
    const [blogData, setBlogData] = useState();
    const [error, setError] = useState();
   //  const num = id - 1;
   //  // console.log(Data[num]);
   //
   //  const blogData = Data[num];
   // console.log(blogData);

    useEffect(()=>{
        async function fetchData() {
            // {setError}('');
            try {
                const response = await axios.get(`http://localhost:3000/posts/${id}`);
                console.log(response.data);
                setBlogData(response.data);
            } catch (e) {
                console.error(e);
                setError('Het ophalen van de data is mislukt!')
            }
        }


        fetchData();

    },[]);

    return (
        <main className="page-wrapper">
            {blogData ? (
            <article className="myPost">
                <header>
                    {error && <p className="error">{error}</p>}
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
            ):(<p>Momentje...</p>)}
        </main>
    )

}

export default BlogPage;