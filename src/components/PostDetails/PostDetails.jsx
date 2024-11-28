import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const { idCategory} = post
    return (
        <div>
            <h2> id: {idCategory} </h2>
        </div>
    );
};

export default PostDetails;