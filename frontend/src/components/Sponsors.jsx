import React from 'react'
import "./Sponsors.css"
import Gallery from './Gallery'
import SlideLeft from './SlideLeft';
import SlideRight from './SlideRight';

export default function Sponsors() {
    return (
        <div className='sponsor'>
            <div className='hero'>
                <h1>Why Sponsor Us?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a enim massa. Aliquam eget mi euismod, viverra mi eu, luctus lacus. Morbi enim elit, efficitur vitae diam suscipit, elementum commodo lacus. Mauris quis lectus arcu. Mauris condimentum, sapien non eleifend scelerisque, nulla nunc pretium nibh, at porta turpis nibh a ligula. Vivamus sagittis lorem vitae ante dignissim, eget pellentesque nunc convallis. Maecenas lobortis mollis lorem, eget viverra velit maximus et. </p>
            </div>
            <div className='current'>
                <h1>Our Sponsors</h1>
                <Gallery />
            </div>
            <div className='prev'>
                <h1>Previous Sponsors</h1>
                <SlideLeft/>
                <SlideRight/>
            </div>
        </div>
    )
}
