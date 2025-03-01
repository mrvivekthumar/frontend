import { useEffect, useState } from "react"
import ProgressBar from "@ramonak/react-progress-bar"
import { BiDotsVerticalRounded } from "react-icons/bi"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { getUserEnrolledArtImages } from "../../../services/operations/profileAPI"

export default function EnrolledArtImages() {
    const { token } = useSelector((state) => state.auth)
    const navigate = useNavigate()

    const [enrolledArtImages, setEnrolledArtImages] = useState(null)
    const getEnrolledArtImages = async () => {
        try {
            const res = await getUserEnrolledArtImages(token);

            setEnrolledArtImages(res);
        } catch (error) {
            console.log("Could not fetch enrolled artImages.")
        }
    };
    useEffect(() => {
        getEnrolledArtImages();
    }, [])

    return (
        <>
            <div className="text-3xl ml-12 md:ml-0 text-richblack-50">Enrolled ArtImages</div>
            {!enrolledArtImages ? (
                <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
                    <div className="spinner"></div>
                </div>
            ) : !enrolledArtImages.length ? (
                <p className="grid h-[10vh] w-full place-content-center text-richblack-5">
                    You have not enrolled in any artImage yet.
                    {/* TODO: Modify this Empty State */}
                </p>
            ) : (
                <div className="my-8 text-richblack-5">
                    {/* Headings */}
                    <div className="flex rounded-t-lg bg-richblack-500">
                        <p className="w-[45%] px-5 py-3">ArtImage Name</p>
                        {/* <p className="w-1/4 px-2 py-3">Duration</p> */}
                        {/* <p className="flex-1 px-2 py-3">Progress</p> */}
                    </div>

                    {/* ArtImage Names */}

                    {enrolledArtImages.map((artImage, i, arr) => (
                        <div
                            className={`flex items-center border border-richblack-700 ${i === arr.length - 1 ? "rounded-b-lg" : "rounded-none"
                                }`}
                            key={i}
                        >
                            <div
                                className="flex md:flex-row flex-col w-[45%] cursor-pointer items-center gap-4 px-5 py-3"
                                onClick={() => {
                                    navigate(
                                        `/view-artImage/${artImage?._id}/section/${artImage.artImageContent?.[0]?._id}/sub-section/${artImage.artImageContent?.[0]?.subSection?.[0]?._id}`
                                    )
                                }}
                            >
                                <img
                                    src={artImage.thumbnail}
                                    alt="artImage_img"
                                    className="md:h-14 md:w-14 w-[120px] rounded-lg object-cover"
                                />
                                <div className="flex max-w-xs flex-col gap-2">
                                    <p className="font-semibold">{artImage.artImageName}</p>
                                    <p className="text-xs text-richblack-300">
                                        {artImage.artImageDescription.length > 50
                                            ? `${artImage.artImageDescription.slice(0, 50)}...`
                                            : artImage.artImageDescription}
                                    </p>
                                </div>
                            </div>
                            <div className="w-1/4 px-2 py-3">{artImage?.totalDuration}</div>
                            <div className="flex w-1/5 flex-col gap-2 px-2 py-3">
                                <p>Progress: {artImage.progressPercentage || 0}%</p>
                                <ProgressBar
                                    completed={artImage.progressPercentage || 0}
                                    height="8px"
                                    isLabelVisible={false}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}