$("#registerForm").submit(function (e) {
  e.preventDefault();

  const data = {
    name: $("#name").val(),
    email: $("#email").val(),
    password: $("#password").val()
  };

  $.post("/api/v1/user", data, function () {
    alert("Registration successful!");
    window.location.href = "/";
  });
});
