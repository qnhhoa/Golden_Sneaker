const bestSellerProducts = [
  {
    "id": 1,
    "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-mens-running-shoe-wide-D24Mcz-removebg-preview.png",
    "name": "Nike Air Zoom Pegasus 36",
    "description": "The iconic Nike Air Zoom Pegasus 36 offers more cooling and mesh that targets breathability across high-heat areas. A slimmer heel collar and tongue reduce bulk, while exposed cables give you a snug fit at higher speeds.",
    "price": 108.97,
    "color": "#e1e7ed"
  },
  {
    "id": 2,
    "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-shield-mens-running-shoe-24FBGb__1_-removebg-preview.png",
    "name": "Nike Air Zoom Pegasus 36 Shield",
    "description": "The Nike Air Zoom Pegasus 36 Shield gets updated to conquer wet routes. A water-repellent upper combines with an outsole that helps create grip on wet surfaces, letting you run in confidence despite the weather.",
    "price": 89.97,
    "color": "#4D317F"
  },
  {
    "id": 3,
    "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/cruzrone-unisex-shoe-T2rRwS-removebg-preview.png",
    "name": "Nike CruzrOne",
    "description": "Designed for steady, easy-paced movement, the Nike CruzrOne keeps you going. Its rocker-shaped sole and plush, lightweight cushioning let you move naturally and comfortably. The padded collar is lined with soft wool, adding luxury to every step, while mesh details let your foot breathe. There’s no finish line—there’s only you, one step after the next.",
    "price": 100.97,
    "color": "#E8D026"
  },
  {
    "id": 4,
    "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/epic-react-flyknit-2-mens-running-shoe-2S0Cn1-removebg-preview.png",
    "name": "Nike Epic React Flyknit 2",
    "description": "The Nike Epic React Flyknit 2 takes a step up from its predecessor with smooth, lightweight performance and a bold look. An updated Flyknit upper conforms to your foot with a minimal, supportive design. Underfoot, durable Nike React technology defies the odds by being both soft and responsive, for comfort that lasts as long as you can run.",
    "price": 89.97,
    "color": "#FD584A"
  },
  {
    "id": 5,
    "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/odyssey-react-flyknit-2-mens-running-shoe-T3VG7N-removebg-preview.png",
    "name": "Nike Odyssey React Flyknit 2",
    "description": "The Nike Odyssey React Flyknit 2 provides a strategic combination of lightweight Flyknit construction and synthetic material for support. Underfoot, Nike React cushioning delivers a soft, springy ride for a route that begs to be crushed.",
    "price": 71.97,
    "color": "#D4D7D6"
  },
  {
    "id": 6,
    "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/react-infinity-run-flyknit-mens-running-shoe-RQ484B__2_-removebg-preview.png",
    "name": "Nike React Infinity Run Flyknit",
    "description": "A pioneer in the running shoe frontier honors the original pioneer of running culture with the Nike React Infinity Run Flyknit. Blue Ribbon Track Club-inspired details pay homage to the haven that was created before running was even popular. This running shoe is designed to help reduce injury and keep you on the run. More foam and improved upper details provide a secure and cushioned feel.",
    "price": 160.0,
    "color": "#F2F5F4"
  },
  {
    "id": 7,
    "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/react-miler-mens-running-shoe-DgF6nr-removebg-preview.png",
    "name": "Nike React Miler",
    "description": "The Nike React Miler gives you trusted stability for miles with athlete-informed performance. Made for dependability on your long runs, its intuitive design offers a locked-in fit and a durable feel.",
    "price": 130.0,
    "color": "#22AFDC"
  },
  {
    "id": 8,
    "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/renew-ride-mens-running-shoe-JkhdfR-removebg-preview.png",
    "name": "Nike Renew Ride",
    "description": "The Nike Renew Ride helps keep the committed runner moving with plush cushioning. Firm support at the outsole helps you maintain stability no matter the distance.",
    "price": 60.97,
    "color": "#B50320"
  },
  {
    "id": 9,
    "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/vaporfly-4-flyknit-running-shoe-v7G3FB-removebg-preview.png",
    "name": "Nike Vaporfly 4% Flyknit",
    "description": "Built to meet the exacting needs of world-class marathoners, Nike Vaporfly 4% Flyknit is designed for record-breaking speed. The Flyknit upper delivers breathable support, while the responsive foam and full-length plate provide incredible energy return for all 26.2.",
    "price": 187.97,
    "color": "#3569A1"
  },
  {
    "id": 10,
    "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/zoom-fly-3-premium-mens-running-shoe-XhzpPH-removebg-preview.png",
    "name": "Nike Zoom Fly 3 Premium",
    "description": "Inspired by the Vaporfly, the Nike Zoom Fly 3 Premium gives distance runners race-day comfort and durability. The power of a carbon fiber plate keeps you in the running mile after mile.",
    "price": 160.0,
    "color": "#54D4C9"
  }
];

  renderBestSellerProducts(bestSellerProducts);
