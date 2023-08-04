import React from 'react';
import Post from '../post/post';
import "./posts.css";
import NavMenu from '../menubar/menubar';
import Footer from '../footer/footer';
import classNames from 'classnames';

export default function Posts({ posts }) {
  return (
    <div className='posts'>
      <NavMenu />
      
      {posts.length === 0 ? (
        <div className='noPostsMessage'>
          <ListItem href="/write" title='Post Something'><b>No posts found... </b></ListItem>
          </div>
      ) : (
        posts.map((p) => <Post post={p} key={p.id} />)
      )}
      
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Footer />
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


