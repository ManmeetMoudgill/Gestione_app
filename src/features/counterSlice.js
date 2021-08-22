import {createSlice } from '@reduxjs/toolkit';




// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.


export const counterSlice = createSlice({
  name: 'counter',
  initialState:{
    Permssogruppi:null,
    PermssoSedi:null,
    PermessoSondaggio:null,
    PermessoReport:null
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
  
    changePermessogruppi:(state,action)=>{
      state.Permssogruppi=action.payload

    },
    changePermssoSedi:(state,action)=>{
      state.PermssoSedi=action.payload;

    },
    changePermessoSondaggio:(state,action)=>{
      state.PermessoSondaggio=action.payload;

    },
    changePermessoReport:(state,action)=>{
      state.PermessoReport=action.payload;

    }
   
  }
 
  

});

export const {changePermessogruppi,changePermssoSedi,changePermessoSondaggio,changePermessoReport}=counterSlice.actions;
export const selectPermssogruppi = (state) => state.counter.Permssogruppi;
export const selectPermssoSedi = (state) => state.counter.PermssoSedi;
export const selectPermessoSondaggio = (state) => state.counter.PermessoSondaggio;
export const selectPermessoReport = (state) => state.counter.PermessoReport;





export default counterSlice.reducer;
