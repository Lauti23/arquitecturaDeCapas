import express from "express";
import handlebars from "express-handlebars";
import { indexRoute } from "./routes/index.route.js";
import { loginRoute } from "./routes/login.route.js";


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("src/public"));

//CONFIGURACIÓN HANDLEBARS
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", "src/public/views");

app.use("/", indexRoute);
app.use("/login", loginRoute);





app.listen(8080, () => console.log("Server Up"))
