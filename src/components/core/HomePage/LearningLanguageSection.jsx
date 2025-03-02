import React from 'react'
import HighlightText from './HighlightText'
import CTAButton from "../../../components/core/HomePage/Button";
import Bird1 from "../../../assets/Images/Bird1.svg";
import Bird2 from "../../../assets/Images/Bird2.svg";
import Bird3 from "../../../assets/Images/Bird3.svg";

const LearningLanguageSection = () => {
    return (
        <div>
            <div className="text-4xl font-semibold text-center my-10">
                Your Swiss Knife for Discovering Art
                <HighlightText text={"Discovering Art"} />
                <div className="text-center text-richblack-700 font-medium lg:w-[75%] mx-auto leading-6 text-base mt-3">
                    Using a seamless platform, exploring and collecting stunning artworks has never been easier. With a wide range of art styles, progress tracking, personalized recommendations, and more.
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-center mt-12 lg:mt-8 gap-14 lg:gap-20 p-6 lg:p-10">
                    <img
                        src={Bird1}
                        alt=""
                        className="object-contain w-[180px] h-[180px] lg:w-[230px] lg:h-[230px] lg:-mr-32 lg:mb-5"
                    />
                    <img
                        src={Bird2}
                        alt=""
                        className="object-contain w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] lg:-mb-5 -mt-8 lg:mt-0"
                    />
                    <img
                        src={Bird3}
                        alt=""
                        className="object-contain w-[180px] h-[180px] lg:w-[230px] lg:h-[230px] lg:-ml-32 lg:mb-5"
                    />
                </div>
            </div>

            <div className="w-fit mx-auto lg:mb-20 mb-8 -mt-5">
                <CTAButton active={true} linkto={"/signup"}>
                    <div className="">Preview More</div>
                </CTAButton>
            </div>
        </div>
    )
}

export default LearningLanguageSection