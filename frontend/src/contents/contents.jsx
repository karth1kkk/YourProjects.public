import React from 'react';
import "./contents.css";
import { ComponentInstanceIcon} from '@radix-ui/react-icons'

const Contents = ()=> {
    return(
        <>
        <section className='contents'>
        <div className='content1'>
        <h3>Case studies</h3>
        <h2>A webpage that can share your projects</h2>
        <h4>among other creators</h4>
        <div className='contain'>
        <div className='review'>
        <h2><ComponentInstanceIcon/> <b>From</b> Karthik</h2>
        <p>"I love the idea of being able to showcase my work</p>
        <p>It gives an early Insight to the employers to see my work well ahead of my interview. It also increases the chances of employement as the employers can visually interpret what we are capable of doing"</p>
        </div>
        <div className='review1'>
        <h2><ComponentInstanceIcon/> Anonymous</h2>
        <p>"By showcasing our work early on, we as candidates are able to provide employers with valuable insights into our skills and</p>
        <p> capabilities. This allows employers to make more informed choices, increasing the likelihood of securing employment"</p>
        </div>
        </div>
        </div>
        </section>
        <div className='end'>
            <div className="ghj">
                <div className="sh">
                    <div className="inn">
                        <img className='gh' src="./images/logo.png" alt="" />
                    <h2>YourProjects.com</h2>
                <p><b>YourProjects.com is a revolutionary platform designed to showcase the incredible projects of creators from all around the world. Whether you are a developer, designer, artist, or any other creative professional, YourProjects.com is the perfect place to display your work and increase your chances of landing your dream job.</b></p>
                <p><b>Showcasing your projects on YourProjects.com allows potential employers to explore your talents and skills in a visually appealing and interactive way. You can create a personalized portfolio that highlights your best works, providing a comprehensive overview of your capabilities.</b></p>
                <p><b>Join our growing community of creators and take advantage of the exposure YourProjects.com offers. Stand out from the crowd and let your projects speak for themselves.</b></p>
                   </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Contents;