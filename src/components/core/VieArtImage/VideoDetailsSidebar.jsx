import { useEffect, useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import IconBtn from "../../common/IconBtn";

export default function VideoDetailsSidebar({ setReviewModal }) {
    const [activeStatus, setActiveStatus] = useState("");
    const [videoBarActive, setVideoBarActive] = useState("");
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    // const { sectionId, subSectionId } = useParams();
    const {
        // artImageSectionData,
        artImageEntireData,
        // totalNoOfLectures,
        // completedLectures,
    } = useSelector((state) => state.viewArtImage);

    // useEffect(() => {
    //     (() => {
    //         setVideoBarActive(activeSubSectionId);
    //         if (!artImageSectionData.length) return;
    //         const currentSectionIndx = artImageSectionData.findIndex(
    //             (data) => data._id === sectionId
    //         );
    //         const currentSubSectionIndx = artImageSectionData?.[
    //             currentSectionIndx
    //         ]?.subSection.findIndex((data) => data._id === subSectionId);
    //         const activeSubSectionId =
    //             artImageSectionData[currentSectionIndx]?.subSection?.[
    //                 currentSubSectionIndx
    //             ]?._id;
    //         setActiveStatus(artImageSectionData?.[currentSectionIndx]?._id);
    //     })();
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [artImageSectionData, artImageEntireData, location.pathname]);

    return (
        <>
            <div>
                {
                    open ? (<div className="flex h-[calc(100vh-3.8rem)] w-[320px] max-w-[350px] flex-col border-r-[1px] border-r-richblack-700 bg-richblack-800">
                        <div className="mx-5 flex flex-col items-start justify-between gap-2 gap-y-4 border-b border-richblack-600 py-5 text-lg font-bold text-richblack-25">
                            <div className="flex w-full items-center justify-between ">
                                <div
                                    onClick={() => setOpen(!open)}
                                    className="flex h-[35px] w-[35px] items-center justify-center rounded-full bg-richblack-100 p-1 text-richblack-700 hover:scale-90"
                                    title="back"
                                >
                                    <IoIosArrowBack size={30} />
                                </div>
                                <IconBtn
                                    text="Add Review"
                                    customClasses="ml-auto"
                                    onclick={() => setReviewModal(true)}
                                />
                            </div>
                            <div className="flex flex-col">
                                <p>{artImageEntireData?.artImageName}</p>
                                {/* <p className="text-sm font-semibold text-richblack-500">
                                    {completedLectures?.length} / {totalNoOfLectures}
                                </p> */}
                            </div>
                        </div>

                        {/* <div className="h-[calc(100vh - 5rem)] overflow-y-auto">
                            {artImageSectionData.map((artImage, index) => (
                                <div
                                    className="mt-2 cursor-pointer text-sm text-richblack-5"
                                    onClick={() => setActiveStatus(artImage?._id)}
                                    key={index}
                                >
                                    Section
                                    <div className="flex flex-row justify-between bg-richblack-600 px-5 py-4">
                                        <div className="w-[70%] font-semibold">
                                            {artImage?.sectionName}
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span
                                                className={`transition-all duration-500`}
                                            >
                                                {
                                                    activeStatus === artImage?.sectionName ? (<BsChevronDown />) : (<BsChevronUp />)
                                                }
                                            </span>
                                        </div>
                                    </div>

                                    Sub Sections
                                    {activeStatus === artImage?._id && (
                                        <div className="transition-[height] duration-500 ease-in-out">
                                            {artImage.subSection.map((topic, i) => (
                                                <div
                                                    className={`flex gap-3  px-5 py-2 ${videoBarActive === topic._id
                                                        ? "bg-yellow-200 font-semibold text-richblack-800"
                                                        : "hover:bg-richblack-900"
                                                        } `}
                                                    key={i}
                                                    onClick={() => {
                                                        navigate(
                                                            `/view-artImage/${artImageEntireData?._id}/section/${artImage?._id}/sub-section/${topic?._id}`
                                                        );
                                                        setVideoBarActive(topic._id);
                                                    }}
                                                >
                                                    <input
                                                        type="checkbox"
                                                        checked={completedLectures.includes(topic?._id)}
                                                        onChange={() => { }}
                                                    />
                                                    {topic.title}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div> */}

                    </div>
                    ):(
                        <div onClick={() => setOpen(!open)} className="flex h-[35px] my-2 mx-2 w-[35px] items-center justify-center rounded-full bg-richblack-100 p-1 text-richblack-700 hover:scale-90"><IoIosArrowForward size={30} /></div>)
                }
            </div>
        </>
    );
}