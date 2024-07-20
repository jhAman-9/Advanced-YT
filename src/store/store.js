import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        search: searchSlice,
        chat: chatSlice,
    }
})

export default store