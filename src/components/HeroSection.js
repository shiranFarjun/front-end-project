import React from 'react'
import '../app.css'
import { Button } from '../components/Button'
import './HeroSection.css'


function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>Every person needs a place to</h1>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn-outline'
                    buttonSize='btn-large'>Get started
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn-primary'
                    buttonSize='btn-large'>Watch trailer <i className='far fa-play-circle'/>
                </Button>
            </div>

        </div>
    )
}

export default HeroSection
// <video src='/video/first.mp4' autoPlay loop muted></video>
