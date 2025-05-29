import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"AddToCart",
    initialState:{
        value:0,
        items:[]
    },
    reducers:{
        addTo:(state,actions)=>{
            console.log(actions.payload)
            const checkData = state.items.some(key=>key.id === actions.payload.id);
            // console.log(checkData);
            if(checkData){
                alert("Product already in cart")
            }
            else{
                state.items.push(actions.payload)
                state.value++
            }
            
            // console.log(state.items);
            
        },
        increment: (state, actions) => {
            console.log(actions.payload);
            // const item = state.items.find(key=>key.id === actions.payload.id)
            // console.log(item);
            for (var i=0; i<state.items.length; i++)
              {
                if (state.items[i].id==actions.payload.id)
                {
                    state.items[i].qty++;
                }
              }
            
        },

        decrement:(state,actions)=>{
            
            
              for (var i=0; i<state.items.length; i++)
              {
                if (state.items[i].id==actions.payload.id)
                {
                    if (state.items[i].qty<=1)
                    {
                        alert("Quantity not less than 1 ");
                    }
                    else 
                    {
                        state.items[i].qty--;
                    }
                }
              }
        },
        remove:(state,actions)=>{
            state.items=state.items.filter(key=>key.id!=actions.payload.id)
        }
    }
})

export const { increment ,decrement ,remove ,addTo} = cartSlice.actions;
export default cartSlice.reducer;