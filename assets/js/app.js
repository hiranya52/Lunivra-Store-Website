function addToCart(name, price, image) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ name, price, image });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart!");
}


function loadCart() {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      let cartItems = document.getElementById("cartItems");
      let total = 0;
      cartItems.innerHTML = "";

      cart.forEach((item, index) => {
        total += item.price;
        cartItems.innerHTML += `
          <tr>
            <td class="p-3"><img src="${item.image}" class="w-20 rounded"></td>
            <td class="p-3">${item.name}</td>
            <td class="p-3">Rs. ${item.price}</td>
            <td class="p-3">
              <button onclick="removeItem(${index})" class="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
            </td>
          </tr>
        `;
      });

      document.getElementById("total").innerText = total;
    }

    function removeItem(index) {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      loadCart();
    }

    window.onload = loadCart;