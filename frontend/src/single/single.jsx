import React from 'react'
import "./single.css"
import SinglePost from '../singlepost/SinglePost'
import NavMenu from '../menubar/menubar'
import Footer from '../footer/footer'

function Single() {
    return (
        <div className='single'>      
            <NavMenu/>
            <SinglePost/>
            <Footer/>
        </div>
    )
}

export default Single
