import React, { useEffect } from 'react';
import { useState } from "react"; 
import BrandLookUp from './BrandLookUp';
function AddProduct(props) {  
    const [productAdd, setProductAdd] = useState({
        id:"", 
        title: "",
        description:"",
       price:"",
       brand:"",  
       
      });
      const productAddHandler =(event)=>{
       const propName=event.target.name;
       const propValue=event.target.value;
       setProductAdd({...productAdd, [propName]:propValue});
      }
      const handleFormSubmit =() =>{
     if(productAdd.title!=null && productAdd.title!=undefined && productAdd.title!=" "&& 
      productAdd.description!=null&&productAdd.description!=undefined&&productAdd.description!=" "&&
      productAdd.price!=null&&productAdd.price!=undefined&&productAdd.price!=" "){
      props.handleAddProduct(productAdd)
       return productAdd;
         
      }
         
     else{
      
        alert("Please Enter The Value in Title,Description and Price");
     }
         }
        
     
       
      

  return (
   <div className="container" >
    
    <div class="row" >
    <div  className="col-md-3"> 
    <p>ID</p>
    <input type="text"name="id" value={productAdd.id} onChange={productAddHandler} placeholder="Id"></input>
    </div>
    <div className='col-md-3'>
    </div>
    <div  className="col-md-4" > 
    <p>Title</p>
     <input type="text"name="title" value={productAdd.title} onChange={productAddHandler} placeholder="Title"></input>
    </div>
    </div>
    <div className='row' style={{marginTop:"10px"}}>
    <div  className="col-md-6"> 
    <p>Description</p>
     <textarea type="text"name="description" value={productAdd.description} onChange={productAddHandler} placeholder="Description"></textarea>
     </div>
     <div  className="col-md-6"> 
     <p>Price</p>
     <input type="text"name="price" value={productAdd.price} onChange={productAddHandler} placeholder="Price"></input>
    </div>
    </div>
    <div className='row'>
    <div  className="col-md-6" style={{marginTop:"10px"}}> 
    <p>Brands</p>
     <BrandLookUp allProduct={props.allProducts} />
    </div>
    </div>
    <div className='row'>
    <div className='col-md-4'>  

    </div>
     <div className='col-md-6'>  
     <button class="btn btn-dark" onClick={handleFormSubmit} style={{marginTop:"10px"}}>Save</button>
     <button type="button" class="btn btn-dark" data-bs-dismiss="modal" style={{marginTop:"10px",marginLeft:"8px"}}>Close</button>
  
    </div>
    <div className='col-md-2'>
    </div>
    </div>
   </div>
  )
  
};
export default AddProduct;