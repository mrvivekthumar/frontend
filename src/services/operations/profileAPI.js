import { toast } from "react-hot-toast"

import { setLoading, setUser } from "../../slices/profileSlice"
import { apiConnector } from "../apiConnector"
import { profileEndpoints } from "../api"
import { logout } from "./authAPI"

const { GET_USER_DETAILS_API, GET_USER_ENROLLED_ARTIMAGES_API, GET_ARTIST_DATA_API } = profileEndpoints

export function getUserDetails(token, navigate) {
    return async (dispatch) => {
        const toastId = toast.loading("Loading...")
        dispatch(setLoading(true))
        try {
            const response = await apiConnector("GET", GET_USER_DETAILS_API, null, {
                Authorization: `Bearer ${token}`,
            })
            console.log("GET_USER_DETAILS API RESPONSE............", response)

            if (!response.data.success) {
                throw new Error(response.data.message)
            }
            const userImage = response.data.data.image
                ? response.data.data.image
                : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.data.firstName} ${response.data.data.lastName}`
            dispatch(setUser({ ...response.data.data, image: userImage }))
        } catch (error) {
            dispatch(logout(navigate))
            console.log("GET_USER_DETAILS API ERROR............", error)
            toast.error("Could Not Get User Details")
        }
        toast.dismiss(toastId)
        dispatch(setLoading(false))
    }
}

export async function getUserEnrolledArtImages(token) {
    const toastId = toast.loading("Loading...")
    let result = []
    try {
        console.log("BEFORE Calling BACKEND API FOR ENROLLED ARTIMAGES");
        const response = await apiConnector(
            "GET",
            GET_USER_ENROLLED_ARTIMAGES_API,
            null,
            {
                Authorization: `Bearer ${token}`,
            }
        )
        console.log("AFTER Calling BACKEND API FOR ENROLLED ARTIMAGES");
        // console.log(
        //   "GET_USER_ENROLLED_ARTIMAGES_API API RESPONSE............",
        //   response
        // )

        if (!response.data.success) {
            throw new Error(response.data.message)
        }
        result = response.data.data
    } catch (error) {
        console.log("GET_USER_ENROLLED_ARTIMAGES_API API ERROR............", error)
        toast.error("Could Not Get Enrolled ArtImages")
    }
    toast.dismiss(toastId)
    return result
}

export async function getArtistData(token) {
    const toastId = toast.loading("Loading...");
    let result = [];
    try {
        const response = await apiConnector("GET", GET_ARTIST_DATA_API, null,
            {
                Authorization: `Bearer ${token}`,
            })

        console.log("GET_ARTIST_DATA_API_RESPONSE", response);
        result = response?.data?.artImages

    }
    catch (error) {
        console.log("GET_INSTRUCTOR_API ERROR", error);
        toast.error("Could not Get Artist Data")
    }
    toast.dismiss(toastId);
    return result;
}