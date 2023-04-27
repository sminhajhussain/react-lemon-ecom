import React  from "react";


function ListOfProducts(props){
 

 return(
<div className="container" >
       <div >
     <div className="row" style={{marginTop:"12px"}} >
      <h1 style={{textAlign:"center"}} > Table Of AllProducts </h1> 
      <table class="table table-bordered">
      <thead class="border border-dark">
      <tr>
      <th>ID</th>
      <th>Title</th>
      <th>Description</th>
      <th>Price </th>
      <th>Brand </th>
      </tr>
       </thead>
{ 
       props.products.map(prodObj =>( 
       <tbody class="border border-dark" >
        <tr>
        <td> {prodObj.id} </td>
        <td> {prodObj.title}</td>
        <td> {prodObj.description}</td>
        <td> {prodObj.price} </td>
        <td> {prodObj.brand} </td>
        </tr>
       </tbody>
)
)
}
       </table>
       </div>
      </div>
       </div>


)
};
export default ListOfProducts;