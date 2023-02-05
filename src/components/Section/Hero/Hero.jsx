// The Hero will be a purely visual display of Randy Dixon to introduce the visitor.

import React from 'react';

function Hero() {
    return (
        <section id='hero'>
            {/* TODO: Replace with hero image */}
            {/* TODO: Randy Dixon in the bottom left corner or whatever corner makes sense */}
            <img id='hero-image' src="https://dummyimage.com/1900x16:7" alt="A headshot of Randy Dixon" />
            <div id="hero-name">Randy Dixon</div>
        </section>
    )
}

export default Hero;