$.get("/api/v1/trucks/myTruck", function (truck) {
  $("#truckInfo").html(`
    <h4>${truck.name}</h4>
    <p>Status: ${truck.status}</p>
  `);
});


