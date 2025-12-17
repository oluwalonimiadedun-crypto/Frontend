function loadCart() {
  $.get("/api/v1/cart/view", function (cart) {
    let total = 0;
    $("#cartBody").empty();

    if (!cart.length) {
      $("#cartBody").html("<tr><td colspan='5'>Cart is empty</td></tr>");
      return;
    }

    cart.forEach(item => {
      const subtotal = item.price * item.quantity;
      total += subtotal;

      $("#cartBody").append(`
        <tr>
          <td>${item.name}</td>
          <td>${item.price}</td>
          <td>
            <input type="number" value="${item.quantity}" min="1"
            onchange="updateQty(${item.cartId}, this.value)">
          </td>
          <td>${subtotal}</td>
          <td>
            <button class="btn btn-danger btn-sm"
            onclick="removeItem(${item.cartId})">X</button>
          </td>
        </tr>
      `);
    });

    $("#cartTotal").text("Total: " + total + " EGP");
  });
}

loadCart();

function updateQty(id, qty) {
  $.ajax({
    url: `/api/v1/cart/edit/${id}`,
    method: "PUT",
    data: { quantity: qty },
    success: loadCart
  });
}

function removeItem(id) {
  $.ajax({
    url: `/api/v1/cart/delete/${id}`,
    method: "DELETE",
    success: loadCart
  });
}

function placeOrder() {
  $.post("/api/v1/order/new", { pickupTime: $("#pickupTime").val() }, () => {
    alert("Order placed");
    window.location.href = "/myOrders";
  });
}


