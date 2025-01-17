import React from 'react'
import HighlightText from './HighlightText'
import CTAButton from "../../../components/core/HomePage/Button";
import Know_your_progress from "../../../assets/Images/Know_your_progress.svg";
import Compare_with_others from "../../../assets/Images/Compare_with_others.svg";
import Plan_your_lessons from "../../../assets/Images/Plan_your_lessons.svg";

const LearningLanguageSection = () => {
    return (
        <div>
            <div className="text-4xl font-semibold text-center my-10">
                Your Swiss Knife for Discovering Art
                <HighlightText text={"Discovering Art"} />
                <div className="text-center text-richblack-700 font-medium lg:w-[75%] mx-auto leading-6 text-base mt-3">
                    Using a seamless platform, exploring and collecting stunning artworks has never been easier. With a wide range of art styles, progress tracking, personalized recommendations, and more.
                </div>
                <div className="flex flex-col lg:flex-row items-center justify-center mt-8 lg:mt-0">
                    <img
                        src={Know_your_progress}
                        alt=""
                        className="object-contain  lg:-mr-32 "
                    />
                    <img
                        src={Compare_with_others}
                        alt=""
                        className="object-contain lg:-mb-10 lg:-mt-0 -mt-12"
                    />
                    <img
                        src={Plan_your_lessons}
                        alt=""
                        className="object-contain  lg:-ml-36 lg:-mt-5 -mt-16"
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