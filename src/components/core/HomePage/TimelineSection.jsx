import React from "react";
import TimeLineImage from "../../../assets/Images/TimelineImage.jpg";
import Logo1 from "../../../assets/TImelineLogo/Logo1.svg";
import Logo2 from "../../../assets/TImelineLogo/Logo2.svg";
import Logo3 from "../../../assets/TImelineLogo/Logo3.svg";
import Logo4 from "../../../assets/TImelineLogo/Logo4.svg";

const TimeLine = [
    {
        Logo: Logo1,
        Heading: "Creativity",
        Description: "Fully committed to showcasing diverse, inspiring artworks from talented artists.",
    },
    {
        Logo: Logo2,
        Heading: "Passion",
        Description: "Each piece of art reflects the dedication and passion of the creators behind them.",
    },
    {
        Logo: Logo3,
        Heading: "Versatility",
        Description: "The ability to choose from a wide range of art styles is key to expressing your unique taste.",
    },
    {
        Logo: Logo4,
        Heading: "Inspiration",
        Description: "Find the perfect piece that sparks creativity and transforms your space.",
    },
];


const TimelineSection = () => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row gap-20 mb-20 items-center">
                <div className="lg:w-[45%] flex flex-col gap-14 lg:gap-3">
                    {TimeLine.map((ele, i) => {
                        return (
                            <div className="flex flex-col lg:gap-3" key={i}>
                                <div className="flex gap-6" key={i}>
                                    <div className="w-[52px] h-[52px] bg-white rounded-full flex justify-center items-center shadow-[#00000012] shadow-[0_0_62px_0]">
                                        <img src={ele.Logo} alt="" />
                                    </div>
                                    <div>
                                        <h2 className="font-semibold text-[18px]">{ele.Heading}</h2>
                                        <p className="text-base">{ele.Description}</p>
                                    </div>
                                </div>
                                <div
                                    className={`hidden ${TimeLine.length - 1 === i ? "hidden" : "lg:block"
                                        }  h-14 border-dotted border-r border-richblack-100 bg-richblack-400/0 w-[26px]`}
                                ></div>
                            </div>
                        );
                    })}
                </div>
                <div className="relative w-fit h-fit shadow-blue-200 shadow-[0px_0px_30px_0px]">
                    <div className="absolute lg:left-[50%] lg:bottom-0 lg:translate-x-[-50%] lg:translate-y-[50%] bg-caribbeangreen-700 flex lg:flex-row flex-col text-white uppercase py-5 gap-4 lg:gap-0 lg:py-10 ">
                        {/* Section 1 */}
                        <div className="flex gap-5 items-center lg:border-r border-caribbeangreen-300 px-7 lg:px-14">
                            <h1 className="text-3xl font-bold w-[75px]">15+</h1>
                            <h1 className="text-caribbeangreen-300 text-sm w-[75px]">
                                Years experiences Artist
                            </h1>
                        </div>

                        {/* Section 2 */}
                        <div className="flex gap-5 items-center lg:px-14 px-7">
                            <h1 className="text-3xl font-bold w-[75px]">250</h1>
                            <h1 className="text-caribbeangreen-300 text-sm w-[75px]">
                                types of artImages
                            </h1>
                        </div>
                        <div></div>
                    </div>
                    <img
                        src={TimeLineImage}
                        alt="timelineImage"
                        className="shadow-white shadow-[20px_20px_0px_0px] object-cover h-[400px] lg:h-fit"
                    />
                </div>
            </div>
        </div>
    );
};

export default TimelineSection;