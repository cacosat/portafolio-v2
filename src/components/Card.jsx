import React from "react";

import projectImage from '../assets/cardsBg/conway.gif'

export default function Card(props) {
    // helper functions
    
    // props.config
    const config = props.config;
    console.log(props.config)

    return <>
    {/* JSX */}
        <div className={`shadow-xl ${props.className} h-full w-full`}>
            <div className={`flex items-end justify-start rounded-2xl relative h-full w-full bg-cover bg-no-repeat`} 
                style={{
                    backgroundImage: `${config.primaryBg.split('')[0] != "#" ? `url(${config.primaryBg})` : ''}`,
                    backgroundColor: `${config.primaryBg.split('')[0] != "#" ? '' : `${config.primaryBg}99`}`
                }}
                >
                {/* handles purple gradient */}
                <div
                    className="absolute inset-0 bg-gradient-to-tr from-[#0d0d0d] via-[#0d0d0de5] via-15% bg-opacity-0 rounded-2xl backdrop-blur-[5px] border-[1px] border-[#474747]"
                    style={{
                    // mixBlendMode: 'darken',
                    }}
                ></div>
                {/* Content here, make sure this comes after the overlay div so it's on top */}
                <div className="flex flex-col items-start gap-2 m-8 z-10 opacity-100">
                    <div className="flex flex-col ">
                        <h1 className={`${config.type === 'hero' ? 'text-[64px] font-bold' : 'text-2xl'}`}>
                            {config.title}
                        </h1>
                        <p className="">
                            {config.fecha}
                        </p>
                    </div>
                    {/* TODO toggle for description */}
                    <p>{config.descripcion}</p>
                    <button>Ver más</button>
                </div>
            </div>
        </div>
    </>
}