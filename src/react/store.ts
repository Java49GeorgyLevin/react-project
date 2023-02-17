import { configureStore } from "@reduxjs/toolkit"
import { employeesReduser } from "./employeesSlice"

export const store = configureStore ({
    reducer: {
        company: employeesReduser
    }
})
