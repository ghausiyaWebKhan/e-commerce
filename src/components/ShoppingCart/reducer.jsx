export const reducer = (state , action) => {
   
           if(action.type === 'REMOVE_ITEM'){
                return{
                    // console.log(...state);
                    ...state,
                    item: state.item.filter((curEle)=>{
                        return curEle.id !== action.payload;
                    }),
                };
            }
            if(action.type === 'CLEAR_CART'){
                return{
                    ...state,
                    item:[]
                };
            }

            if(action.type === 'INCREMENT'){
                
                    let UpdatedCart  = state.item.map((curElement)=>{
                        if(curElement.id === action.payload){
                            return { ...curElement, quantity:curElement.quantity + 1}
                        }
                        // console.log(curElement);
                        return curElement;
                    })
                    return{ ...state, item:UpdatedCart}
                
            }

            if(action.type === 'DECREMENT'){
                let UpdatedCart = state.item.map((curElement)=>{
                    if(curElement.id === action.payload){
                        // console.log(...curElement);
                        return { ...curElement, quantity:curElement.quantity - 1}
                    }
                    return curElement;
                }).filter((curEle)=> curEle.quantity !== 0)
                return {...state , item:UpdatedCart};
            }

            if(action.type === 'GET_TOTAL' ){
                let { totalItem,totalAmount } = state.item.reduce((accum,currVal)=>{
                    let { quantity,price } = currVal;
                    console.log("price"+ price);
                    accum.totalItem += quantity;
                    accum.totalAmount += (quantity*price);
                    console.log("accum");
                    console.log(accum);
                    return accum;
                },{totalItem : 0,totalAmount:0});
                return { ...state, totalItem,totalAmount};
            }

           return state;                  
}       