$("#loginForm").submit(function(e){
  e.preventDefault();
  $.post("/api/v1/user/login", {
    email: $("#email").val(),
    password: $("#password").val()
  }, () => window.location.href = "/dashboard");
});
