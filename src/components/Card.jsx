import React from "react";

export default function Card(props) {
    // helper functions
    
    // props.config
    const config = props.config.heroCard;
    
    const innerWidth = config.height-config.border;
    const innerHeight = config.width-config.border;

    return <>
    {/* JSX */}
        <div>

            <div className={`flex items-center justify-center bg-gradient-to-bl from-white/25 rounded-2xl  w-[${config.width}px] h-[${config.height}px]`}>
                {/* first bg -> handles stroke / border */}
                <div className={`flex items-center justify-center bg-[${config.primaryGradient}]/60 rounded-2xl `}
                    style={{
                        height: `${innerWidth}px`,
                        width: `${innerHeight}px`,
                    }}
                    >
                    {/* 2nd bg -> handles purple gradient */}
                    <div className={`flex items-end bg-gradient-to-tr from-black rounded-2xl`}
                        style={{
                            height: `${innerWidth}px`,
                            width: `${innerHeight}px`,
                        }}
                    >
                        {/* 3rd bg: black gradient */}
                        <div>dañslkfdñal</div>
                        dsfasd
                    </div>
                </div>
            </div>
        </div>
    </>
}