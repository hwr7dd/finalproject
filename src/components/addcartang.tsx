import { arrowUpOutline } from "ionicons/icons";
import React, { useState } from "react"


function AddcartedTangerine() {
  const [arr, setArr] = useState({"Tangerine": 0}) 
  return (
    <div > 
        
        
      <button
        onClick={() => {
           setArr(prevItem => ({...prevItem, Tangerine: prevItem.Tangerine+1 }))
          console.log(arr);
        }}
      >
        Add to Cart
      </button>
      <button
        onClick={() => {
           setArr(prevItem => ({...prevItem, Tangerine: prevItem.Tangerine-1 }))
          console.log(arr);
        }}
      >
        Delete from Cart
      </button>
      {arr['Tangerine']}
    </div>
  );
}
export default AddcartedTangerine;
