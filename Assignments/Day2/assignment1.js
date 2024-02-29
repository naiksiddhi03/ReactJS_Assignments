import { useState } from "react";

function Day2Ass1(){
    const [pname,setPname]=useState("");
    const [price,setPrice]=useState(0);
    const [qty,setQty]=useState(0);
    const [total,setTotal]=useState(0);
    //state to update values after event

    function updatePname(event)
    {
        let x=event.target.value;
        setPname(x);
    }
    function updatePrice(event)
    {
        let x1=event.target.value;
        setPrice(x1);
    }
    function updateQty(event)
    {
        let x2=event.target.value;
        setQty(x2);
    }

    function getTotalClick(){
       let total1=parseInt(price)*parseInt(qty);
       setTotal(total1);
    }
    return(
        <>
        Product Name : <input type="text"  value={pname} onChange={updatePname}/><br/><br/>
        Unit Price : <input type="number"  value={price} onChange={updatePrice}/><br/><br/>
        Unit Price : <input type="number" value={qty} onChange={updateQty}/><br/><br/>
        <input type="button" onClick={getTotalClick} value="get total" />
        <p>Total Amount : {total}</p>
        </>
    );
}
export default Day2Ass1;