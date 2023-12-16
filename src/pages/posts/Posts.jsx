import Data from '../../constants/data.json'
import './Posts.css';
import {Link} from "react-router-dom";


function Posts() {
    return (
        <main className="page-wrapper grey-bg">
            <article>
                <header>
                    <h1>Posts</h1>
                </header>
                <section>
                    <ul className="post-thumbs-wrapper">
                        {Data.map((post) => (
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