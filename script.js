
function toggleRegisterPassword() {
  const passwordInput = document.getElementById("reg-password");
  passwordInput.type = (passwordInput.type === "password") ? "text" : "password";
}

function toggleLoginPassword() {
  const passwordInput = document.getElementById("login-password");
  passwordInput.type = (passwordInput.type === "password") ? "text" : "password";
}

  function showLogin() {
    document.getElementById("register-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
  }

  function showRegister() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("register-form").style.display = "block";
  }

  function register() {
    const fullname = document.getElementById("reg-fullname").value.trim();
    const email = document.getElementById("reg-email").value.trim();
    const username = document.getElementById("reg-username").value.trim();
    const password = document.getElementById("reg-password").value.trim();
    const msg = document.getElementById("register-msg");


    if (!fullname || !email || !username || !password) {
      msg.style.color = "red";
      msg.textContent = "⚠ Please complete all fields before proceeding.";
      return;
    }

    
    localStorage.setItem("cs_fullname", fullname);
    localStorage.setItem("cs_email", email);
    localStorage.setItem("cs_username", username);
    localStorage.setItem("cs_password", password);

    msg.style.color = "green";
    msg.textContent = "✅ Registration successful! Please login.";
    setTimeout(showLogin, 1500);
  }

  function login() {
    const username = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value.trim();
    const msg = document.getElementById("login-msg");

    const storedUser = localStorage.getItem("cs_username");
    const storedPass = localStorage.getItem("cs_password");

    if (!storedUser || !storedPass) {
      msg.style.color = "red";
      msg.textContent = "⚠ You must register first before logging in!";
      return;
    }

    if (username === storedUser && password === storedPass) {
      msg.style.color = "green";
      msg.textContent = "Login successful! Redirecting...";
      setTimeout(() => {
        window.location.href = "Homepage.html"; 
      }, 1500);
    } else {
      msg.style.color = "red";
      msg.textContent = "❌ Invalid username or password!";
    }
  }

 
 
 
 
 
 function showLogin() {
    document.getElementById("register-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
  }

  function showRegister() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("register-form").style.display = "block";
  }

  function register() {
    const fullname = document.getElementById("reg-fullname").value.trim();
    const email = document.getElementById("reg-email").value.trim();
    const username = document.getElementById("reg-username").value.trim();
    const password = document.getElementById("reg-password").value.trim();
    const msg = document.getElementById("register-msg");


    if (!fullname || !email || !username || !password) {
      msg.style.color = "red";
      msg.textContent = "⚠ Please complete all fields before proceeding.";
      return;
    }

    
    localStorage.setItem("cs_fullname", fullname);
    localStorage.setItem("cs_email", email);
    localStorage.setItem("cs_username", username);
    localStorage.setItem("cs_password", password);

    msg.style.color = "green";
    msg.textContent = "✅ Registration successful! Please login.";
    setTimeout(showLogin, 1500);
  }

  function login() {
    const username = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value.trim();
    const msg = document.getElementById("login-msg");

    const storedUser = localStorage.getItem("cs_username");
    const storedPass = localStorage.getItem("cs_password");

    if (!storedUser || !storedPass) {
      msg.style.color = "red";
      msg.textContent = "⚠ You must register first before logging in!";
      return;
    }

    if (username === storedUser && password === storedPass) {
      msg.style.color = "green";
      msg.textContent = "Login successful! Redirecting...";
      setTimeout(() => {
        window.location.href = "Homepage.html"; 
      }, 1500);
    } else {
      msg.style.color = "red";
      msg.textContent = "❌ Invalid username or password!";
    }
  }

//logout function
    function logout() {
      alert("✅ You have successfully logged out."); 
      setTimeout(() => {
        window.location.href = "index.html"; 
      }, 500); 
    }





    function showCheckout(){
  if(cart.length === 0){
    alert("Your cart is empty!");
    return;
  }
  document.getElementById('checkoutSection').style.display = "block";
}


let slideIndex = 0;
const slides = document.querySelectorAll(".slideshow-container img");

function showSlides() {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
  });

  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }

  slides[slideIndex - 1].classList.add("active");
}

setInterval(showSlides, 3000);





function openAllProducts() {
  document.getElementById('allProductsModal').style.display = 'block';
}

function closeAllProducts() {
  document.getElementById('allProductsModal').style.display = 'none';
}

function openCheckout(name, price) {
  document.getElementById('checkoutProductName').innerText = name;
  document.getElementById('checkoutProductPrice').innerText = `₱${price}`;
  document.getElementById('checkoutQty').value = 1;
  document.getElementById('checkoutTotal').innerText = price;
  document.getElementById('checkoutModal').style.display = 'block';
}

function closeCheckout() {
  document.getElementById('checkoutModal').style.display = 'none';
}

document.getElementById('checkoutQty').addEventListener('input', function() {
  const price = parseFloat(document.getElementById('checkoutProductPrice').innerText.replace('₱',''));
  const qty = parseInt(this.value);
  document.getElementById('checkoutTotal').innerText = price * qty;
});

function placeOrder() {
  alert(`Order placed for ${document.getElementById('checkoutProductName').innerText}`);
  closeCheckout();
}


    document.getElementById("year").textContent = new Date().getFullYear();

    function logout() {
      alert("✅ You have successfully logged out."); 
      setTimeout(() => {
        window.location.href = "index.html"; 
      }, 500); 
    }

function openProduct(id) {
  document.getElementById(id).style.display = 'flex';
}

function closeProduct(id) {
  document.getElementById(id).style.display = 'none';
}

function submitOrder(event) {
  event.preventDefault();
  alert("✅ Order placed successfully!");

  // close current modal
  document.querySelectorAll(".product-modal").forEach(modal => {
    modal.style.display = "none";
  });
}

