import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { editArtImageDetails } from "../../../../../services/operations/artImageDetailsAPI"
import { resetArtImageState, setStep } from "../../../../../slices/artImageSlice"
import { ARTIMAGES_STATUS } from "../../../../../utils/constants"
import IconBtn from "../../../../common/IconBtn"

export default function PublishArtImage() {
    const { register, handleSubmit, setValue, getValues } = useForm()

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { token } = useSelector((state) => state.auth)
    const { artImage } = useSelector((state) => state.artImage)
    const [loading, setLoading] = useState(false)

    console.log("inside index of publicsh : ", artImage)

    useEffect(() => {
        if (artImage?.status === ARTIMAGES_STATUS.PUBLISHED) {
            setValue("public", true)
        }
    }, [])

    const goBack = () => {
        dispatch(setStep(1))
    }

    const goToArtImages = () => {
        dispatch(resetArtImageState())
        navigate("/dashboard/my-images")
    }

    const handleArtImagePublish = async () => {
        // check if form has been updated or not
        if (
            (artImage?.status === ARTIMAGES_STATUS.PUBLISHED &&
                getValues("public") === true) ||
            (artImage?.status === ARTIMAGES_STATUS.DRAFT && getValues("public") === false)
        ) {
            // form has not been updated
            // no need to make api call
            goToArtImages()
            return
        }
        const formData = new FormData()
        formData.append("artImageId", artImage._id)
        console.log(artImage._id);
        const artImageStatus = getValues("public")
            ? ARTIMAGES_STATUS.PUBLISHED
            : ARTIMAGES_STATUS.DRAFT
        formData.append("status", artImageStatus)
        setLoading(true)
        const result = await editArtImageDetails(formData, token)
        if (result) {
            goToArtImages()
        }
        setLoading(false)
    }

    const onSubmit = (data) => {
        // console.log(data)
        handleArtImagePublish()
    }

    return (
        <div className="rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6">
            <p className="text-2xl font-semibold text-richblack-5">
                Publish Settings
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Checkbox */}
                <div className="my-6 mb-8">
                    <label htmlFor="public" className="inline-flex items-center text-lg">
                        <input
                            type="checkbox"
                            id="public"
                            {...register("public")}
                            className="border-gray-300 h-4 w-4 rounded bg-richblack-500 text-richblack-400 focus:ring-2 focus:ring-richblack-5"
                        />
                        <span className="ml-2 text-richblack-400">
                            Make this artImage as public
                        </span>
                    </label>
                </div>

                {/* Next Prev Button */}
                <div className="ml-auto flex max-w-max items-center gap-x-4">
                    <button
                        disabled={loading}
                        type="button"
                        onClick={goBack}
                        className="flex cursor-pointer items-center gap-x-2 rounded-md bg-richblack-300 py-[8px] px-[20px] font-semibold text-richblack-900"
                    >
                        Back
                    </button>
                    {/* <IconBtn disabled={loading} text="Save Changes" /> */}
                    <button className="bg-yellow-50 font-semibold px-3 py-2 rounded-md">Save Changes</button>
                </div>
            </form>
        </div>
    )
}