//   // renderCartItems(bestSellerProducts);

// });

//animation hover change img
// function setNewImage(id) {
//   document.getElementById(id).src = `./images/best-seller/bsl-changeImg-${id}.jpg`
// }
// function setOldImage(id) {
//   document.getElementById(id).src = `./images/best-seller/bsl-prod-${id}.jpg`
// }

function renderBestSellerProducts(list) {
  list.map((val, index) => {
    $(
    `
    <div class="item">
      <div class="image" style="background-color:${val.color};">
        <img id="${val.id}"  
        src="${val.image}" 
        alt="">
      </div>
      <div class="content">
        <p class="name-product">${val.name}</p>
        <p class="description">${val.description}</p>
        <div class="section-price">
          <span class="price-product">$${val.price}</span>
          <button onclick='addtocart(${JSON.stringify(val)})' class="shopping-cart">ADD TO CART</button>
        </div>
        
      </div>
    </div>
  `
    ).appendTo(".best-seller .items");
  })
}

  

const categories = [...new Set(bestSellerProducts.map((item)=>
  {return item}))]
console.log(categories)

var cart = []

function addtocart(product){

  // cart.push({...categories[id-1]});

  var item = {
    id: product.id,
    name: product.name,
    price: product.price,
    img: product.image
  }
  // var count = JSON.stringify(item).length;
  console.log(item);
  // console.log(count)
  var time = Number(new Date());
  var productJson = JSON.stringify(item);
  localStorage.setItem("product-"+time, productJson);
  displaycart();
}

