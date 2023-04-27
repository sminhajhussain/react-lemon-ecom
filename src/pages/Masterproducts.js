import React ,{useEffect,} from "react";
import { useState } from "react"; 
import SearchProducts from "./searchProducts";
import ListOfProducts from "./listOfProducts";
import AddProduct from "./AddProduct";
function MasterProducts() {  
  const [allProducts,setAllProducts] = useState([]);       
  const [viewProduct,setViewProduct] = useState([]);
  const [isVisible, initHs] = useState(false)
    const invokeCollapse = () => {
      return initHs(!isVisible)
    }
 const getAllProducts=()=>{
    fetch("https://dummyjson.com/products")
    .then(response => response.json())
    .then(data => 
      {
      setAllProducts(data.products);
      setViewProduct(data.products);
  } )

  }
  
useEffect(() => {
    getAllProducts();
},[]);

const handleSearchProduct=(filterproduct)=>{

setViewProduct(filterproduct);

}
const resetProduct =()=>{
  setViewProduct(allProducts);
  
  }

  const handleAddProduct=(productAdd)=>{
    console.log(productAdd)
    setViewProduct(  current => [...current,productAdd]);


   
     
  }
return(
<div class="container">
 
<div id="searchProdDiv" className="row" style={{marginTop:"10px"}}>
  <div class="accordion" id="accordionExample"  >
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Search Products
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show"  aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <SearchProducts productsSearch={allProducts} handleSearch={handleSearchProduct} clearList={resetProduct} />
      </div>
    </div>
  </div>    
    </div>         
  </div>

<div id="addProdDiv" className="row" style={{marginTop:"10px"}}>
 
  <div className='col-md-6'>

  <div class="modal fade" id="addProductModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content" >
      <div class="modal-header" >
        <h1 class="modal-title fs-5"  id="exampleModalLabel"> AddProduct</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <AddProduct handleAddProduct={handleAddProduct} allProducts={allProducts}/>
      </div>
  </div>
  </div>
  </div>
  
<button type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#addProductModal">
  AddProduct
 </button>

  </div>
  <div className='col-md-6'>
    </div>
  </div>
<div>
<ListOfProducts products={viewProduct} />
</div>
</div>
)




}
export default MasterProducts;