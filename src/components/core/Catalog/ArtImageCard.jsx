import React, { useEffect, useState } from 'react'
import RatingStars from '../../common/RatingStars'
import GetAvgRating from '../../../utils/avgRating';
import { Link } from 'react-router-dom';

const ArtImage_Card = ({ artImage, Height }) => {

    const [avgReviewCount, setAvgReviewCount] = useState(0);

    useEffect(() => {
        const count = GetAvgRating(artImage.ratingAndReviews);
        setAvgReviewCount(count);
    }, [artImage])

    return (
        <>
            <Link to={`/artImages/${artImage._id}`}>
                <div className="">
                    <div className="rounded-lg">
                        <img
                            src={artImage?.artImage}
                            alt="artImage"
                            className={`${Height} w-full rounded-xl object-cover `}
                        />
                    </div>
                    <div className="flex flex-col gap-2 px-1 py-3">
                        <p className="text-xl text-richblack-5">{artImage?.artImageName}</p>
                        <p className="text-sm text-richblack-50">
                            {artImage?.artist?.firstName} {artImage?.artist?.lastName}
                        </p>
                        <div className="flex items-center gap-2">
                            <span className="text-yellow-5">{avgReviewCount || 0}</span>
                            <RatingStars Review_Count={avgReviewCount} />
                            <span className="text-richblack-400">
                                {artImage?.ratingAndReviews?.length} Ratings
                            </span>
                        </div>
                        <p className="text-xl text-richblack-5">Rs. {artImage?.price}</p>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default ArtImage_Card