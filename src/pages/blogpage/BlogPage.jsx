import {useParams} from "react-router-dom";

function BlogPage(){
    const{id} = useParams();

    return(
        <div>
            <p>Het blognummer is {id}</p>
        </div>
    )

}

export default BlogPage;