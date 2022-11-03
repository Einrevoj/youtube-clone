import { configureStore } from "@reduxjs/toolkit";
import { registerReducer } from "./reducers/registerReducers";
import loginReducer from "./reducers/loginReducers";

export const store = configureStore ({
    reducer: {
        userList: registerReducer,
        activeUser: loginReducer,
     
    },
})