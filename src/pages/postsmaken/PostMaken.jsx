import './PostMaken.css';
import {useForm} from "react-hook-form";
import wordCount from "../../helpers/wordCount.js";
import axios from "axios";
import {useState} from "react";
import {Link} from "react-router-dom";


// Breidt de huidige handleSubmit functie uit, door er een asynchrone functie van te maken en voeg een try/catch -blok toe.
// Verstuur de verzamelde data op de voorgeschreven manier naar de backend.
// Kijk goed naar de informatie die je terugkrijgt wanneer het request succesvol is uitgevoerd.
// Is alles goed gegaan? Zorg ervoor dat het formulier verdwijnt.
// In plaats daarvan moet de volgende boodschap op de pagina worden weergegeven:
// De blogpost is succesvol toegevoegd. Je kunt deze hier <link-naar-post> bekijken.
// Ging er iets mis? Dan blijft het formulier staan en geef je een rode foutmelding weer.

function PostMaken() {
    const {register, handleSubmit,} = useForm();
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [formActive, setFormActive] = useState(true);
    const [blogId, setBlogId] = useState(Number);



    const onSubmit = async (data) => {
        try {
            data.readTime = wordCount(data.content);
            console.log(data);

            const response = await axios.post('http://localhost:3000/posts', data);

            // console.log(response.data);
            console.log(response.status);
            console.log(response.data.id);
            setBlogId(response.data.id);
            if (response.status === 201) {
                console.log("yes");
            }
            setSuccessMessage('De blog is met success toegevoegd!');
            setError('');
            setFormActive(false);

        } catch (e) {
            console.error(e);
            setError('Het versturen van de data is mislukt!');
            setSuccessMessage('');
        }
    }


    return (
        <main className="page-wrapper grey-bg">

            <article className="main-container">
                <h1>Post toevoegen</h1>
                <div className="form-wrapper">
                    {successMessage &&
                        <div>
                            <p>{successMessage}
                                <Link to={`/blogpost/${blogId}`}> Bekijk hier je blog</Link>
                            </p>

                            <span></span>
                        </div>
                    }
                    {error && <p className="error">{error}</p>}
                    <form className={formActive ? 'visible' : 'hidden'} onSubmit={handleSubmit(onSubmit)}>

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
                                Sub-titel
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