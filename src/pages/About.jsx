import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import FoundingStory from "../assets/Images/FoundingStory.png"
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"
import ContactFormSection from "../components/core/AboutPage/ContactFormSection"
import LearningGrid from "../components/core/AboutPage/LearningGrid"
import Quote from "../components/core/AboutPage/Quote"
import StatsComponenet from "../components/core/AboutPage/Stats"
import HighlightText from "../components/core/HomePage/HighlightText"
import ReviewSlider from "../components/common/ReviewSlider"
import Footer from "../components/common/Footer"

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
        AOS.refresh();
    }, []);
    return (
        <div>
            <section className="bg-richblack-700">
                <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
                    <header data-aos="zoom-in" className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
                        Transforming the World of Art for a
                        <HighlightText text={"Creative Future"} />
                        <p data-aos="zoom-in-down" className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
                            ArtistryHub is leading the way in revolutionizing the art-selling experience. We're passionate about shaping a creative future by showcasing exceptional artwork, leveraging innovative technology, and building a thriving community of art enthusiasts.
                        </p>
                    </header>
                    <div className="sm:h-[70px] lg:h-[150px]"></div>
                    <div className="absolute bottom-0 left-[50%] w-full translate-x-[-45%] translate-y-[30%] grid grid-cols-3 gap-2 lg:gap-4 p-3 lg:p-5 ml-4 lg:ml-10">
                        <img
                            data-aos="flip-right"
                            src={BannerImage1}
                            alt=""
                            className="object-cover w-[220px] h-[220px] lg:w-[300px] lg:h-[300px]"
                        />
                        <img
                            data-aos="flip-right"
                            src={BannerImage2}
                            alt=""
                            className="object-cover w-[220px] h-[220px] lg:w-[300px] lg:h-[300px]"
                        />
                        <img
                            data-aos="flip-right"
                            src={BannerImage3}
                            alt=""
                            className="object-cover w-[220px] h-[220px] lg:w-[300px] lg:h-[300px]"
                        />
                    </div>
                </div>
            </section>


            <section className="border-b border-richblack-700">
                <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
                    <div className="h-[100px] "></div>
                    <Quote />
                </div>
            </section>

            <section>
                <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
                    <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
                        <div className="my-24 flex lg:w-[50%] flex-col gap-10">
                            <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                                Our Founding Story
                            </h1>
                            <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                                Our art-selling platform was born out of a shared vision and passion for transforming the way people experience and acquire art. It all began with a group of artists, curators, and art enthusiasts who recognized the need for accessible, diverse, and high-quality art in a rapidly evolving digital world.
                            </p>
                            <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                                As passionate art lovers ourselves, we witnessed firsthand the barriers and challenges of traditional art markets. We believed that art should not be limited to galleries or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and connect individuals from all walks of life to the beauty and inspiration of art.
                            </p>
                        </div>

                        <div>
                            <img
                                src={FoundingStory}
                                alt=""
                                className="w-[350px] h-[250px] lg:w-[500px] lg:h-[300px] object-contain shadow-[0_0_20px_0] shadow-[#FC6767]"
                            />


                        </div>
                    </div>
                    <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
                        <div className="my-24 flex lg:w-[40%] flex-col gap-10">
                            <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                                Our Vision
                            </h1>
                            <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                                With this vision in mind, we embarked on a journey to create a platform that would revolutionize the way people discover and acquire art. Our team of passionate experts worked tirelessly to develop a seamless and intuitive platform that combines innovative technology with a curated collection of exceptional artworks, fostering a vibrant and inspiring art experience for everyone.
                            </p>
                        </div>
                        <div className="my-24 flex lg:w-[40%] flex-col gap-10">
                            <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
                                Our Mission
                            </h1>
                            <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                                Our mission goes beyond just showcasing and selling art. We aim to create a vibrant community of art lovers and creators, where individuals can connect, collaborate, and inspire one another. We believe that creativity thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through artist features, live exhibitions, and interactive events.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <StatsComponenet />
            <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
                <LearningGrid />
                <ContactFormSection />
            </section>

            <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
                {/* Reviws from Other Learner */}
                <h1 className="text-center text-4xl font-semibold mt-8">
                    Reviews from other learners
                </h1>
                {/* <ReviewSlider /> */}
                {/* <ReviewSlider /> */}
            </div>
            {/* <Footer /> */}
            <Footer />
        </div>
    )
}

export default About