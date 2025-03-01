import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import {
    fetchArtImageDetails,
    getFullDetailsOfArtImage,
} from "../../../../services/operations/artImageDetailsAPI"
import { setArtImage, setEditArtImage } from "../../../../slices/artImageSlice"
import RenderSteps from "../AddArtImage/RenderSteps"

export default function EditArtImage() {
    const dispatch = useDispatch()
    const { artImageId } = useParams()
    const { artImage } = useSelector((state) => state.artImage)
    const [loading, setLoading] = useState(false)
    const { token } = useSelector((state) => state.auth)

    useEffect(() => {
        ; (async () => {
            setLoading(true)
            const result = await getFullDetailsOfArtImage(artImageId, token)
            if (result?.artImageDetails) {
                dispatch(setEditArtImage(true))
                dispatch(setArtImage(result?.artImageDetails))
            }
            setLoading(false)
        })()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (loading) {
        return (
            <div className="grid flex-1 place-items-center">
                <div className="spinner"></div>
            </div>
        )
    }

    return (
        <div>
            <h1 className="mb-14 text-3xl font-medium text-richblack-5">
                Edit ArtImage
            </h1>
            <div className="mx-auto max-w-[600px]">
                {artImage ? (
                    <RenderSteps />
                ) : (
                    <p className="mt-14 text-center text-3xl font-semibold text-richblack-100">
                        ArtImage not found
                    </p>
                )}
            </div>
        </div>
    )
}