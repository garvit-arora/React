import {configureStore} from '@reduxjs/toolkit';
import rootReducer from "../store/authSlice"
const store = configureStore({
    reducer : {
        rootReducer
    }
})

export default store;