const occasionEl = document.querySelector(".special__main");
const productEl = document.querySelector(".product__info-shoes");
const cartItemEl = document.querySelector(".cart__mini ul");
const subTotalEl = document.querySelector(".cart__total-text");





function renderOccasion() {
  occasions.forEach((occasion) => {
    occasionEl.innerHTML += `
        <div class="special__section" >
            <div class="special__img"><img src="${occasion.images}" alt=""></div>
            <div class="special__text">
                <h3>${occasion.name}</h3>
                <span>$${occasion.price}.00</span>
            </div>
        </div>
        `;
  });
}

renderOccasion()


function renderProduct() {
  products.forEach((product) => {
    productEl.innerHTML += `
        <div class="product__item-shoes">
            <div class="thumb-item"><img src="${product.img}" alt=""></div>
            <span class="badge ${product.color}">New</span>
            <div class="item__info-product">
                <h4>${product.name}</h4>
            </div>
            <a href="#" class="quick-view">Quick View</a>
            <div class="item__price-product">
                <div class="price-text">
                    <span class="money">$${product.prices}.00</span>
                    <ul>
                        <li>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star'></i>
                            <i class='bx bxs-star-half'></i>
                            <i class='bx bx-star'></i></li>
                    </ul>
                </div>

                <div class="price-btn" onclick="addToCart(${product.id})">
                    <i class='bx bxs-cart' ></i>
                </div>
            </div>
        </div>
        `;
  });
}

renderProduct()

// cart array
let cartArray = [];
cartArray = JSON.parse(localStorage.getItem("CART")||[]);
updateCart();

function addToCart(id) {
  // check if product is already exist in cart
  if (cartArray.some((item) => item.id === id)) {
    changeNumberOfUnits("plus", id);
  } else {
    const item = products.find((product) => product.id === id);
    cartArray.push({
      ...item,
      numberOfUnits: 1,
    });
  }
  // console.log(cartArray)
  updateCart();
}

// Update Cart
function updateCart() {
  renderCartItem();
  renderSubTotal();

  // Save Cart To Local Storage
  // save cart to local storage
  
  localStorage.setItem("CART", JSON.stringify(cartArray)) || [];
}

// Calculae And Render Subtotal
function renderSubTotal() {
  let totalPrice = 0;

  cartArray.forEach((item)=> {
    totalPrice += item.prices * item.numberOfUnits;
  });
  subTotalEl.innerHTML = `Subtotal: <span>$${totalPrice}.00</span>`
}

// Render Cart ITem
function renderCartItem() {
  cartItemEl.innerHTML = ""; // clear cart element
  cartArray.forEach((item) => {
    cartItemEl.innerHTML += `
                <li>
                <div class="cart__name">
                    <a href="#">${item.name}</a>
                </div>
                <div class="cart__text">
                    <span>$</span>
                    <span id="cart-item-price" class="cart-item-price">${item.prices}.00</span>
                </div>

                <div class="cart__quantity">
                    <div class="cart__minus" onclick="changeNumberOfUnits('minus', ${item.id})"><i class='bx bx-minus'></i></div>
                    <div class="cart__number">${item.numberOfUnits}</div>
                    <div class="cart__plus" onclick="changeNumberOfUnits('plus', ${item.id})"><i class='bx bx-plus'></i></div>
                </div>

                <div class="cart__icon-trash" onclick="removeItemFromCart(${item.id})">
                        <i class='bx bx-trash-alt'></i>
                </div>
            </li>
        `;
  });
}

// Change Number Of Units for an item
function changeNumberOfUnits(action, id) {
  cartArray = cartArray.map((item) => {
    let numberOfUnits = item.numberOfUnits;

    if (item.id === id) {
      if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits--;
      } else if (action === "plus" && numberOfUnits < item.instock) {
        numberOfUnits++;
      }
    }
    return {
      ...item,
      numberOfUnits,
    };
  });

  updateCart();
}

// Remove Item From Cart

function removeItemFromCart(id) {
  cartArray = cartArray.filter((item) => item.id !== id)
  updateCart();
}


