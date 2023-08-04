import React from 'react';
import "./footer.css";
import classNames from 'classnames';

const Footer = () =>{
 return(
    <>
    <section>
        <div className="container">
        <div className='foot'>   
        <img src="./images/logo.png" alt="" /><h1>YourProjects.com</h1>
        <h2>A project by Karthik</h2>
        <h3>Social</h3>
        <h4><ListItem href="https://www.instagram.com/karth1kkk/">Instagram </ListItem></h4>
        <h4><ListItem href="www.Github.com">Github </ListItem></h4>
        <h4><ListItem href="https://www.fiverr.com/f1024karthikeya?up_rollout=true">Fiver </ListItem></h4>
        </div> 
        <div className='Others'>
            <h2>Others</h2>
            <h1><ListItem href="https://github.com/karth1kkk/CodeLingual">CodeLingual </ListItem></h1>
            <h1><ListItem href="https://github.com/karth1kkk/TotalTone">TotalTone </ListItem></h1>
        </div>

        </div>
    </section>
    </>
 )
}

export default Footer;

const ListItem = React.forwardRef(({ className, children, title, ...props }, forwardedRef) => (
    <a>
        <a className={classNames('ListItemLink', className)} {...props} ref={forwardedRef}>
          <div className="ListItemHeading">{title}</div>
          <p className="ListItemText">{children}</p>
        </a>
    </a>
  ));
