import React, { useContext, useEffect, useState } from "react";
import Posts from "../posts/posts";
import axios from "axios";
import { useLocation } from "react-router";
import { Context } from "../context/Context";

export default function Postshow() {
  const { search } = useLocation();
  const [posts, setPosts] = useState([]);
  const { user } = useContext(Context);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);


      if (user) {
        const filteredPosts = res.data.filter((post) => post.username === user.username);
        setPosts(filteredPosts);
      } else {
        setPosts(res.data);
      }
    };
    fetchPosts();
  }, [search, user]);

  return (
    <div className="posts">
      <Posts posts={posts} />
    </div>
  );
}
