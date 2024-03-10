import React from "react";

import projectImage from '../assets/cardsBg/conway.gif'

export default function Card(props) {
    // helper functions
    
    // props.config
    const config = props.config;
    console.log(config)
    
    const innerWidth = config.height-config.border;
    const innerHeight = config.width-config.border;

    return <>
    {/* JSX */}
        <div>

            <div className={`flex items-center justify-center bg-gradient-to-bl from-[#ffffff40] rounded-2xl`} // #000000 00 last two nums are opacity
                style={{
                    height: `${config.height}px`,
                    width: `${config.width}px`,
                }}>
                {/* first bg -> handles stroke / border */}
                <div className={`flex items-end justify-start rounded-2xl relative `} 
                    style={{
                        height: `${innerWidth}px`,
                        width: `${innerHeight}px`,
                        backgroundImage: `${config.primaryBg.split('')[0] != "#" ? `url(${config.primaryBg})` : ''}`,
                        backgroundColor: `${config.primaryBg.split('')[0] != "#" ? '' : `${config.primaryBg}99`}`
                    }}
                    >
                    {/* 2nd bg -> handles purple gradient */}
                    <div
                        className="absolute inset-0 bg-gradient-to-tr from-[#0d0d0d] via-[#0d0d0d] via-30% bg-opacity-0 rounded-2xl backdrop-blur-[2px]"
                        style={{
                        mixBlendMode: 'darken',
                        }}
                    >                    </div>
                    {/* Content here, make sure this comes after the overlay div so it's on top */}
                    <div className="m-8 z-10 opacity-100">
                        flkdsañjñdlk
                    </div>
                </div>
            </div>
        </div>
    </>
}