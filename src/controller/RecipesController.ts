import {AbstractController} from "./AbstractController";
import {getEmailData, nodeMailerConfig} from "../config";
import nodemailer from "nodemailer";
import path from "path";
import {Request, Response} from "express";
import {Transporter} from "nodemailer";

export class RecipesController extends AbstractController {
    private readonly transporter: Transporter;

    constructor() {
        super();
        this.router.get("/", this.getPage);
        this.router.post("/", this.postIndex);

        this.transporter = nodemailer.createTransport(nodeMailerConfig);
    }

    getPage = (_request: Request, response: Response): void => {
        response.sendFile(path.join(__dirname, '../view/recipes.html'))
    }

    postIndex = (request: Request, response: Response): void => {
        response.redirect("back")

        this.transporter.sendMail(getEmailData(request.body.email))
            .then((result: unknown) => console.log(`Email sent successfully: ${result}`))
            .catch((error: Error) => console.error(error)); // TODO: error handling
    }
}
