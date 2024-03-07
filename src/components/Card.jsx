import React from "react";

import projectImage from '../assets/cardsBg/conway.gif'

export default function Card(props) {
    // helper functions
    
    // props.config
    const config = props.config.heroCard;
    
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
                <div className={`flex items-center justify-center rounded-2xl `} 
                    style={{
                        height: `${innerWidth}px`,
                        width: `${innerHeight}px`,
                        backgroundImage: ``,//`url(${projectImage})`,
                        backgroundColor: '' // code for hex opacity if 50% = 99
                        // `${config.primaryBg.split('')[0] === '#' ? 'backgroundColor: ' + config.primaryBg + '80': 'url(projectImage)'}`
                    }}
                    >
                    {/* 2nd bg -> handles purple gradient */}
                    <div className={`flex items-end bg-gradient-to-tr from-[#00000080] rounded-2xl`} // code for hex opacity if 50% = 99
                        style={{
                            height: `${innerWidth}px`,
                            width: `${innerHeight}px`,
                        }}
                    >
                        {/* 3rd bg: black gradient */}
                        <div className="m-8">
                            {/* 4rd bg: content layer */}
                            flkdsañjñdlk
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}