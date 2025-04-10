import { useEffect, useState } from "react"
import { VscAdd } from "react-icons/vsc"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { fetchArtistArtImages } from "../../../services/operations/artImageDetailsAPI"
import IconBtn from "../../common/IconBtn"
import ArtImagesTable from "./ArtistArtImages/ArtImagesTable"

export default function MyArtImages() {
    const { token } = useSelector((state) => state.auth)
    const navigate = useNavigate()
    const [artImages, setArtImages] = useState([])

    useEffect(() => {
        const fetchArtImages = async () => {
            const result = await fetchArtistArtImages(token)
            if (result) {
                setArtImages(result)
            }
        }
        fetchArtImages()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    console.log("Result is : ",artImages);
    return (
        <div>
            <div className="mb-14 flex w-full items-center justify-between">
                <h1 className="text-3xl w-full font-medium text-richblack-5 mt-10 md:mt-0">My ArtImages</h1>
                <IconBtn
                    text="Add ArtImage"
                    onclick={() => navigate("/dashboard/add-images")}
                >
                    <VscAdd />
                </IconBtn>
            </div>
            {artImages && <ArtImagesTable artImages={artImages} setArtImages={setArtImages} />}
        </div>
    )
}