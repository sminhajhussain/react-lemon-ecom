import React  from "react";
import {useState} from "react";

function SearchProducts(props){
  const [searchInput,setSearchInput] = useState("");   
  const [filterProdobj,setFilterProdobj] = useState([]);
  const handleChange=(event)=>{
    const searchValue=event.target.value;
    setSearchInput(searchValue);

}
   const handleClick=()=>{
       
     if (searchInput!=null&&searchInput!=undefined&&searchInput!=""){
      let filterProds=props.productsSearch.filter(productObj =>{
     if (productObj.id==searchInput||
         productObj.title.toUpperCase().includes(searchInput.toUpperCase())|| 
         productObj.description.toUpperCase().includes(searchInput.toUpperCase())||
         productObj.price==searchInput||
         productObj.brand.toUpperCase().includes(searchInput.toUpperCase()))
         {
    return productObj;
}
    
}
);
      setFilterProdobj(filterProds);
      
   
      props.handleSearch(filterProds);
     
}
 else{
    
      props.clearList();
     
}
}
    return(

    <div className="container"  >
      

       <div className="row"style={{marginTop:"12px"}}>
     <div className="col-md-3">
     <span className="label label-default" class="p-3 mb-2 bg-dark text-white" style={{paddingLeft:"50px"}}>Generic Search :</span>
     </div>
     <div className="col-md-6">
     <input type="text" className="form-control" onChange={handleChange}></input>
     </div>
     
     <div className="col-md-2" >
     <button type="button" class="btn btn-dark" onClick={handleClick} >Search</button>
     </div>
     </div>
    </div>
       
    );
}

export default SearchProducts;