import React from 'react'
import HighlightText from '../HomePage/HighlightText'

const Quote = () => {
    return (
        <div className=" text-xl md:text-4xl font-semibold mx-auto py-5 pb-20 text-center text-white">
            We are passionate about redefining the way art is experienced. Our
            innovative platform  <HighlightText text={"combines technology"} />,{" "}
            <span className="bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text font-bold">
                {" "}
                creativity, and community
            </span>
            to deliver an unparalleled
            <span className="bg-gradient-to-b from-[#E65C00] to-[#F9D423] text-transparent bg-clip-text font-bold">
                {" "}
                art-buying and selling experience.
            </span>
        </div>
    )
}

export default Quote