import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Banner from "../assets/Images/banner.mp4"
import Footer from "../components/common/Footer"
import CTAButton from "../components/core/HomePage/Button"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import ExploreMore from "../components/core/HomePage/ExploreMore"
import HighlightText from "../components/core/HomePage/HighlightText"
import InstructorSection from "../components/core/HomePage/InstructorSection"
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection"
import TimelineSection from "../components/core/HomePage/TimelineSection"

function Home() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
        AOS.refresh();
    }, []);
    return (
        <>
            {/* Section 1 */}
            <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white">
                {/* Become a Instructor Button */}
                <Link to={"/signup"}>
                    <div data-aos="zoom-in" className="group mx-auto mt-16 w-fit rounded-full bg-richblack-800 p-1 font-bold text-richblack-200 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)] transition-all duration-200 hover:scale-95 hover:drop-shadow-none">
                        <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900">
                            <p>Become an Artist</p>
                            <FaArrowRight />
                        </div>
                    </div>
                </Link>

                {/* Heading */}
                <div data-aos="fade-right" className="text-center text-4xl font-semibold">
                    Empower Your Space with
                    <HighlightText text={"Unique Artwork"} />
                </div>

                {/* Sub Heading */}
                <div data-aos="fade-left" className="-mt-3 w-[90%] text-center text-lg font-bold text-richblack-300">
                    Discover a world of creativity with our curated art collection. Explore and purchase stunning pieces created by talented artists, bringing beauty and inspiration to your home or office. Shop with ease and let art speak to your soul..
                </div>

                {/* CTA Buttons */}
                <div className="mt-8 lg:flex xl:flex md:flex flex-row gap-7 hidden">
                    <CTAButton active={true} linkto={"/signup"}>
                        Explore More
                    </CTAButton>
                    <CTAButton active={false} linkto={"/login"}>
                        Preview Now
                    </CTAButton>
                </div>
                <div className=" flex  flex-row gap-7 lg:hidden xl:hidden md:hidden ">
                    <CTAButton active={true} linkto={"/signup"}>
                        Signup
                    </CTAButton>
                    <CTAButton active={false} linkto={"/login"}>
                        login
                    </CTAButton>
                </div>

                {/* Video */}
                <div data-aos="flip-right" className="mx-3 my-7 shadow-[10px_-5px_50px_-5px] shadow-blue-200">
                    <video
                        muted
                        loop
                        autoPlay
                    >
                        <source src={Banner} type="video/mp4" />
                    </video>
                </div>

                {/* Code Section 1  */}
                <div>
                    <CodeBlocks
                        position={"lg:flex-row"}
                        heading={
                            <div data-aos="fade-right" className="text-4xl font-semibold">
                                Unlock the
                                <HighlightText text={"Artist in You "} />
                                with Our Curated Art Collection
                            </div>
                        }
                        subheading={
                            "Our collection features stunning works by talented artists who pour their passion and creativity into every piece. Discover art that inspires and transforms your space."
                        }
                        ctabtn1={{
                            btnText: "Try it Yourself",
                            link: "/signup",
                            active: true,
                        }}
                        ctabtn2={{
                            btnText: "Preview Now",
                            link: "/signup",
                            active: false,
                        }}
                        codeColor={"text-yellow-25"}
                        codeblock={`<!DOCTYPE html>\n <html lang="en">\n<head>\n<title>This is myPage</title>\n</head>\n<body>\n<h1><a href="/">Header</a></h1>\n<nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>\n</nav>\n</body>`}
                        backgroundGradient={<div className="codeblock1 absolute"></div>}
                    />
                </div>

                {/* Code Section 2 */}
                <div>
                    <CodeBlocks
                        position={"lg:flex-row-reverse"}
                        heading={
                            <div data-aos="fade-left" className="w-[100%] text-4xl font-semibold lg:w-[50%]">
                                Start
                                <HighlightText text={" Collecting Art in Seconds"} />
                            </div>
                        }
                        subheading={
                            "Go ahead, explore our curated collection. Our easy-to-use platform allows you to start collecting stunning art from talented artists right away."
                        }
                        ctabtn1={{
                            btnText: "Continue Browsing",
                            link: "/signup",
                            active: true,
                        }}
                        ctabtn2={{
                            btnText: "Preview More",
                            link: "/signup",
                            active: false,
                        }}
                        codeColor={"text-white"}
                        codeblock={`import React from "react";\n import CTAButton from "./Button";\nimport TypeAnimation from "react-type";\nimport { FaArrowRight } from "react-icons/fa";\n\nconst Home = () => {\nreturn (\n<div>Home</div>\n)\n}\nexport default Home;`}
                        backgroundGradient={<div className="codeblock2 absolute"></div>}
                    />
                </div>

                {/* Explore Section */}
                {/* <ExploreMore /> */}
            </div>

            {/* Section 2 */}
            <div className="bg-pure-greys-5 text-richblack-700">
                <div className="homepage_bg h-[120px]">
                    {/* Explore Full Catagory Section */}
                    <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
                        <div className="lg:h-[30px]"></div>
                        <div className="flex flex-row gap-7 text-white lg:mt-4">
                            <CTAButton active={true} linkto={"/signup"}>
                                <div className="flex items-center gap-2">
                                    Explore Full Catalog
                                    <FaArrowRight />
                                </div>
                            </CTAButton>
                            <CTAButton active={false} linkto={"/login"}>
                                Preview More
                            </CTAButton>
                        </div>
                    </div>
                </div>

                <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
                    {/* Job that is in Demand - Section 1 */}
                    <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
                        <div className="text-4xl font-semibold lg:w-[45%] ">
                            Discover the Art {" "}
                            <HighlightText text={"That Speaks to You."} />
                        </div>
                        <div className="flex flex-col items-start gap-10 lg:w-[40%]">
                            <div className="text-[16px]">
                                Modern art defines your space and your style. Today, owning unique and inspiring art is more than just a passion; it's a way to make a statement.
                            </div>
                            <CTAButton active={true} linkto={"/signup"}>
                                <div className="">Preview More</div>
                            </CTAButton>
                        </div>
                    </div>

                    {/* Timeline Section - Section 2 */}
                    <TimelineSection />

                    {/* Learning Language Section - Section 3 */}
                    <LearningLanguageSection />
                </div>
            </div>

            {/* Section 3 */}

            {/* <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white"> */}
            {/* Become a instructor section */}
            {/* <InstructorSection /> */}

            {/* Reviws from Other Learner */}
            {/* <h1 className="text-center text-4xl font-semibold mt-8">
                    Reviews from other learners
                </h1> */}
            {/* <ReviewSlider /> */}
            {/* </div> */}

            {/* Footer */}
            {/* <Footer /> */}
        </>
    )
}

export default Home;