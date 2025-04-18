import { useDispatch, useSelector } from "react-redux"
import { Table, Tbody, Td, Th, Thead, Tr } from "react-super-responsive-table"
import { setArtImage, setEditArtImage } from "../../../../slices/artImageSlice"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"
import { useState } from "react"
import { FaCheck } from "react-icons/fa"
import { FiEdit2 } from "react-icons/fi"
import { HiClock } from "react-icons/hi"
import { RiDeleteBin6Line } from "react-icons/ri"
import { useNavigate } from "react-router-dom"
import { formatDate } from "../../../../services/formatDate"
import { deleteArtImage, fetchArtistArtImages } from "../../../../services/operations/artImageDetailsAPI"
import { ARTIMAGES_STATUS } from "../../../../utils/constants"
import ConfirmationModal from "../../../common/ConfirmationModal"

export default function ArtImagesTable({ artImages, setArtImages }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { token } = useSelector((state) => state.auth)
    const [loading, setLoading] = useState(false)
    const [confirmationModal, setConfirmationModal] = useState(null)
    const TRUNCATE_LENGTH = 30

    const handleArtImageDelete = async (artImageId) => {
        setLoading(true)
        await deleteArtImage({ artImageId: artImageId }, token)
        const result = await fetchArtistArtImages(token)
        if (result) {
            setArtImages(result)
        }
        setConfirmationModal(null)
        setLoading(false)
    }

    console.log("All ArtImage ", artImages)

    return (
        <>
            <Table className="rounded-xl border relative border-richblack-800">
                <Thead>
                    <Tr className="flex md:gap-x-10 md:w-full rounded-t-md border-b border-b-richblack-800 md:px-6 py-2">
                        <Th className="flex-1 text-left text-sm font-medium uppercase text-richblack-100">
                            ArtImages
                        </Th>
                        {/* <Th className="text-left text-sm font-medium uppercase text-richblack-100">
              Duration
            </Th> */}
                        <Th className="text-left text-sm font-medium uppercase text-richblack-100">
                            Price
                        </Th>
                        <Th className="text-left text-sm font-medium uppercase text-richblack-100">
                            Actions
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {artImages?.length === 0 ? (
                        <Tr>
                            <Td className="py-10 text-center text-2xl font-medium text-richblack-100">
                                No artImages found
                                {/* TODO: Need to change this state */}
                            </Td>
                        </Tr>
                    ) : (
                        artImages?.map((artImage) => (
                            <Tr
                                key={artImage._id}
                                className="flex gap-x-10 border-b w-full border-richblack-800 px-6 py-8"
                            >
                                <Td className="flex flex-1 gap-x-4 w-[100%]">
                                    <img
                                        src={artImage?.artImage}
                                        alt={artImage?.artImageName}
                                        className="h-[148px] w-[220px] rounded-lg object-cover"
                                    />
                                    <div className="flex flex-col justify-between">
                                        <p className="text-lg font-semibold text-richblack-5">
                                            {artImage.artImageName}
                                        </p>
                                        <p className="text-xs text-richblack-300">
                                            {artImage.artImageDescription.split(" ").length >
                                                TRUNCATE_LENGTH
                                                ? artImage.artImageDescription
                                                    .split(" ")
                                                    .slice(0, TRUNCATE_LENGTH)
                                                    .join(" ") + "..."
                                                : artImage.artImageDescription}
                                        </p>
                                        <p className="text-[12px] text-white">
                                            Created: {formatDate(artImage.createdAt)}
                                        </p>
                                        {artImage.status === ARTIMAGES_STATUS.DRAFT ? (
                                            <p className="flex w-fit flex-row items-center gap-2 rounded-full bg-richblack-700 px-2 py-[2px] text-[12px] font-medium text-pink-100">
                                                <HiClock size={14} />
                                                Drafted
                                            </p>
                                        ) : (
                                            <p className="flex w-fit flex-row items-center gap-2 rounded-full bg-richblack-700 px-2 py-[2px] text-[12px] font-medium text-yellow-100">
                                                <div className="flex h-3 w-3 items-center justify-center rounded-full bg-yellow-100 text-richblack-700">
                                                    <FaCheck size={8} />
                                                </div>
                                                Published
                                            </p>
                                        )}
                                    </div>
                                </Td>
                                {/* <Td className="text-sm font-medium text-richblack-100">
                  2hr 30mins
                </Td> */}
                                <Td className="text-sm font-medium text-richblack-100">
                                    ₹{artImage.price}
                                </Td>
                                <Td className="text-sm font-medium text-richblack-100 ">
                                    <button
                                        disabled={loading}
                                        onClick={() => {
                                            navigate(`/dashboard/edit-artImage/${artImage._id}`)
                                        }}
                                        title="Edit"
                                        className="px-2 transition-all duration-200 hover:scale-110 hover:text-caribbeangreen-300"
                                    >
                                        <FiEdit2 size={20} />
                                    </button>
                                    <button
                                        disabled={loading}
                                        onClick={() => {
                                            setConfirmationModal({
                                                text1: "Do you want to delete this artImage?",
                                                text2:
                                                    "All the data related to this artImage will be deleted",
                                                btn1Text: !loading ? "Delete" : "Loading...  ",
                                                btn2Text: "Cancel",
                                                btn1Handler: !loading
                                                    ? () => handleArtImageDelete(artImage._id)
                                                    : () => { },
                                                btn2Handler: !loading
                                                    ? () => setConfirmationModal(null)
                                                    : () => { },
                                            })
                                        }}
                                        title="Delete"
                                        className="px-1 transition-all duration-200 hover:scale-110 hover:text-[#ff0000]"
                                    >
                                        <RiDeleteBin6Line size={20} />
                                    </button>
                                </Td>
                            </Tr>
                        ))
                    )}
                </Tbody>
            </Table>
            {confirmationModal && <ConfirmationModal modalData={confirmationModal} />}
        </>
    )
}
