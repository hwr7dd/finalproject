import { arrowUpOutline } from "ionicons/icons";
import React, { useState } from "react"


function Addcartedtom() {
  const [arr, setArr] = useState({"Tomatoes": 0}) 
  return (
    <div > 
        
        
      <button
        onClick={() => {
           setArr(prevItem => ({...prevItem, Tomatoes: prevItem.Tomatoes+1 }))
          console.log(arr);
        }}
      >
        Add to Cart
      </button>
      <button
        onClick={() => {
           setArr(prevItem => ({...prevItem, Tomatoes: prevItem.Tomatoes-1 }))
          console.log(arr);
        }}
      >
        Delete from Cart
      </button>
      {arr['Tomatoes']}
    </div>
  );
}
export default Addcartedtom;
