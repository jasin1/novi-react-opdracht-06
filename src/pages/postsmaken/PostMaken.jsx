import './PostMaken.css';
import {useForm} from "react-hook-form";
import wordCount from "../../helpers/wordCount.js";


function PostMaken() {
    const {
        register,
        handleSubmit,
    } = useForm();

// console.log(wordCount('De Nederlandse bevolking blijft groeien'));

    const myWord = wordCount('bnnvmbvnmvnmbvnmv');
    console.log(myWord);


    return (
        <main className="page-wrapper">
            <article>
                <h1>Post toevoegen</h1>
                <div className="form-wrapper">
                    <form onSubmit={handleSubmit((data) => {
                        data.readTime = wordCount(data.content);
                        console.log(data)
                    })}>
                        <div className="form-container">
                            <label htmlFor="title-field">
                                Titel
                                <input
                                    type="text"
                                    id="title-field"
                                    {...register("title", {
                                        required: true,
                                    })}
                                />
                            </label>
                            <label htmlFor="subtitle-field">
                                SubTitel
                                <input
                                    type="text"
                                    id="subtitle-field"
                                    {...register("subtitle", {
                                        required: true,
                                    })}
                                />
                            </label>
                        </div>
                        <div className="form-container">
                            <label htmlFor="author-field">
                                Author
                                <input
                                    type="text"
                                    id="author-field"
                                    {...register("author", {
                                        required: true,
                                    })}
                                />
                            </label>
                        </div>
                        <div className="form-container">
                            <label htmlFor="content-field">
                                Content
                                <textarea
                                    id="content-field"
                                    {...register("content", {
                                        required: true,
                                        minLength: 300,
                                        maxLength: 2000,
                                    })}
                                    cols="40"
                                    rows="10"
                                    placeholder="Content van je blogpost"
                                >
                            </textarea>
                            </label>
                        </div>
                        <div className="submit-btn-wrapper">
                            <button type="submit">
                                Versturen
                            </button>
                        </div>
                        <label htmlFor="shares-field" className="hidden">
                            <input type="number"
                                   id="shares-field"
                                   {...register("shares", {
                                       value: 0,
                                   })}
                            />
                        </label>
                        <label htmlFor="comments-field" className="hidden">
                            <input type="number"
                                   id="comments-field"
                                   {...register("comments", {
                                       value: 0,
                                   })}
                            />
                        </label>
                        <label htmlFor="created-field" className="hidden">
                            <input type="date"
                                   id="created-field"
                                   {...register("created", {
                                       value: new Date(),
                                   })}
                            />
                        </label>
                        <label htmlFor="readTime-field" className="hidden">
                            <input type="number"
                                   id="readTime-field"
                                   {...register("readTime", {
                                       value: 0,
                                   })}
                            />
                        </label>
                    </form>
                </div>
            </article>
        </main>
    );
}

export default PostMaken;