import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    // artImageSectionData: [],
    artImageEntireData: [],
    // completedLectures: [],
    // totalNoOfLectures: 0,
}

const viewArtImageSlice = createSlice({
    name: "viewArtImage",
    initialState,
    reducers: {
        // setArtImageSectionData: (state, action) => {
        //     state.artImageSectionData = action.payload
        // },
        setEntireArtImageData: (state, action) => {
            state.artImageEntireData = action.payload
        },
        // setTotalNoOfLectures: (state, action) => {
        //     state.totalNoOfLectures = action.payload
        // },
        // setCompletedLectures: (state, action) => {
        //     state.completedLectures = action.payload
        // },
        // updateCompletedLectures: (state, action) => {
        //     state.completedLectures = [...state.completedLectures, action.payload]
        // },
    },
})

export const {
    // setArtImageSectionData,
    setEntireArtImageData,
    // setTotalNoOfLectures,
    // setCompletedLectures,
    // updateCompletedLectures,
} = viewArtImageSlice.actions

export default viewArtImageSlice.reducer