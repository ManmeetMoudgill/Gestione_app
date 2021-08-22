import {createSlice } from '@reduxjs/toolkit';




// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.


export const counterSlice = createSlice({
  name: 'counter',
  initialState:{
    permessi:null,
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
  
    changePermessi:(state,action)=>{
      state.permessi=action.payload

    }
   
  },
 
  

});

export const {changePermessi}=counterSlice.actions;
export const selectPermessi = (state) => state.permessi.value;




export default counterSlice.reducer;
