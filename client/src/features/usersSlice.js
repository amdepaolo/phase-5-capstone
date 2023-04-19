import {createSlice} from "@reduxjs/toolkit"


const usersSlice = createSlice({
    name: "users",
    initialState: {id: null},
    reducers: {
        userAdded(state, action){
            state = action.payload
            return state
        },
        userRemoved(state) {
            state = {id: null}
            return state
        }
    }

})

export const { userAdded, userRemoved } = usersSlice.actions;
export default usersSlice.reducer;