import React from "react";

export default function Card(props) {
    // helper functions
    const height = 512;
    const width = 512;
    const border = 23;
    let  innerWidth = ((width, border) => {return width-border});
    let innerHeight;

    return <>
    {/* JSX */}
        <div>
            contenedor card 
            <div className={`bg-white bg-opacity-25 border border-white border-opacity-25 rounded-2xl w-[${width}px] h-[${height}px]`}>
                {/* Content of the card goes here */}
                adfaoisdf
                dsfasd
            </div>

            <div className={`flex items-center justify-center border border-white border-opacity-25 rounded-2xl w-[${width}px] h-[${height}px]`}>
                <div className={` bg-white bg-opacity-25 border border-white border-opacity-25 rounded-2xl w-[${innerWidth(width, border)}px] h-[100px]`}>
                    {/* Content of the card goes here */}
                    adfaoisdf
                    dsfasd
                </div>
            </div>
        </div>
    </>
}