import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    step: 1,
    artImage: null,
    editArtImage: false,
    paymentLoading: false,
}

const artImageSlice = createSlice({
    name: "course",
    initialState,
    reducers: {
        setStep: (state, action) => {
            state.step = action.payload
        },
        setArtImage: (state, action) => {
            state.artImage = action.payload
        },
        setEditArtImage: (state, action) => {
            state.editArtImage = action.payload
        },
        setPaymentLoading: (state, action) => {
            state.paymentLoading = action.payload
        },
        resetArtImageState: (state) => {
            state.step = 1
            state.artImage = null
            state.editArtImage = false
        },
    },
})

export const {
    setStep,
    setArtImage,
    setEditArtImage,
    setPaymentLoading,
    resetArtImageState,
} = artImageSlice.actions

export default artImageSlice.reducer