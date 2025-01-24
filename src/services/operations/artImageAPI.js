import { toast } from "react-hot-toast"
import { apiConnector } from "../apiConnector"
import { artImageEndpoints } from "../api"

const {
    CREATE_ARTIMAGE_API,
    EDIT_ARTIMAGE_API,
    DELETE_ARTIMAGE_API,
    GET_ALL_ARTIMAGE_API,
    ARTIMAGE_API,
    ARTIMAGE_CATEGORIES_API,
    GET_ALL_ARTIST_ARTIMAGE_API,
    CREATE_RATING_API


} = courseEndpoints

export const getAllArtImages = async () => {
    const toastId = toast.loading("Loading...")
    let result = []
    try {
        const response = await apiConnector("GET", GET_ALL_ARTIMAGE_API)
        if (!response?.data?.success) {
            throw new Error("Could Not Fetch ArtImage Categories")
        }
        result = response?.data?.data
    } catch (error) {
        console.log("GET_ALL_ARTIMAGE_API API ERROR............", error)
        toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}

export const fetchArtImageDetails = async (artImageId) => {
    const toastId = toast.loading("Loading...")
    //   dispatch(setLoading(true));
    let result = null
    try {
        const response = await apiConnector("POST", COURSE_DETAILS_API, {
            artImageId,
        })
        console.log("COURSE_DETAILS_API API RESPONSE............", response)

        if (!response.data.success) {
            throw new Error(response.data.message)
        }
        result = response.data
    } catch (error) {
        console.log("COURSE_DETAILS_API API ERROR............", error)
        result = error.response.data
        toast.error(error.response.data.message);
    }
    toast.dismiss(toastId)
    //   dispatch(setLoading(false));
    return result
}

// fetching the available course categories
export const fetchArtImageCategories = async () => {
    let result = []
    try {

        const response = await apiConnector("GET", ARTIMAGE_CATEGORIES_API)
        console.log("console log 4");

        console.log("ARTIMAGE_CATEGORIES_API API RESPONSE............", response)
        if (!response?.data?.success) {
            throw new Error("Could Not Fetch ArtImage Categories")
        }
        result = response?.data?.data
    } catch (error) {
        console.log("ARTIMAGE_CATEGORIES_API API ERROR............", error)
        toast.error(error.message)
    }
    return result
}

// add the course details
export const addArtImageDetails = async (data, token) => {
    let result = null
    const toastId = toast.loading("Loading...")
    try {
        const response = await apiConnector("POST", CREATE_ARTIMAGE_API, data, {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
        })
        console.log("CREATE_ARTIMAGE_API RESPONSE............", response)
        if (!response?.data?.success) {
            throw new Error("Could Not Add ArtImage Details")
        }
        toast.success("ArtImage Details Added Successfully")
        result = response?.data?.data
    } catch (error) {
        console.log("CREATE_ARTIMAGE_API ERROR............", error)
        toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}

// edit the course details
export const editArtImageDetails = async (data, token) => {
    let result = null
    const toastId = toast.loading("Loading...")
    try {
        const response = await apiConnector("POST", EDIT_COURSE_API, data, {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
        })
        console.log("EDIT COURSE API RESPONSE............", response)
        if (!response?.data?.success) {
            throw new Error("Could Not Update ArtImage Details")
        }
        toast.success("ArtImage Details Updated Successfully")
        result = response?.data?.data
    } catch (error) {
        console.log("EDIT COURSE API ERROR............", error)
        toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}

// create a section
export const createSection = async (data, token) => {
    let result = null
    const toastId = toast.loading("Loading...")
    try {
        const response = await apiConnector("POST", CREATE_ARTIMAGE_API, data, {
            Authorization: `Bearer ${token}`,
        })
        console.log("CREATE_ARTIMAGE_API RESPONSE............", response)
        if (!response?.data?.success) {
            throw new Error("Could Not Create Section")
        }
        toast.success("ArtImage Section Created")
        result = response?.data?.updatedArtImage
    } catch (error) {
        console.log("CREATE_ARTIMAGE_API ERROR............", error)
        toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}

// create a subsection
// export const createSubSection = async (data, token) => {
//     let result = null
//     const toastId = toast.loading("Loading...")
//     try {
//         const response = await apiConnector("POST", CREATE_SUBSECTION_API, data, {
//             Authorization: `Bearer ${token}`,
//         })
//         console.log("CREATE SUB-SECTION API RESPONSE............", response)
//         if (!response?.data?.success) {
//             throw new Error("Could Not Add Lecture")
//         }
//         toast.success("Lecture Added")
//         result = response?.data?.data
//     } catch (error) {
//         console.log("CREATE SUB-SECTION API ERROR............", error)
//         toast.error(error.message)
//     }
//     toast.dismiss(toastId)
//     return result
// }

// update a section
export const updateSection = async (data, token) => {
    let result = null
    const toastId = toast.loading("Loading...")
    try {
        const response = await apiConnector("POST", EDIT_ARTIMAGE_API, data, {
            Authorization: `Bearer ${token}`,
        })
        console.log("EDIT_ARTIMAGE_API RESPONSE............", response)
        if (!response?.data?.success) {
            throw new Error("Could Not Update Section")
        }
        toast.success("ArtImage Section Updated")
        result = response?.data?.data
    } catch (error) {
        console.log("EDIT_ARTIMAGE_API ERROR............", error)
        toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}

// update a subsection
// export const updateSubSection = async (data, token) => {
//     let result = null
//     const toastId = toast.loading("Loading...")
//     try {
//         const response = await apiConnector("POST", UPDATE_SUBSECTION_API, data, {
//             Authorization: `Bearer ${token}`,
//         })
//         console.log("UPDATE SUB-SECTION API RESPONSE............", response)
//         if (!response?.data?.success) {
//             throw new Error("Could Not Update Lecture")
//         }
//         toast.success("Lecture Updated")
//         result = response?.data?.data
//     } catch (error) {
//         console.log("UPDATE SUB-SECTION API ERROR............", error)
//         toast.error(error.message)
//     }
//     toast.dismiss(toastId)
//     return result
// }

// delete a section
export const deleteSection = async (data, token) => {
    let result = null
    const toastId = toast.loading("Loading...")
    try {
        const response = await apiConnector("POST", DELETE_ARTIMAGE_API, data, {
            Authorization: `Bearer ${token}`,
        })
        console.log("DELETE_ARTIMAGE_API RESPONSE............", response)
        if (!response?.data?.success) {
            throw new Error("Could Not Delete Section")
        }
        toast.success("ArtImage Section Deleted")
        result = response?.data?.data
    } catch (error) {
        console.log("DELETE_ARTIMAGE_API ERROR............", error)
        toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}
// delete a subsection
// export const deleteSubSection = async (data, token) => {
//     let result = null
//     const toastId = toast.loading("Loading...")
//     try {
//         const response = await apiConnector("POST", DELETE_SUBSECTION_API, data, {
//             Authorization: `Bearer ${token}`,
//         })
//         console.log("DELETE SUB-SECTION API RESPONSE............", response)
//         if (!response?.data?.success) {
//             throw new Error("Could Not Delete Lecture")
//         }
//         toast.success("Lecture Deleted")
//         result = response?.data?.data
//     } catch (error) {
//         console.log("DELETE SUB-SECTION API ERROR............", error)
//         toast.error(error.message)
//     }
//     toast.dismiss(toastId)
//     return result
// }

// fetching all courses under a specific instructor
export const fetchArtistArtImages = async (token) => {
    let result = []
    const toastId = toast.loading("Loading...")
    try {
        const response = await apiConnector(
            "GET",
            GET_ALL_INSTRUCTOR_COURSES_API,
            null,
            {
                Authorization: `Bearer ${token}`,
            }
        )
        console.log("INSTRUCTOR COURSES API RESPONSE............", response)
        if (!response?.data?.success) {
            throw new Error("Could Not Fetch Artist ArtImages")
        }
        result = response?.data?.data
    } catch (error) {
        console.log("INSTRUCTOR COURSES API ERROR............", error)
        toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}

// delete a course
export const deleteArtImage = async (data, token) => {
    const toastId = toast.loading("Loading...")
    try {
        const response = await apiConnector("DELETE", DELETE_COURSE_API, data, {
            Authorization: `Bearer ${token}`,
        })
        console.log("DELETE COURSE API RESPONSE............", response)
        if (!response?.data?.success) {
            throw new Error("Could Not Delete ArtImage")
        }
        toast.success("ArtImage Deleted")
    } catch (error) {
        console.log("DELETE COURSE API ERROR............", error)
        toast.error(error.message)
    }
    toast.dismiss(toastId)
}

// get full details of a course
export const getFullDetailsOfArtImage = async (artImageId, token) => {
    const toastId = toast.loading("Loading...")
    //   dispatch(setLoading(true));
    let result = null
    try {
        const response = await apiConnector(
            "POST",
            GET_FULL_COURSE_DETAILS_AUTHENTICATED,
            {
                artImageId,
            },
            {
                Authorization: `Bearer ${token}`,
            }
        )
        console.log("COURSE_FULL_DETAILS_API API RESPONSE............", response)

        if (!response.data.success) {
            throw new Error(response.data.message)
        }
        result = response?.data?.data
    } catch (error) {
        console.log("COURSE_FULL_DETAILS_API API ERROR............", error)
        result = error.response.data
        // toast.error(error.response.data.message);
    }
    toast.dismiss(toastId)
    //   dispatch(setLoading(false));
    return result
}

// mark a lecture as complete
export const markLectureAsComplete = async (data, token) => {
    let result = null
    console.log("mark complete data", data)
    const toastId = toast.loading("Loading...")
    try {
        const response = await apiConnector("POST", LECTURE_COMPLETION_API, data, {
            Authorization: `Bearer ${token}`,
        })
        console.log(
            "MARK_LECTURE_AS_COMPLETE_API API RESPONSE............",
            response
        )

        if (!response.data.message) {
            throw new Error(response.data.error)
        }
        toast.success("Lecture Completed")
        result = true
    } catch (error) {
        console.log("MARK_LECTURE_AS_COMPLETE_API API ERROR............", error)
        toast.error(error.message)
        result = false
    }
    toast.dismiss(toastId)
    return result
}

// create a rating for course
export const createRating = async (data, token) => {
    const toastId = toast.loading("Loading...")
    let success = false
    try {
        const response = await apiConnector("POST", CREATE_RATING_API, data, {
            Authorization: `Bearer ${token}`,
        })
        console.log("CREATE RATING API RESPONSE............", response)
        if (!response?.data?.success) {
            throw new Error("Could Not Create Rating")
        }
        toast.success("Rating Created")
        success = true
    } catch (error) {
        success = false
        console.log("CREATE RATING API ERROR............", error)
        toast.error(error.message)
    }
    toast.dismiss(toastId)
    return success
}