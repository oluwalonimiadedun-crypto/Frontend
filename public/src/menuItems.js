$.get("/api/v1/menuItem/view", function (items) {
  items.forEach(i => {
    $("#items").append(`
      <tr>
        <td>${i.id}</td>
        <td>${i.name}</td>
        <td>${i.category}</td>
        <td>${i.price}</td>
        <td>
          <button class="btn btn-danger btn-sm"
          onclick="deleteItem(${i.id})">Delete</button>
        </td>
      </tr>
    `);
  });
});

function deleteItem(id) {
  if (!confirm("Delete item?")) return;
  $.ajax({
    url: `/api/v1/menuItem/delete/${id}`,
    method: "DELETE",
    success: () => location.reload()
  });
}
