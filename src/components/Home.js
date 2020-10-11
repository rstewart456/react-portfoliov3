import React from 'react'
import Button from 'react-bootstrap/Button'
import './home.css'

export const Home = () => {
    return (
        <div className='home-container' id="home">
            <div className='home-intro'>
                <p>Hello, my name is <span className='home-name'>Ronald</span><br /> I'm a inspiring web developer.</p>
                <Button className='p-3 btn-success' href='#about'>Know More</Button>
            </div>
        </div>
    )
}