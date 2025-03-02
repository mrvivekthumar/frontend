import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "../slices/authSlice"
import profileReducer from "../slices/profileSlice";
import cartReducer from "../slices/cartSlice"
import artImageReducer from "../slices/artImageSlice"
import viewArtImageReducer from "../slices/viewArtImageSlice"

const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
    cart: cartReducer,
    artImage: artImageReducer,
    viewArtImage: viewArtImageReducer,
})

export default rootReducer