import React from "react"
import copy from "copy-to-clipboard"
import { toast } from "react-hot-toast"
import { BsFillCaretRightFill } from "react-icons/bs"
import { FaShareSquare } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { addToCart } from "../../../slices/cartSlice"
import { ACCOUNT_TYPE } from "../../../utils/constants"


function ArtImageDetailsCard({ artImage, setConfirmationModal, handleBuyArtImage }) {
    const { user } = useSelector((state) => state.profile)
    const { token } = useSelector((state) => state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {
        price: CurrentPrice,
        _id: artImageId,
    } = artImage

    const handleShare = () => {
        copy(window.location.href)
        toast.success("Link copied to clipboard")
    }

    const handleAddToCart = () => {
        if (user && user?.accountType === ACCOUNT_TYPE.ARTIST) {
            toast.error("You are an Artist. You can't buy a artImage.")
            return
        }
        if (token) {
            dispatch(addToCart(artImage))
            return
        }
        setConfirmationModal({
            text1: "You are not logged in!",
            text2: "Please login to add To Cart",
            btn1Text: "Login",
            btn2Text: "Cancel",
            btn1Handler: () => navigate("/login"),
            btn2Handler: () => setConfirmationModal(null),
        })
    }

    // console.log("Buyer already enrolled ", artImage?.buyerssEnroled, user?._id)
    const formattedPrice = isNaN(CurrentPrice) ? "Price not available" : `Rs. ${CurrentPrice}`;


    return (
        <>
            <div
                className={`flex flex-col gap-4 rounded-md bg-richblack-700 p-4 text-richblack-5`}
            >
                {/* ArtImage Image */}
                <img
                    src={artImage.artImage}
                    alt={artImage?.artImageName}
                    className="max-h-[300px] min-h-[180px] w-[400px] overflow-hidden rounded-2xl object-cover md:max-w-full"
                />

                <div className="px-4">
                    <div className="space-x-3 pb-4 text-3xl font-semibold">
                        Rs. {CurrentPrice}
                    </div>
                    <div className="flex flex-col gap-4">
                        <button
                            className="yellowButton rounded-md px-3 py-2 bg-yellow-50 text-richblack-900"
                            onClick={
                                user && artImage?.buyersEnrolled.includes(user?._id)
                                    ? () => navigate("/dashboard/enrolled-artImages")
                                    : handleBuyArtImage
                            }
                        >
                            {user && artImage?.buyersEnrolled.includes(user?._id)
                                ? "Go To ArtImage"
                                : "Buy Now"}
                        </button>
                        {(!user || !artImage?.buyersEnrolled.includes(user?._id)) && (
                            <button onClick={handleAddToCart} className="blackButton bg-yellow-50 px-3 py-2 rounded-md text-richblack-900">
                                Add to Cart
                            </button>
                        )}
                    </div>
                    <div>
                        <p className="pb-3 pt-6 text-center text-sm text-richblack-25">
                            30-Day Money-Back Guarantee
                        </p>
                    </div>

                    <div className={``}>
                        <p className={`my-2 text-xl font-semibold `}>
                            This ArtImage Includes :
                        </p>
                        <div className="flex flex-col gap-3 text-sm text-caribbeangreen-100">
                            {artImage?.instructions?.map((item, i) => {
                                return (
                                    <p className={`flex gap-2`} key={i}>
                                        <BsFillCaretRightFill />
                                        <span>{item}</span>
                                    </p>
                                )
                            })}
                        </div>
                    </div>
                    <div className="text-center">
                        <button
                            className="mx-auto flex items-center gap-2 py-6 text-yellow-100 "
                            onClick={handleShare}
                        >
                            <FaShareSquare size={15} /> Share
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ArtImageDetailsCard