import { legacy_createStore as createStore } from 'redux';

//step 1 : reducer function
const productReducer = (state,action) => 
{
    //convert action type to upper case
    action.type=action.type.toUpperCase();

    let  updatedState = {};

    switch (action.type) 
    {
        case "CREATE":
            updatedState.items =  0;   
            break; 

        case "ADD ITEM":
            updatedState.items=  state.items+1 ;
            break;
            
        case "DELETE ITEM":
            if(state.items ==0)  
            {
                alert("Insufficient items in cart to delete");
                updatedState.items =  state.items;
            }
            else
            {
                updatedState.items =  state.items -1;
            }
            break;
        default:
           updatedState = state;
           break;
      }

      return updatedState;
};

const productStore=createStore(productReducer);
export default productStore;