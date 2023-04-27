import React ,{useEffect, useRef} from "react";
import { useState } from "react"; 
function BrandLookUp(props){
const [brandLookup,setBrandLookup] = useState([]);
const filterBrand=()=>{
    let allBrand=[];
props.allProduct.map(prodObj =>{
    allBrand.push(prodObj.brand);
})
let filterBrand=allBrand.filter((item,
    index) => allBrand.indexOf(item) === index);
    setBrandLookup(filterBrand);


}


useEffect(() => {
    
   filterBrand();
},[]);




return(
 
<div>
<select className="form-select form-select-md "  aria-label=".form-select-md example" id="exampleFormControlSelect1"  >
      <option value=""> Select  </option>
{ 
      props.allProduct.map(prodObj =>( 
      <option value={prodObj.brand }> {prodObj.brand}  </option>
)
)
}
      </select>
     
      
</div> 




)
}
export default BrandLookUp;