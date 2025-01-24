// const BASE_URL = process.env.REACT_APP_BASE_URL
const BASE_URL = "http://localhost:4000/api/v1";

// AUTH ENDPOINTS
export const endpoints = {
    SENDOTP_API: BASE_URL + "/auth/sendotp",
    SIGNUP_API: BASE_URL + "/auth/signup",
    LOGIN_API: BASE_URL + "/auth/login",
    RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
    RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
}

// PROFILE ENDPOINTS
export const profileEndpoints = {
    GET_USER_DETAILS_API: BASE_URL + "/profile/getUserDetails",
    // GET_USER_ENROLLED_ARTIMAGES_API: BASE_URL + "/profile/getEnrolledArtImages",
    GET_ARTIST_DATA_API: BASE_URL + "/profile/artistDashboard",
}

// BUYERS ENDPOINTS
export const buyerEndpoints = {
    ARTIMAGE_PAYMENT_API: BASE_URL + "/payment/capturePayment",
    ARTIMAGE_VERIFY_API: BASE_URL + "/payment/verifyPayment",
    SEND_PAYMENT_SUCCESS_EMAIL_API: BASE_URL + "/payment/sendPaymentSuccessEmail",
}

// ARTIMAGES ENDPOINTS
export const artImageEndpoints = {

    CREATE_ARTIMAGE_API: BASE_URL + "/artImage/createArtImage",
    EDIT_ARTIMAGE_API: BASE_URL + "/artImage/editArtImages",
    DELETE_ARTIMAGE_API: BASE_URL + "/artImage/deleteArtistImages",
    GET_ALL_ARTIMAGE_API: BASE_URL + "/artImage/getAllArtImages",
    ARTIMAGE_API: BASE_URL + "/artImage/getArtImage",

    ARTIMAGE_CATEGORIES_API: BASE_URL + "/artImages/showAllCategories",

    // CREATE_SECTION_API: BASE_URL + "/artImage/addSection",
    // CREATE_SUBSECTION_API: BASE_URL + "/artImage/addSubSection",
    // UPDATE_SECTION_API: BASE_URL + "/artImage/updateSection",
    // UPDATE_SUBSECTION_API: BASE_URL + "/artImage/updateSubSection",
    // DELETE_SECTION_API: BASE_URL + "/artImage/deleteSection",
    // DELETE_SUBSECTION_API: BASE_URL + "/artImage/deleteSubSection",

    GET_ALL_ARTIST_ARTIMAGE_API: BASE_URL + "/artImages/getArtistArtImages",
    CREATE_RATING_API: BASE_URL + "/artImages/createRating",

    // GET_FULL_ARTIMAGE_DETAILS_AUTHENTICATED: BASE_URL + "/artImage/getFullArtImageDetails",
    // LECTURE_COMPLETION_API: BASE_URL + "/artImage/updateArtImageProgress",

}

// RATINGS AND REVIEWS
export const ratingsEndpoints = {
    REVIEWS_DETAILS_API: BASE_URL + "/artImages/getReviews",
}

// CATAGORIES API
export const categories = {
    CATEGORIES_API: BASE_URL + "/artImages/showAllCategories",
}

// CATALOG PAGE DATA
export const catalogData = {
    CATALOGPAGEDATA_API: BASE_URL + "/artImages/getCategoryPageDetails",
}
// CONTACT-US API
export const contactusEndpoint = {
    CONTACT_US_API: BASE_URL + "/reach/contact",
}

// SETTINGS PAGE API
export const settingsEndpoints = {
    UPDATE_DISPLAY_PICTURE_API: BASE_URL + "/profile/updateDisplayPicture",
    UPDATE_PROFILE_API: BASE_URL + "/profile/updateProfile",
    CHANGE_PASSWORD_API: BASE_URL + "/auth/changepassword",
    DELETE_PROFILE_API: BASE_URL + "/profile/deleteProfile",
}