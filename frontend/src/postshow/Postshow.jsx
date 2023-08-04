import Posts from '../posts/posts';
import { useEffect, useState } from "react";
import "./postshow.css"
import axios from "axios";
import { useLocation } from "react-router";


export default function Postshow() {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();
  
    useEffect(() => {
      const fetchPosts = async () => {
        const res = await axios.get("/posts" + search);
        setPosts(res.data);
      };
      fetchPosts();
    }, [search]);
  return (

    <div className='posts'>
      <Posts posts={posts}/>
    </div>
  );
}

