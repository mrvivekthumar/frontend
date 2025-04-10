import React, { useEffect, useState } from "react"
import { BiInfoCircle } from "react-icons/bi"
import { HiOutlineGlobeAlt } from "react-icons/hi"
import Markdown from 'react-markdown'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"

import ConfirmationModal from "../components/common/ConfirmationModal"
import Footer from "../components/common/Footer"
import RatingStars from "../components/common/RatingStars"
import ArtImageAccordionBar from "../components/core/ArtImage/ArtImageAccordianBar"
import ArtImageDetailsCard from "../components/core/ArtImage/ArtImageDetailsCard"
import { formatDate } from "../services/formatDate"
import { fetchArtImageDetails } from "../services/operations/artImageDetailsAPI"
import { buyArtImage } from "../services/operations/buyerFeaturesAPI"
import GetAvgRating from "../utils/avgRating"
import Error from "./Error"

function ArtImageDetails() {
    const { user } = useSelector((state) => state.profile)
    const { token } = useSelector((state) => state.auth)
    const { loading } = useSelector((state) => state.profile)
    const { paymentLoading } = useSelector((state) => state.artImage)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // Getting artImageId from url parameter
    const { artImageId } = useParams()
    console.log(`artImage id: ${artImageId}`)

    // Declear a state to save the artImage details
    const [response, setResponse] = useState(null)
    const [confirmationModal, setConfirmationModal] = useState(null)
    useEffect(() => {
        // Calling fetchArtImageDetails fucntion to fetch the details
        ; (async () => {
            try {
                const res = await fetchArtImageDetails(artImageId)
                // console.log("artImage details res: ", res)
                setResponse(res)
            } catch (error) {
                console.log("Could not fetch ArtImage Details")
            }
        })()
    }, [artImageId])

    console.log("response: ", response)

    // Calculating Avg Review count
    const [avgReviewCount, setAvgReviewCount] = useState(0)
    useEffect(() => {
        const count = GetAvgRating(response?.data?.ratingAndReviews)
        setAvgReviewCount(count)
    }, [response])

    console.log("avgReviewCount: ", avgReviewCount)

    // Collapse all
    // const [collapse, setCollapse] = useState("");

    const [isActive, setIsActive] = useState(Array(0))
    const handleActive = (id) => {
        // console.log("called", id)
        setIsActive(
            !isActive.includes(id)
                ? isActive.concat([id])
                : isActive.filter((e) => e != id)
        )
    }

    // Total number of lectures
    const [totalNoOfLectures, setTotalNoOfLectures] = useState(0)
    // useEffect(() => {
    //     let lectures = 0
    //     response?.data?.artImageDetails?.artImageContent?.forEach((sec) => {
    //         lectures += sec.subSection.length || 0
    //     })
    //     setTotalNoOfLectures(lectures)
    // }, [response])

    if (loading || !response) {
        return (
            <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
                <div className="spinner"></div>
            </div>
        )
    }
    if (!response.success) {
        return <Error />
    }

    const {
        artImageName,
        artImageDescription,
        price,
        ratingAndReviews,
        artist,
        buyersEnrolled,
        createdAt,
    } = response.data

    const handleBuyArtImage = () => {
        if (token) {
            buyArtImage(token, [artImageId], user, navigate, dispatch)
            return
        }
        setConfirmationModal({
            text1: "You are not logged in!",
            text2: "Please login to Purchase ArtImage.",
            btn1Text: "Login",
            btn2Text: "Cancel",
            btn1Handler: () => navigate("/login"),
            btn2Handler: () => setConfirmationModal(null),
        })
    }

    if (paymentLoading) {
        // console.log("payment loading")
        return (
            <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
                <div className="spinner"></div>
            </div>
        )
    }

    console.log("Artist Details : ", artist);

    return (
        <>
            <div className={`relative w-full bg-richblack-800`}>
                {/* Hero Section */}
                <div className="mx-auto box-content px-4 lg:w-[1260px] 2xl:relative ">
                    <div className="mx-auto grid min-h-[450px] max-w-maxContentTab justify-items-center py-8 lg:mx-0 lg:justify-items-start lg:py-0 xl:max-w-[810px]">
                        <div className="relative block max-h-[30rem] lg:hidden">
                            <div className="absolute bottom-0 left-0 h-full w-full shadow-[#161D29_0px_-64px_36px_-28px_inset]"></div>
                            {/* <img
                                src={thumbnail}
                                alt="artImage thumbnail"
                                className="aspect-auto w-full"
                            /> */}
                        </div>
                        <div
                            className={`z-30 my-5 flex flex-col justify-center gap-4 py-5 text-lg text-richblack-5 lg:w-7/12 lg:pr-8`}
                        >
                            <div>
                                <p className="text-4xl font-bold text-richblack-5 sm:text-[42px]">
                                    {artImageName}
                                </p>
                            </div>
                            <p className={`text-richblack-200`}>{artImageDescription}</p>
                            <div className="text-md flex flex-wrap items-center gap-2">
                                <span className="text-yellow-25">{isNaN(avgReviewCount) ? 'N/A' : avgReviewCount}</span>
                                <RatingStars Review_Count={isNaN(avgReviewCount) ? 0 : avgReviewCount} Star_Size={24} />
                                <span>{isNaN(ratingAndReviews.length) ? 'N/A' : `${ratingAndReviews.length} reviews`}</span>
                                <span>{isNaN(buyersEnrolled.length) ? 'N/A' : `${buyersEnrolled.length} buyers enrolled`}</span>
                            </div>
                            <div>
                                <p className="">
                                    Created By {`${artist.firstname} ${artist.lastname}`}
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-5 text-lg">
                                <p className="flex items-center gap-2">
                                    {" "}
                                    <BiInfoCircle /> Created at {formatDate(createdAt)}
                                </p>
                                <p className="flex items-center gap-2">
                                    {" "}
                                    <HiOutlineGlobeAlt /> English
                                </p>
                            </div>
                        </div>
                        <div className="hidden lg:block lg:w-5/12 lg:pl-8">
                            <div className="flex flex-col gap-4 border-y border-y-richblack-500 py-4">
                                <p className="space-x-3 pb-4 text-3xl font-semibold text-richblack-5">
                                    Rs. {price}
                                </p>
                                <button className="yellowButton" onClick={handleBuyArtImage}>
                                    Buy Now
                                </button>
                                <button className="blackButton">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    {/* ArtImages Card */}
                    <div className="right-[1rem] top-[60px] mx-auto hidden min-h-[600px] w-1/3 max-w-[410px] translate-y-24 md:translate-y-0 lg:absolute lg:block">
                        <ArtImageDetailsCard
                            artImage={response?.data}
                            setConfirmationModal={setConfirmationModal}
                            handleBuyArtImage={handleBuyArtImage}
                        />
                    </div>
                </div>
            </div>
            <div className="mx-auto box-content px-4 text-start text-richblack-5 lg:w-[1260px]">
                <div className="mx-auto max-w-maxContentTab lg:mx-0 xl:max-w-[810px]">
                    {/* What will you learn section */}
                    {/* <div className="my-8 border border-richblack-600 p-8">
                        <p className="text-3xl font-semibold">What you'll learn</p>
                        <div className="mt-5">
                            <Markdown>{whatYouWillLearn}</Markdown>
                        </div>
                    </div> */}

                    {/* ArtImage Content Section */}
                    <div className="max-w-[830px] ">
                        {/* <div className="flex flex-col gap-3">
                            <p className="text-[28px] font-semibold">ArtImage Content</p>
                            <div className="flex flex-wrap justify-between gap-2">
                                <div className="flex gap-2">
                                    <span>
                                        {artImageContent?.length || "length"} {`section(s)`}
                                    </span>
                                    <span>
                                        {totalNoOfLectures} {`lecture(s)`}
                                    </span>
                                    <span>{response.data?.totalDuration} total length</span>
                                </div>
                                <div>
                                    <button
                                        className="text-yellow-25"
                                        onClick={() => setIsActive([])}
                                    >
                                        Collapse all sections
                                    </button>
                                </div>
                            </div>
                        </div> */}

                        {/* ArtImage Details Accordion
                        <div className="py-4">
                            {artImageContent?.map((artImage, index) => (
                                <ArtImageAccordionBar
                                    artImage={artImage}
                                    key={index}
                                    isActive={isActive}
                                    handleActive={handleActive}
                                />
                            ))}
                        </div> */}

                        {/* Author Details */}
                        <div className="mb-12 py-4">
                            <p className="text-[28px] font-semibold">Author</p>
                            <div className="flex items-center gap-4 py-4">
                                <img
                                    src={
                                        artist.image
                                            ? artist.image
                                            : `https://api.dicebear.com/5.x/initials/svg?seed=${artist.firstname} ${artist.lastname}`
                                    }
                                    alt="Author"
                                    className="h-14 w-14 rounded-full object-cover"
                                />
                                <p className="text-lg">{`${artist.firstname} ${artist.lastname}`}</p>
                            </div>
                            <p className="text-richblack-50">
                                {artist?.additionalDetails?.about}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
        </>
    )
}

export default ArtImageDetails


