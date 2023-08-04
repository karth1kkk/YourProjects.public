import "./post.css";
import React from "react";
import classNames from 'classnames';

export default function Post({ post }) {
  const PF = "https://your-projects-com.vercel.app/images/";

  return (
    <div className="post">
      {post.photo1 && <img className="postImg" src={PF + post.photo1} alt="" />}
      {post.photo2 && <img className="postImg" src={PF + post.photo2} alt="" />}
      <div className="postInfo">
        <ListItem className="postTitle" title={post.title} href={`/post/${post._id}`}>
          <hr />
          <div className="postCats">
          {post.categories}
           </div>
          <span className="postAuthor">{post.ProfilePic && 
            <img className="AuthImg" src={PF + post.ProfilePic} alt="" />}
            {post.username}</span>
          <br />
          <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        </ListItem>
      </div>
      <br />
    </div>
  );
}

const ListItem = React.forwardRef(({ className, children, title, ...props }, forwardedRef) => (
  <a>
    <a className={classNames('ListItemLink', className)} {...props} ref={forwardedRef}>
      <div className="ListItemHeading">{title}</div>
      <p className="ListItemText">{children}</p>
    </a>
  </a>
));
