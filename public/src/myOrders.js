$(document).ready(function () {
  $.get("/api/v1/order/myOrders", function (orders) {
    let html = "";
    if (orders.length === 0) {
      html = "<p>No orders found.</p>";
    } else {
      orders.forEach(o => {
        html += `
          <div>
            <h4>Order #${o.id}</h4>
            <p>Status: ${o.status}</p>
          </div>
          <hr/>
        `;
      });
    }
    $("#orders").html(html);
  });
});
