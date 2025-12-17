$.get("/api/v1/order/truckOrders", function (orders) {
  orders.forEach(o => {
    $("#orders").append(`
      <div class="card mb-2">
        <div class="card-body">
          <h5>Order #${o.id}</h5>
          <select onchange="updateStatus(${o.id}, this.value)">
            <option>Pending</option>
            <option>Preparing</option>
            <option>Ready</option>
            <option>Completed</option>
          </select>
        </div>
      </div>
    `);
  });
});

function updateStatus(id, status) {
  $.ajax({
    url: `/api/v1/order/updateStatus/${id}`,
    method: "PUT",
    data: { status },
    success: () => alert("Status updated")
  });
}
