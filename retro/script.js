const checkoutItems = [];
const products = [
  {
    id: "01",
    name: "Burger",
    description: "Smoky Grilled Burger",
    price: 50.0,
    discount: 15,
    discountDescription: "FOODIES15",
    image: "img1/products/dish-1.png",
    maxQuantity: 20,
  },
  {
    id: "02",
    name: "Snacks",
    description: "Potato Chessy Patties",
    price: 200,
    discount: 5,
    discountDescription: "SIDES5",
    image: "img1/products/dish-2.png",
    maxQuantity: 50,
  },
  {
    id: "03",
    name: "Chicken",
    description: "Tandoori Roast",
    price: 300,
    discount: 2,
    discountDescription: "NONVEG2",
    image: "img1/products/dish-3.png",
    maxQuantity: 10,
  },
  {
    id: "04",
    name: "Pizza",
    description: "Chessy7",
    price: 250,
    discount: 5,
    discountDescription: "FOODIES5",
    image: "img1/products/dish-4.png",
    maxQuantity: 100,
  },
  {
    id: "05",
    name: "Dessert",
    description: "Choclate-Donut",
    price: 150,
    discount: 5,
    discountDescription: "SWEETS5",
    image: "img1/products/dish-5.png",
    maxQuantity: 60,
  },
  {
    id: "06",
    name: "Momos",
    description: "Chinese Veg-momos",
    price: 200,
    discount: 5,
    discountDescription: "CHINESE5",
    image: "img1/products/dish-6.png",
    maxQuantity: 20,
  },
];
const ourservices = [
  {
    id: "001",
    title: "Food Catering",
    subtitle: "We Cater To Your Ideas",
    description:
      "From Cooperate events to Weddings, we got it for you. Let us be your professional caterers, within your size and budget. We guarantee quality service. Leave the worrying to us and we’ll leave the celebrating to you. Small size events to big function; we surely got your back with our quality and efficiency. Call today and let us help you celebrate your next event: (+91 9988776655).",
    image: "img1/ourservices/1.png",
  },
  {
    id: "002",
    title: "Bulk Ordering",
    subtitle: "Contact Us For Bulk Order",
    description:
      "We know how bulk ordering can be quite a task but worry not, we understand all your bulk food needs & strive to meet them as effectively and conveniently as possible.We manage your bulk orders with a single P.O, payment, checkout, and delivery. If you would like to purchase a bulk order, please contact us through the Contact Us section for pricing. Call today for more information: (+91 9988776655).",
    image: "img1/ourservices/2.png",
  },
  {
    id: "003",
    title: "Food Delivering",
    subtitle: "The Food At Your Doorstep",
    description:
      "Get food delivery to your doorstep from Retro. We partner with the most efficient and professional delivery partners like Swiggy, Zomato, and also have our own delivery service to deliver to the areas that are not covered by our delivery partners. We surely got your back with our quality and efficiency. To order your food from anywhere Call today and let us help you celebrate your next occassion: (+91 9988776655).",
    image: "img1/ourservices/3.png",
  },
];

const discounts1 = [
  {
    id: "0001",
    coupon: "SWEETS5",
    image: "img1/discount-img/desert-discount.png",
  },
  {
    id: "0002",
    coupon: "FOODIES15",
    image: "img1/discount-img/burger-discount.png",
  },
  {
    id: "0003",
    coupon: "FOODIES5",
    image: "img1/discount-img/pizza-discount.png",
  },
];

function cartItemTemplate(cartItem, serialNo) {
  return `<div class="cart-item row no-gutters">
        <div class="col-1">${serialNo}.</div>
        <div class="col-4">${cartItem.productName}</div>
        <div class="col-3 text-right">${cartItem.productPrice} x ${
    cartItem.productQuantity
  }</div>
        <div class="col-3 text-right">${
          cartItem.productPrice * cartItem.productQuantity
        }</div>
        <div class="col-1"><button type="button" class="btn btn-link btn-sm" style="color:var(--danger)" onclick="removeFromCart(event,'${
          cartItem.productId
        }')"><i class="fa fa-times"></i></button></div>
        

  </div>`;
}
// cart function
let appliedCouponCode = '';
let totalCartDiscount = 0;

