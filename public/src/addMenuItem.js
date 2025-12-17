function addItem() {
  $.post("/api/v1/menuItem/new", {
    name: $("#name").val(),
    category: $("#category").val(),
    description: $("#description").val(),
    price: $("#price").val()
  }, () => {
    alert("Item added");
    window.location.href = "/menuItems";
  });
}
