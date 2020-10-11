import React from 'react'
import './about.css'

export const About = () => {
    return (
        <div id='about' className='about-container'>
            <div className='about-title'>
                <h1>Ronald Resume</h1>
            </div>
            <div className='about-body'>
          <p className='about-indent'>I am passionate about technology and the web. I remember when Amazon
          first started out just selling books online and now Amazon is within
          the top 5 companies in the world. I also remember the battle of
          Microsoft Explorer and Netscape browser. I am excited to see what
          another twenty years will bring.</p>
          <p className='about-indent'>I am also a nerd at heart. I love sci-fi, and anime. Some of my
          favorite shows are The Flash, The Expanse, Star Wars, Star Trek,
          Tenchi Muyo! War on Geminar, and The Rise of the Shield Hero.</p>
          <h2 className='py-5'>Education</h2>
          <h4>South University - Savannah G.A.</h4>
          <h6>2012-2014</h6>
          <p>Associate in Informtaion Technology</p>
          <h2 className='py-5'>Work Experinces</h2>
          <h4>AutoZone - Parts Sales Manager</h4>
          <h6>Octerber 2008 - Present</h6>
          <p>Open or Close the store, Supervise 2 to 6 exployees, Cash Handling, Handle Customer Concerns, and Inventory Management</p>
          <h4>Wave2Net</h4>
          <h6>2007</h6>
          <p>Provide Tier one support for (WISP) Wireless Internet Service Provider Customers</p>
            </div>
            <div className='about-contact'>
              <h3>Contact Me</h3>
              <a href='#abt'>Email</a>
              <a href='#abt'>twitter</a>
              <a href='#abt'>Linkiden</a>
          </div>
            <div className='about-achivements'>
                <h2>Skills</h2>
                <p>Vue, React, Redux, NOdejs,<br />HTML,CSS, Tailwindcss,<br/>express<br/><br/>
                Static hosting on Amazon Web Services (AWS)<br/><br/>
                Github<br/><br/>
                Firebase, MongoDB</p>
            </div>
            <div className='about-footer'>MIT license</div>
        </div>
    )
}