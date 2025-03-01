import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { fetchArtistArtImages } from '../../../../services/operations/artImageDetailsAPI';
import { getArtistData } from '../../../../services/operations/profileAPI';
import ArtistChart from './ArtistChart';
import { Link } from 'react-router-dom';

export default function Artist() {
    const { token } = useSelector((state) => state.auth)
    const { user } = useSelector((state) => state.profile)
    const [loading, setLoading] = useState(false)
    const [artistData, setArtistData] = useState(null)
    const [artImages, setArtImages] = useState([])

    useEffect(() => {
        ; (async () => {
            setLoading(true)
            const artistApiData = await getArtistData(token)
            const result = await fetchArtistArtImages(token)
            console.log(artistApiData)
            if (artistApiData.length) setArtistData(artistApiData)
            if (result) {
                setArtImages(result)
            }
            setLoading(false)
        })()
    }, [])

    const totalAmount = artistData?.reduce(
        (acc, curr) => acc + curr.totalAmountGenerated,
        0
    )

    const totalBuyers = artistData?.reduce(
        (acc, curr) => acc + curr.totalBuyersEnrolled,
        0
    )

    return (
        <div>
            <div className="space-y-2 mt-12">
                <h1 className="text-2xl font-bold text-richblack-5">
                    Hi {user?.firstName} 👋
                </h1>
                <p className="font-medium text-richblack-200">
                    Let's start something new
                </p>
            </div>
            {loading ? (
                <div className="spinner"></div>
            ) : artImages.length > 0 ? (
                <div>
                    <div className="my-4 flex md:flex-row flex-col h-[600px] md:h-[450px] md:space-x-4 ">
                        {/* Render chart / graph */}
                        {totalAmount > 0 || totalBuyers > 0 ? (
                            <ArtistChart artImages={artistData} />
                        ) : (
                            <div className="flex-1 rounded-md bg-richblack-800 p-6">
                                <p className="text-lg font-bold text-richblack-5">Visualize</p>
                                <p className="mt-4 text-xl font-medium text-richblack-50">
                                    Not Enough Data To Visualize
                                </p>
                            </div>
                        )}
                        {/* Total Statistics */}
                        <div className="flex md:mt-0 mx-auto mt-6 min-w-[300px] flex-col rounded-md bg-richblack-800 p-6">
                            <p className="text-lg font-bold text-richblack-5">Statistics</p>
                            <div className="mt-4 space-y-4">
                                <div>
                                    <p className="text-lg text-richblack-200">Total ArtImages</p>
                                    <p className="text-3xl font-semibold text-richblack-50">
                                        {artImages.length}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-lg text-richblack-200">Total Buyers</p>
                                    <p className="text-3xl font-semibold text-richblack-50">
                                        {totalBuyers}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-lg text-richblack-200">Total Income</p>
                                    <p className="text-3xl font-semibold text-richblack-50">
                                        Rs. {totalAmount}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-md bg-richblack-800 md:mt-0 mt-[200px] p-6">
                        {/* Render 3 artImages */}
                        <div className="flex items-center justify-between">
                            <p className="text-lg font-bold text-richblack-5">Your ArtImages</p>
                            <Link to="/dashboard/my-artImages">
                                <p className="text-xs font-semibold text-yellow-50">View All</p>
                            </Link>
                        </div>
                        <div className="my-4 flex md:flex-row flex-col w-full items-start md:space-x-6 space-y-5 md:space-y-0">
                            {artImages.slice(0, 3).map((artImage) => (
                                <div key={artImage._id} className="md:w-1/3 w-full">
                                    <img
                                        src={artImage.thumbnail}
                                        alt={artImage.artImageName}
                                        className="h-[201px] w-[100%] md:w-full rounded-md object-cover"
                                    />
                                    <div className="mt-3 w-full">
                                        <p className="text-sm font-medium text-richblack-50">
                                            {artImage.artImageName}
                                        </p>
                                        <div className="mt-1 flex items-center space-x-2">
                                            <p className="text-xs font-medium text-richblack-300">
                                                {artImage.buyersEnrolled.length} buyers
                                            </p>
                                            <p className="text-xs font-medium text-richblack-300">
                                                |
                                            </p>
                                            <p className="text-xs font-medium text-richblack-300">
                                                Rs. {artImage.price}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div className="mt-20 rounded-md bg-richblack-800 p-6 py-20">
                    <p className="text-center text-2xl font-bold text-richblack-5">
                        You have not created any artImages yet
                    </p>
                    <Link to="/dashboard/add-artImage">
                        <p className="mt-1 text-center text-lg font-semibold text-yellow-50">
                            Create a artImage
                        </p>
                    </Link>
                </div>
            )}
        </div>
    )
}