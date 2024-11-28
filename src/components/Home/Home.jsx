
import Header from "../Header/Header";
// import Head from "../Head/Head";
import { Outlet, useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Home = () => {
    const posts = useLoaderData();
    return (
        <div>
            <Header></Header> 
            <Outlet></Outlet>
            <div className="posts">
                <h2>Latest Meals</h2>
                <div className="post">
                {
                    posts.categories.map(post => <Post key={post.idCategory} post={post} ></Post> )
                }
                </div>
            </div>
        </div>
    );
};

export default Home;