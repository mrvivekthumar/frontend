// import { useState } from "react"
// import { useForm } from "react-hook-form"
// import { toast } from "react-hot-toast"
// import { IoAddCircleOutline } from "react-icons/io5"
// import { MdNavigateNext } from "react-icons/md"
// import { useDispatch, useSelector } from "react-redux"

// import {
//     createSection,
//     updateSection,
// } from "../../../../../services/operations/artImageDetailsAPI"
// import {
//     setArtImage,
//     setEditArtImage,
//     setStep
// } from "../../../../../slices/artImageSlice"
// import IconBtn from "../../../../common/IconBtn"
// // import NestedView from "./NestedView"

// export default function ArtImageBuilderForm() {
//     const {
//         register,
//         handleSubmit,
//         setValue,
//         formState: { errors },
//     } = useForm()

//     const { artImage } = useSelector((state) => state.artImage);
//     const { token } = useSelector((state) => state.auth);
//     const [loading, setLoading] = useState(false);
//     const [editSectionName, setEditSectionName] = useState(null);
//     const dispatch = useDispatch();

//     // handle form submission
//     const onSubmit = async (data) => {
//         // console.log(data)
//         setLoading(true)

//         let result

//         if (editSectionName) {
//             result = await updateSection(
//                 {
//                     sectionName: data.sectionName,
//                     sectionId: editSectionName,
//                     artImageId: artImage._id,
//                 },
//                 token
//             )
//             // console.log("edit", result)
//         } else {
//             result = await createSection(
//                 {
//                     sectionName: data.sectionName,
//                     artImageId: artImage._id,
//                 },
//                 token
//             )
//         }
//         if (result) {
//             // console.log("section result", result)
//             dispatch(setArtImage(result))
//             //console.log("here it is->",result);
//             setEditSectionName(null)
//             setValue("sectionName", "")
//         }
//         setLoading(false)
//     }

//     const cancelEdit = () => {
//         setEditSectionName(null);
//         setValue("sectionName", "");
//     }

//     const handleChangeEditSectionName = (sectionId, sectionName) => {
//         if (editSectionName === sectionId) {
//             cancelEdit()
//             return
//         }
//         setEditSectionName(sectionId)
//         setValue("sectionName", sectionName)
//     }

//     const goToNext = () => {
//         if (artImage.artImageContent.length === 0) {
//             toast.error("Please add atleast one section")
//             return
//         }
//         if (
//             artImage.artImageContent.some((section) => section.subSection.length === 0)
//         ) {
//             toast.error("Please add atleast one lecture in each section")
//             return
//         }
//         dispatch(setStep(3))
//     }

//     const goBack = () => {
//         dispatch(setStep(1))
//         dispatch(setEditArtImage(true))
//     }

//     return (
//         <div className="space-y-8 rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-6">
//             <p className="text-2xl font-semibold text-richblack-5">ArtImage Builder</p>
//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//                 <div className="flex flex-col space-y-2">
//                     <label className="text-sm text-richblack-5" htmlFor="sectionName">
//                         Section Name <sup className="text-pink-200">*</sup>
//                     </label>
//                     <input
//                         id="sectionName"
//                         disabled={loading}
//                         placeholder="Add a section to build your artImage"
//                         {...register("sectionName", { required: true })}
//                         className="form-style w-full rounded-md px-3 py-2 bg-richblack-700 text-richblack-100"
//                     />
//                     {errors.sectionName && (
//                         <span className="ml-2 text-xs tracking-wide text-pink-200">
//                             Section name is required
//                         </span>
//                     )}
//                 </div>
//                 <div className="flex items-end gap-x-4">
//                     {/* <IconBtn
//                         type="Submit"
//                         disabled={loading}
//                         text={editSectionName ? "Edit Section Name" : "Create Section"}
//                         outline={true}
//                     >
//                         <IoAddCircleOutline size={20} className="text-yellow-50" />
//                     </IconBtn> */}
//                     <div className="flex items-center gap-x-1 text-richblack-100">
//                         <button>{editSectionName ? "Edit Section Name" : "Create Section"}</button>
//                         <IoAddCircleOutline size={20} className="text-yellow-50" />
//                     </div>
//                     {editSectionName && (
//                         <button
//                             type="button"
//                             onClick={cancelEdit}
//                             className="text-sm text-richblack-300 underline"
//                         >
//                             Cancel Edit
//                         </button>
//                     )}
//                 </div>
//             </form>
//             {/* {artImage.artImageContent.length > 0 && (
//                 <NestedView handleChangeEditSectionName={handleChangeEditSectionName} />
//             )} */}
//             {/* Next Prev Button */}
//             <div className="flex justify-end gap-x-3">
//                 <button
//                     onClick={goBack}
//                     className={`flex cursor-pointer items-center gap-x-2 rounded-md bg-richblack-300 py-[8px] px-[20px] font-semibold text-richblack-900`}
//                 >
//                     Back
//                 </button>
//                 {/* <IconBtn disabled={loading} text="Next" onclick={goToNext}>
//           <MdNavigateNext />
//         </IconBtn> */}
//                 <div className="flex items-center bg-yellow-50 rounded-md px-3 py-1 font-semibold" onClick={goToNext}>
//                     <button>Next</button>
//                     <MdNavigateNext />
//                 </div>
//             </div>
//         </div>
//     )
// } 