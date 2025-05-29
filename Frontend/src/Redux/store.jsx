import { configureStore } from "@reduxjs/toolkit";
import AddtoCart from "./redux";

const store = configureStore({
    reducer:{Cart:AddtoCart}
})

export default store;