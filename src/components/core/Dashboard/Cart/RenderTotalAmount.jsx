import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import IconBtn from "../../../common/IconBtn"
import { buyArtImage } from "../../../../services/operations/buyerFeaturesAPI"

export default function RenderTotalAmount() {
    const { total, cart } = useSelector((state) => state.cart)
    const { token } = useSelector((state) => state.auth)
    const { user } = useSelector((state) => state.profile)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleBuyArtImage = () => {
        const artImages = cart.map((artImage) => artImage._id)
        buyArtImage(token, artImages, user, navigate, dispatch)
    }

    return (
        <div className="min-w-[280px] rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6">
            <p className="mb-1 text-sm font-medium text-richblack-300">Total:</p>
            <p className="mb-6 text-3xl font-medium text-yellow-100">₹ {total}</p>
            {/* <IconBtn
        text="Buy Now"
        onclick={handleBuyArtImage}
        customClasses="w-full bg-yellow-50 justify-center"
      /> */}

            <button onClick={handleBuyArtImage} className="bg-yellow-50 font-semibold rounded-md px-3 py-2">
                Buy Now
            </button>
        </div>
    )
}