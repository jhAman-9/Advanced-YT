import { createSlice } from "@reduxjs/toolkit";
import { reduxChatMessageSize } from "../utils/constants";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        messages : []
    },
    reducers: {
        addChatMessages: (state, action) => {
            state.messages.splice(reduxChatMessageSize,1)
            state.messages.push(action.payload);
        }
    }
})

export const { addChatMessages } = chatSlice.actions;
export default chatSlice.reducer