function generateCartItems() {
  const cartItemsHtml = [];
  let totalAmount = 0;

  applyCoupon(false);

  for (let i = 0; i < checkoutItems.length; i++) {
    const cartItem = checkoutItems[i];
    cartItemsHtml.push(cartItemTemplate(cartItem, i + 1));
    totalAmount += cartItem.productPrice * cartItem.productQuantity;
  }

if(cartItemsHtml.length>0){
  cartItemsHtml.push(
    `<div class="cart-item row no-gutters">
      <div class="col-5 text-right">Total Amount:</div>
      <div class="col-3"><hr/></div>
      <div class="col-3 text-right">${totalAmount}</div>
      <div class="col-1 text-right"> </div>
    </div>
    <div class="cart-item row no-gutters">
      <div class="col-12 justify-content-sm-end"><a class="btn btn-primary btn-sm" href="#order-details">Checkout</a></div>
    </div>`
  );
  }else{
    cartItemsHtml.push(`<div class="mx-2 text-muted"> 
    Your Cart is Empty!
  </div>`)
  }
  document.getElementById("cart-items").innerHTML = cartItemsHtml.join("\n");
  cartItemsHtml.pop();
  cartItemsHtml.push(
    `<div class="cart-item row no-gutters">
      <div class="col-5 text-right">Total Amount:</div>
      <div class="col-3"><hr/></div>
      <div class="col-3 text-right">${totalAmount}</div>
      <div class="col-1 text-right"> </div>
    </div>
    <div class="cart-item row no-gutters">
      <div class="col-5 text-right">Discounts:</div>
      <div class="col-3"><hr/></div>
      <div class="col-3 text-right" style="color:var(--green);">-${totalCartDiscount}</div>
      <div class="col-1 text-right"> </div>
    </div>
    <div class="cart-item row no-gutters">
      <div class="col-5 text-right">Payable Amount:</div>
      <div class="col-3"><hr/></div>
      <div class="col-3 text-right" style="font-weight:600">${totalAmount - totalCartDiscount}</div>
      <div class="col-1 text-right"> </div>
    </div>
    <div class="cart-item row no-gutters">
      <div class="col-6 text-right"><input id="coupon-code" value="${appliedCouponCode}" class="form-control form-control-sm w-75 d-inline-block" placeholder="coupon code"></div>
      <div class="col-6"><button class="btn btn-primary btn-sm" onclick="applyCoupon(true)">Apply Coupon</button></div><div><b>Payment Mode: Pay On Delivery</b></div>
    </div>
    `
  );

  document.getElementById('order-list-ct').innerHTML = cartItemsHtml.join("\n");
}



function applyCoupon(has2Generate) {
  var el = document.getElementById("coupon-code");
  
  appliedCouponCode = el?el.value:appliedCouponCode;

  const filteredItems = checkoutItems.filter(function(item) { return item.discountCode === appliedCouponCode });

  if(filteredItems.length) {
    const totalSum = filteredItems.reduce(function(prev, item){
      prev += item.productPrice * item.productQuantity;
      return prev;
    },0);
  
    totalCartDiscount = (totalSum * filteredItems[0].discount ) / 100;
  

  } else {
    totalCartDiscount = 0;
  } 

  if(has2Generate) {
    generateCartItems();
  }
}

function addToCart(pId) {
  var el = document.getElementById("qty-" + pId);
  var product =
    products.find(function (item) {
      return item.id === pId;
    }) || null;
  var quantity = parseInt(el.value, 10);
  if (quantity <= 0) {
    alert("Please add quantity");
    return;
  }
  if (product) {
    var cartProductIndex = checkoutItems.findIndex(function (item) {
      return item.productId === product.id;
    });
    if (cartProductIndex >= 0) {
      checkoutItems[cartProductIndex].productQuantity = quantity;
    } else {
      checkoutItems.push({
        productId: product.id,
        productName: product.name,
        productPrice: product.price,
        productQuantity: quantity,
        discountCode:product.discountDescription,
        discount:product.discount
      });
    }
    generateCartItems();
  }
}

function removeFromCart(evt,pId) {
  evt.stopPropagation();
  // after remove the item from cart
  var cartProductIndex = checkoutItems.findIndex(function (item) {
    return item.productId === pId;
  });
  if (cartProductIndex >= 0) {
    checkoutItems.splice(cartProductIndex, 1);
    generateCartItems();
    $('#dropdownMenuButton').dropdown('show');
  }
}

function productTemplate(product) {
  return `<div class="product-item">
    <div class="product-img" style="background-image:url('${product.image}')"></div>
          <div class="product-name"><h3>${product.name}</h3></div>
          <div class="product-name">Dish:&nbsp;${product.description}</div>    
          <div class="product-name">Price: Rs.${product.price}</div>    
          <div class="product-name">Discount Coupon: ${product.discountDescription}</div> 
          <div class ="product-actions row no-gutters">
          <div class="col-6 text-right">Qty:<input id="qty-${product.id}" type="number" min="0" max="${product.maxQuantity}" value="1" class="form-control form-control-sm w-25 d-inline-block" placeholder="Quantity"></div>
          <div class="col-6"><button type="button" class="btn btn-success btn-sm ml-2" onclick="addToCart('${product.id}')">Add to cart</button></div>
          </div> 
    </div>`;
}

