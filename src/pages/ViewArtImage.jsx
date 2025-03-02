import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet, useParams } from "react-router-dom"

import ArtImageReviewModal from "../components/core/VieArtImage/ArtImageReviewModal"
import VideoDetailsSidebar from "../components/core/VieArtImage/VideoDetailsSidebar"
import { getFullDetailsOfArtImage } from "../services/operations/artImageDetailsAPI"
import {
    // setCompletedLectures,
    // setArtImageSectionData,
    setEntireArtImageData,
    // setTotalNoOfLectures,
} from "../slices/viewArtImageSlice"

export default function ViewArtImage() {
    const { artImageId } = useParams()
    const { token } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const [reviewModal, setReviewModal] = useState(false)

    useEffect(() => {
        ; (async () => {
            const artImageData = await getFullDetailsOfArtImage(artImageId, token)
            // console.log("ArtImage Data here... ", artImageData.artImageDetails)
            // dispatch(setArtImageSectionData(artImageData.artImageDetails.artImageContent))
            dispatch(setEntireArtImageData(artImageData.artImageDetails))
            // dispatch(setCompletedLectures(artImageData.completedVideos))
            // let lectures = 0
            // artImageData?.artImageDetails?.artImageContent?.forEach((sec) => {
            //     lectures += sec.subSection.length
            // })
            // dispatch(setTotalNoOfLectures(lectures))
        })()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <div className="relative flex min-h-[calc(100vh-3.5rem)]">
                <VideoDetailsSidebar setReviewModal={setReviewModal} />
                <div className="h-[calc(100vh-3.5rem)] flex-1 overflow-auto">
                    <div className="mx-6">
                        <Outlet />
                    </div>
                </div>
            </div>
            {reviewModal && <ArtImageReviewModal setReviewModal={setReviewModal} />}
        </>
    )
}



// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setEntireArtImageData } from "../slices/viewArtImageSlice"; // Adjust path accordingly
// import { getFullDetailsOfArtImage } from "../services/operations/artImageDetailsAPI"; // Import API function
// import ArtImageReviewModal from "../components/core/VieArtImage/ArtImageReviewModal"
// import VideoDetailsSidebar from "../components/core/VieArtImage/VideoDetailsSidebar"
// import { Outlet } from "react-router-dom";

// const ArtImageDetails = ({ artImageId, token }) => {
//     const dispatch = useDispatch();
//     const artImageDetails = useSelector((state) => state.artImage.entireArtImageData);

//     const [reviewModal, setReviewModal] = useState(false);

//     useEffect(() => {
//         (async () => {
//             const artImageData = await getFullDetailsOfArtImage(artImageId, token);
//             dispatch(setEntireArtImageData(artImageData.artImageDetails));
//         })();
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [artImageId, token]);

//     return (
//         <>
//             <div className="relative flex min-h-[calc(100vh-3.5rem)]">
//                 <VideoDetailsSidebar setReviewModal={setReviewModal} />
//                 <div className="h-[calc(100vh-3.5rem)] flex-1 overflow-auto">
//                     <div className="mx-6">
//                         <Outlet />
//                         {artImageDetails ? (
//                             <div className="p-4 border rounded-lg shadow-lg">
//                                 <h2 className="text-xl font-bold">{artImageDetails.title}</h2>
//                                 <img src={artImageDetails.imageUrl} alt="Art" className="w-full max-w-lg my-4 rounded-lg" />
//                                 <p className="text-gray-700">{artImageDetails.description}</p>
//                                 <ul className="mt-2">
//                                     {artImageDetails.tags?.map((tag, index) => (
//                                         <li key={index} className="inline-block bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-sm mr-2">
//                                             {tag}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         ) : (
//                             <p>Loading art details...</p>
//                         )}
//                     </div>
//                 </div>
//             </div>
//             {reviewModal && <ArtImageReviewModal setReviewModal={setReviewModal} />}
//         </>
//     );
// };

// export default ArtImageDetails;
