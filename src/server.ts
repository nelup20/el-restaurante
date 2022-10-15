import express from "express";
import path from "path";
import bodyParser from "body-parser";
import paypal from "paypal-rest-sdk";
import helmet from "helmet";
import {ShopController, RecipesController, AbstractController, NewsController,
       IndexController, AboutController, ContactController, ErrorController} from "./controller";
import {paypalConfig} from "./config";

const routes: Record<string, AbstractController> = {
    "/": new IndexController(),
    "/shop": new ShopController(),
    "/recipes": new RecipesController(),
    "/news": new NewsController(),
    "/about": new AboutController(),
    "/contact": new ContactController(),
    "": new ErrorController()
}

let app = express();

app.use(helmet());
app.set("view engine", "html");
app.use(express.static(path.join(__dirname, 'view')));
app.use(bodyParser.urlencoded({extended: true}));

paypal.configure(paypalConfig);

Object.entries(routes).forEach(([route, controller]) => app.use(route, controller.router));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on Port ${PORT}: http://localhost:${PORT}/`));
