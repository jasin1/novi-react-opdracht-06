// import Data from '../../constants/data.json'
import './Posts.css';
import {Link} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";



function Posts() {
    //---- stappen plan ------//
    // ---  async await nodig
    // ---- try catch nodig
    //----- maak gebruik van useState

    const [error, setError] = useState('');
    const [blogData, setBlogData] = useState([]);


    useEffect(()=>{
        async function fetchData() {
            // {setError}('');
            try {
                const response = await axios.get('http://localhost:3000/posts');
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
        <main className="page-wrapper grey-bg">
            <article>
                <header>
                    <h1>Posts</h1>
                </header>
                <section>
                    <ul className="post-thumbs-wrapper">
                        {error && <p className="error">{error}</p>}
                        {/*<p>{blogData[0].author}</p>*/}
                        {blogData.map((post) => (
                            <li key={post.id}><Link className="post-link" to={`/blogpost/${post.id}`}>
                                <div className="post-thumb">
                                    <div className="post-thumb-header">
                                        <h2>{post.title} <span className="post-thumb-author">( {post.author} )</span>
                                        </h2>

                                    </div>
                                    <div className="post-thumb-footer">
                                        <p>{post.comments} reacties - {post.shares} keer gedeeld</p>
                                    </div>
                                </div>
                            </Link>
                            </li>
                        ))}

                    </ul>

                </section>
            </article>
        </main>
    );
}

export default Posts;