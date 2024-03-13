import React from "react";
import downloadSvg from '../assets/download.svg'
import projectImage from '../assets/cardsBg/conway.gif'

export default function Card(props) {
    // helper functions
    
    // props.config
    const config = props.config;

    function buttonLayout(type) {
        switch (type) {
            // type is a string of types: hero|project|about|form|footer
            case 'hero':
                return (
                    <div className="flex gap-4">
                        <button className={`flex items-center gap-2 bg-[#391597] hover:bg-[#4419B3] transition 300ms text-neutral-300 text-sm font-light py-2 px-6 rounded-full`} 
                                style={{ 
                                    boxShadow: 'inset 0 0 5px #883FD4' 
                                }}>
                            Más sobre mi
                        </button>
                        <button className={`flex items-center gap-2 bg-[#0E0A1D] hover:bg-[#120D29] transition 300ms text-neutral-300 text-sm font-light py-2 px-6 rounded-full`} 
                                style={{ 
                                    boxShadow: 'inset 0 0 5px #883FD4'
                                }}>
                            Curriculum
                            <img src={downloadSvg} alt="Download" />
                        </button>
                    </div>
                );
            
            case 'project': // One button "Ver más", links to project page
                console.log('project buttons')
                break;
            
            case 'form': // form component to render for about me card
                break;
        
            case 'footer': // footer renders name - mail
                break;
            
            default: // about returns nothing
                break;
        }
    }

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
                <div className="flex flex-col items-start gap-4 m-6 lg:m-8 z-10 opacity-100">
                    <div className="flex flex-col gap-2">
                        <h1 className={`${config.type === 'hero' ? 'text-[64px] font-semibold' : 'text-lg sm:text-2xl'} text-neutral-50`}>
                            {config.title}
                        </h1>
                        <p className={`text-[12px] text-neutral-500 font-semibold`}>
                            {config.fecha}
                        </p>
                    </div>
                    {/* TODO toggle for description */}
                    <p className={`${config.type === 'hero' ? 'flex max-w-[45ch]' : 'hidden md:flex'} font-light text-[14px] text-neutral-300 tracking-wide`}>
                        {config.descripcion}
                    </p>
                    <div>
                        {/* container for 3 diferent button layouts, only one rendered via a */}
                        {/* switch statement of prop.config.type === hero|project|about|form|footer; */}
                        {/* about and footer return empty, project one button, hero buttons plus socials, */}
                        {/* and forms the contact form */}
                        {buttonLayout(props.config.type)}
                    </div>
                </div>
            </div>
        </div>
    </>
}