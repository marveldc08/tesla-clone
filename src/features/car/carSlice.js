//creating slice
import { createSlice } from "@reduxjs/toolkit"

//creating the state
const initialState  = {
    cars : ["Model S", "Model 3", "Model X", "Model Y"]
}

const carSlice = createSlice({
    name : "car",
    initialState, //this is the initial state you have when you start the app.
    reducers: {} // reducers are like functions you use to manipulate the states of the app.
})
//maping directly to cars.
//used to  select individual cars.
export const selectCars =  state => state.car.cars

export default carSlice.reducer