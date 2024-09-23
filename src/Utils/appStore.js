import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./sideBarSlics";


const appStore = configureStore({
    reducer:{
       sideBar:sideBarReducer
    }
})

export default appStore;