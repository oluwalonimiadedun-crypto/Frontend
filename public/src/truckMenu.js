const truckId = window.location.pathname.split("/").pop();

function loadMenu(url) {
  $.get(url, function (items) {
    $("#menuItems").empty();
    items.forEach(item => {
      $("#menuItems").append(`
        <div class="col-md-4 mb-3">
          <div class="card">
            <div class="card-body">
              <h5>${item.name}</h5>
              <p>${item.description}</p>
              <p><strong>${item.price} EGP</strong></p>
              <input type="number" min="1" value="1" id="qty-${item.id}" class="form-control mb-2">
              <button class="btn btn-success" onclick="addToCart(${item.id})">Add to Cart</button>
            </div>
          </div>
        </div>
      `);
    });
  });
}

loadMenu(`/api/v1/menuItem/truck/${truckId}`);

function addToCart(itemId) {
  const quantity = $(`#qty-${itemId}`).val();
  $.post("/api/v1/cart/new", { itemId, quantity }, () => {
    alert("Item added to cart");
  });
}


