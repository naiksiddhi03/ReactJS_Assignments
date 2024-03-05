import React,{useState} from "react";
import './ProductsApp.css';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

//step4: use redux hooks to communicate with store : useselector, usedispatch

function ProductsApp(props){
    const [itemAmount, setAmount] = useState(0);       

    // Get the global state from store
   // let currentBalance = useSelector((state) => state.items);
  
    const dispatch = useDispatch();
    
    // Step5:  Perform the operations using dispatch
    function add_click() { 
       
        dispatch({type:"ADD ITEM", amount:itemAmount} );
        setAmount(0);   // clear textbox
    }

    function delete_click() {        
        dispatch({type:"DELETE ITEM", amount:itemAmount} );
        setAmount(0);   // clear textbox
    }
        return (
        <div>
         
         <div className="atm">
                
                
                <button onClick={add_click}>Add item</button>
                 <button onClick={delete_click}>Delete item</button>
         </div>
         </div>
         );
}
export default ProductsApp;