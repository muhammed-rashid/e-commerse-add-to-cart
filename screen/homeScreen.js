import data from '../data.js'
const homeScreen = {
    render : ()=>{
       const {product} = data;
       return`
       <div class="site-section block-3 site-blocks-2 ">
       <div class="container">
         <div class="row justify-content-center">
           <div class="col-md-7 site-section-heading text-center pt-4">
             <h2>Featured Products</h2>
           </div>
         </div>
        <div class="row">
           <div class="col-md-12">
             <div class="nonloop-block-3 owl-carousel">

            ${product.map((product)=>`
                <div class="item" >
                <div class="block-4">
                  <figure class="block-4-image">
                    <img src="${product.image}" alt="Image placeholder" class="img-fluid">
                  </figure>
                  <div class="block-4-text p-4">
                    <h3><a href="view/${product._id}" class="h">${product.name}</a></h3>
                    <p class="mb-0">${product.disc}</p>
                    <p class="text-primary font-weight-bold">${product.price}</p>
                    <div >
                  <button class="buy"><a href="buy/${product._id}">buy Now</a>
                  </button>
                  <button class="cart"><a href="add-cart/${product._id}">Add To Cart</a>
                  </button>
                  </div>
                  </div>
                  
                </div>
              </div>
            `)}
                 </div>
             </div>
           </div>
         </div>
       </div>
     </div>`

    }
}
export default homeScreen;