function displaycart(){
  let j =0;
  let total = 0;
  // if(cart.length==0){
  //   // document.getElementById('cartItem').innerHTML='Your cart is empty';
  // } else{
    
  // }
  var keys = Object.keys(localStorage);
  var products = [];
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i]; 
    if (key.indexOf("product-") === 0) {
      var value = localStorage.getItem(key);
      products.push(JSON.parse(value));
    }
  }



  let htmlCart = '';
  let count = 0;
  if(products.length >0){
    products.map(item=>{
      total=total+item.price;
      console.log(Object.keys(item).length+" items in cart");
      // count = count + item.count(id);
      document.getElementById("total").innerHTML= "$ "+total;
      htmlCart += `
      <div class="item">
        <div class="item-left">
          <div class="cart-img" style="background-color: rgb(225, 231, 237);">
            <div class="image">
              <img  
              src="${item.img}" 
              alt="">
            </div>
          </div>
        </div>
        <div class="item-right">
          <div class="content">
            <p class="name-product">${item.name}</p>
            <div class="section-price">
              <span class="price-product">$${item.price}</span>
            </div>
            <div class="action">
              <div class="cartItemCount">
                <div class="btn-count">-</div>
                <div class="quantity">
                  <input
                      type="number"
                      class="quantity"
                      step="1"
                      value="1"
                      onchange="changeTotalProduct(${item.id}, event)">
                </div>
                <div class="btn-count">+</div>
              </div>
              <button class='btn-remove' onclick='removeCart(${item.id})'>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAALISURBVHic7Zs9bxNBEIYfgyUKAhhQUhDRICEBCh0fgkhBNIT8gPwZ6Gig5y8QCUhH5AqE3EZJgQRKEDSpKEAQkTMdcijGRvi8Z+/e3eze4X2kKe40t/Pu+LRfN4bIdNNQbLsJ3ATOFWznC7AJ/C6syCMngC3gsCTb7LdZGx5SXucH9kBD6BGNRoGrNWlTLQEa7R5VaFMtAbXBZwLWkVnHxtZ9iZr6N6Bp6TcHXAOOW/qfz7i36un5X8A28NXSfywrQJfypzVtS4D7ZSRgpwKdyWsfJnXOZincxf7VrxoJcHKcg80g2ClFShg6ZTQyD2xQr3GgC7yi+EYs8t+TZ329gKwJfiLzbRU4Cywh/fmuGegpw/PssmYwS5aAfURTD3ikFegKo4PNe61gDrxjWFMPuGj7sMte4JLh3mWH57VYSF03cDg7cEmAabxQ2aM7UkjX1O8GfSRgHmgjM8YO4wfOFWC379umYguZVcyrrkm0U/4JMGvwm2N0tblh0b5Jk+222csbcCd1PYOsI9KYzhvuqij6Bx8JMO0kZyz91HehcRAMLSA0MQGhBYQmJiC0gNDEBIQWEJqYgNACQhMTEFpAaGICQgsITUxAaAGhiQnwEMP0+axr6af+6c1HAjqp6wQpo02zxWhi3moIykveU+FBfUGCfEq7N8Z3GSlrSbD/vl/oVNiFvAnQpvLH4pUmJsDBN2tEDlnHn1UBZppljLgkYC/j/i2HNspmMeP+nkawY8ABowPOa41gFjSQaTKt5wDRqsKaIeAh8Bjd/x+laQBPMrQ80wy8iJSgmAK/QWpzW4rxW8gndNMvPyiPua0YH4DnGcGrYGuK/f7LGeBjgM5Nsl3gtGK/h7gAfFbukIt96mvySgt4WVB4UesBL4BTyn0dy42+iEGxog/bR8ai60XFlzl1NZFiyllknNDgB/ANKbaq1V9pI1XlD82w8ru3YIVHAAAAAElFTkSuQmCC">
              </button>
            </div>
          </div>
        </div>
      </div>`
    })
  }else{
    htmlCart ="Your cart is empty"
  }

  let cartItemDiv = document.getElementById('cart_content')
  if(cartItemDiv){
    cartItemDiv.innerHTML = htmlCart;
  }
  // cartItemDiv && cartItemDiv.innerHTML == cart.map((items)=>{
  //   var {id,image, name, price} = items;
  //   total=total+price;
  //   let totalDiv = document.getElementById("total");
  //   totalDiv && totalDiv.innerHTML== "$ "+total+".00";

  //   return(
  //    `
  //     <div class="item">
  //       <div class="image">
  //         <img id="${id}"  
  //         src="${image}" 
  //         alt="">
  //       </div>
  //       <div class="content">
  //         <p class="name-product">${name}</p>
  //         <div class="section-price">
  //           <span class="price-product">$${price}</span>
  //           <button class='btn-remove' onclick='delElement("+(${id}++)+")'></button>
  //         </div>
  //       </div>
  //     </div>`
  //   );
  // }).join('');
}
displaycart()
// ========== add to cart =========

function removeCart(id){
  var keys = Object.keys(localStorage);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
  
    if (key.indexOf("product-") === 0) {
      var valueJson = localStorage.getItem(key);
      let value = JSON.parse(valueJson)
      if(value.id === id){
        localStorage.removeItem(key);
        window.location.reload()
      }
    }
  }
}

function changeTotalProduct(id, e) {
  var keys = Object.keys(localStorage);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
      if (key.indexOf("product-") === 0) {
        var valueJson = localStorage.getItem(key);
        let value = JSON.parse(valueJson)
        if (keys[i].id == id) {
          keys[i].count = Number(e.target.value);
          window.location.reload()
      }
  }
}
}