function ourserviceTemplate(ourservice) {
  return `<div class="ourservice-item">
    <div class="ourservice-img" style="background-image:url('${ourservice.image}')"></div><br>
          <div class="ourservice-name"><h3>${ourservice.title}</h3></div>   <br> 
          <div class="ourservice-name"><h4>${ourservice.subtitle}</h4></div>   <br> 
          <div class="ourservice-name">${ourservice.description}</div>    
    </div>`;
}
function discount1Template(discount1) {
  return `<div class="discount1-item">
    <div class="discount1-img" style="background-image:url('${discount1.image}')"></div>
    <div class="discount1-name">Apply To Avail-&nbsp;<span class="code">${discount1.coupon}</span></div>      
    </div>`;
}

function orderplaced(){
  var fieldname = document.getElementById("exampleInputName2").value;
  var fieldemail = document.getElementById("exampleInputEmail2").value;
  var fieldphone = document.getElementById("exampleInputphone2").value;
  var fieldaddress = document.getElementById("exampleInputAddress2").value;
  if (fieldname != "" && fieldaddress != "" && fieldphone != "" && fieldemail!= "" )  {
  alert("Your Order has been placed Successfully and will be delivered in 30 mins!");
  return true;
  } else {
    if (fieldname === "") {
      alert("Please fill your Name");
      return false;
    }
    if (fieldaddress === "") {
      alert("Please fill Your Address.");
      return false;
    }
    
  if (fieldphone === "") {
    alert("Please fill your Phone Number.");
    return false;
  }
  if (fieldemail === "") {
    alert("Please fill your Email.");
    return false;
  }
}
}


function myFunction() {
  var fieldname = document.getElementById("exampleInputName1").value;
  var fieldemail = document.getElementById("exampleInputEmail1").value;
  var fieldmessage = document.getElementById("exampleFormControlTextarea1").value;
  if (fieldname != "" && fieldemail != "" && fieldmessage != "") {
  alert("Thank you! Your message has been sent successfully!! We'll Contact You Soon.");
  return true;
  } else {
    if (fieldname === "") {
      alert("Please fill your Name");
      return false;
    }
    if (fieldemail === "") {
    alert("Please fill your Email.");
    return false;
  }
  if (fieldmessage === "") {
    alert("Please write your message in the message box.");
    return false;
  }
  
}
}
function validatSignup(){
  var signupemail = document.getElementById("emaill").value;
  var password = document.getElementById("pass").value;
  var repassword = document.getElementById("a").value;
  if (signupemail != "" && password != "" && repassword != "" ) {
    alert("Your Details Have Been Recorded. Thank You!");
    return true;
    } else {
      if (signupemail === "") {
        alert("Please fill your Email Address");
        return false;
      }
      if (password === "") {
      alert("Please type your Password!");
      return false;
    }
    if (repassword === "") {
      alert("Please Re-type your Password.");
      return false;
    }
}
}

function validatLogin(){
  var signupemail = document.getElementById("emaill").value;
  var password = document.getElementById("pass").value;
 
  if (signupemail != "" && password != "") {
    alert("You Have logged in. Go to home page to place your order. Thank You!");
    return true;
    } else {
      if (signupemail === "") {
        alert("Please fill your Email Address");
        return false;
      }
      if (password === "") {
      alert("Please type your Password!");
      return false;
    }
}
}

function onLoad() {
  //$('.carousel').carousel();
  const productsHtml = [];
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    productsHtml.push(productTemplate(product));
  }
  console.log(productsHtml);
  document.getElementById("products-ct").innerHTML = productsHtml.join("\n");

  const ourservicesHtml = [];
  for (let a = 0; a < ourservices.length; a++) {
    const ourservice = ourservices[a];
    ourservicesHtml.push(ourserviceTemplate(ourservice));
  }
  console.log(ourservicesHtml);
  document.getElementById("ourservices-ct").innerHTML =
    ourservicesHtml.join("\n");

  const discounts1Html = [];
  for (let b = 0; b < discounts1.length; b++) {
    const discount1 = discounts1[b];
    discounts1Html.push(discount1Template(discount1));
  }
  console.log(discounts1Html);
  document.getElementById("discounts1-ct").innerHTML =
    discounts1Html.join("\n");
}

onLoad();