let currentProduct = {name: "", price: 0};

function openCheckout(name, price) {
  currentProduct = {name, price};
  document.getElementById("checkoutProductName").textContent = name;
  document.getElementById("checkoutProductPrice").textContent = "₱" + price;
  document.getElementById("checkoutQty").value = 1;
  document.getElementById("checkoutTotal").textContent = price;
  document.getElementById("checkoutModal").style.display = "flex";
}

function closeCheckout() {
  document.getElementById("checkoutModal").style.display = "none";
}

document.getElementById("checkoutQty").addEventListener("input", function() {
  let qty = parseInt(this.value) || 1;
  document.getElementById("checkoutTotal").textContent = currentProduct.price * qty;
});

function placeOrder() {
  let brand = document.getElementById("checkoutBrand").value;
  let qty = document.getElementById("checkoutQty").value;
  let total = document.getElementById("checkoutTotal").textContent;

  alert("✅ Order Placed!\n\n" +
        "Product: " + currentProduct.name + "\n" +
        "Brand: " + brand + "\n" +
        "Quantity: " + qty + "\n" +
        "Total: ₱" + total);

  closeCheckout();
}

let cart = [];
let total = 0;


function addToCart(name, price, image = '', buttonEl = null) {
  
  if (buttonEl) {
    flyToCartAnimation(buttonEl);
  }

 
  cart.push({ name, price, image });
  total += price;
  updateCartUI();
}

// Fly to cart animation
function flyToCartAnimation(buttonEl) {
  const cartIcon = document.getElementById("cartIcon");
  const img = buttonEl.closest(".clemente-villavicencio-product").querySelector("img");

  if (!img || !cartIcon) return;

  const imgClone = img.cloneNode(true);
  const imgRect = img.getBoundingClientRect();
  const cartRect = cartIcon.getBoundingClientRect();

  imgClone.style.position = "fixed";
  imgClone.style.top = imgRect.top + "px";
  imgClone.style.left = imgRect.left + "px";
  imgClone.style.width = imgRect.width + "px";
  imgClone.style.height = imgRect.height + "px";
  imgClone.style.transition = "all 0.8s ease-in-out";
  imgClone.style.zIndex = "9999";
  document.body.appendChild(imgClone);

  setTimeout(() => {
    imgClone.style.top = cartRect.top + "px";
    imgClone.style.left = cartRect.left + "px";
    imgClone.style.width = "30px";
    imgClone.style.height = "30px";
    imgClone.style.opacity = "0.5";
  }, 50);

  setTimeout(() => {
    imgClone.remove();
  }, 850);
}


function updateCartUI() {
  const wrapper = document.getElementById('cartItemsWrapper');
  wrapper.innerHTML = "";
  cart.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = "cartItem";
    div.innerHTML = `
      <div style="display:flex;align-items:center;gap:8px;">
        ${item.image ? `<img src="${item.image}" style="width:40px;height:40px;object-fit:cover;">` : ""}
        <span>${item.name} - ₱${item.price}</span>
      </div>
      <button onclick="removeFromCart(${index})">Cancel</button>
    `;
    wrapper.appendChild(div);
  });
  document.getElementById('cartCount').innerText = cart.length;
  document.getElementById('cartTotal').innerText = total;
}


function removeFromCart(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  updateCartUI();
}


function toggleCart() {
  const modal = document.getElementById('cartModal');
  modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}
function closeCartModal() {
  document.getElementById('cartModal').style.display = 'none';
}

// Checkout
document.getElementById('checkoutForm').addEventListener('submit', function (e) {
  e.preventDefault();
  if (cart.length === 0) { alert("Cart is empty!"); return; }
  let name = document.getElementById('customerName').value;
  let email = document.getElementById('customerEmail').value;
  let address = document.getElementById('customerAddress').value;
  let payment = document.getElementById('paymentMethod').value;
  alert(`✅ Order Confirmed!\nCustomer: ${name}\nEmail: ${email}\nAddress: ${address}\nPayment: ${payment}\nTotal: ₱${total}`);
  cart = []; total = 0; updateCartUI(); closeCartModal();
});



document.getElementById("productSearch").addEventListener("keyup", function () {
  let input = this.value.toLowerCase();
  let products = document.querySelectorAll(".clemente-villavicencio-product");
  let cartItems = document.getElementById("cartItems");
  let found = false;

  cartItems.innerHTML = ""; 

  products.forEach(function (product) {
    let productName = product.querySelector("h4").textContent.toLowerCase();

    if (input !== "" && productName.includes(input)) {
      found = true;
      product.style.display = "block";

      // Add item to search modal
      let li = document.createElement("li");
      li.textContent = product.querySelector("h4").textContent + " - " +
                       product.querySelector("p").textContent;
      cartItems.appendChild(li);
    } else if (input === "") {
      product.style.display = "block"; 
    } else {
      product.style.display = "none";
    }
  });

 
  document.getElementById("searchModal").style.display =
    (input !== "" && found) ? "block" : "none";
});

function closeSearch() {
  document.getElementById("searchModal").style.display = "none";
}

 document.getElementById("year").textContent = new Date().getFullYear();

  
    const faqItems = document.querySelectorAll('.clemente-villavicencio-faq-item');
    faqItems.forEach(item => {
      const question = item.querySelector('.clemente-villavicencio-faq-question');
      question.addEventListener('click', () => {
        item.classList.toggle('active');
      });
    });

    //faq
   document.querySelectorAll(".clemente-villavicencio-faq-question").forEach(question => {
    question.addEventListener("click", () => {
      const faqItem = question.parentElement;
      faqItem.classList.toggle("active");
    });
  });


