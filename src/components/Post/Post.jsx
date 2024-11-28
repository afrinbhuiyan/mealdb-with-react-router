import { Link } from 'react-router-dom';
import './Post.css'
const Post = ({post}) => {
    const {idCategory, strCategoryThumb, strCategory} = post;
    return (
        <div>
            <img src={strCategoryThumb} alt="" />
            <h4> {strCategory} </h4>
            <Link to={`/post/${idCategory}`} > post detail </Link>
        </div>
    );
};

export default Post;