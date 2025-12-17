const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const hogan = require("hogan-express");
const path = require("path");

const publicViewRoutes = require("./routes/public/view");
const privateViewRoutes = require("./routes/private/view");
const publicApiRoutes = require("./routes/public/api");
const privateApiRoutes = require("./routes/private/api");

const app = express();

app.engine("hjs", hogan);
app.set("view engine", "hjs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
  secret: "giu-secret",
  resave: false,
  saveUninitialized: true
}));

app.use("/", publicViewRoutes);
app.use("/api/v1", publicApiRoutes);
app.use("/", privateViewRoutes);
app.use("/api/v1", privateApiRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
