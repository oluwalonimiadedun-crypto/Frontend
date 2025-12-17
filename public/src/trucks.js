$(document).ready(function () {
  $.get("/api/v1/trucks/view", function (trucks) {
    let html = "";
    trucks.forEach(t => {
      html += `
        <div>
          <h3>${t.name}</h3>
          <p>Status: ${t.status}</p>
          <a href="/truckMenu/${t.id}">View Menu</a>
        </div>
        <hr/>
      `;
    });
    $("#truckList").html(html);
  });
});
