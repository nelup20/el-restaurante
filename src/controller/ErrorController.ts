import {Request, Response} from "express";
import {AbstractController} from "./AbstractController";

export class ErrorController extends AbstractController {
    constructor() {
        super();
        this.router.get("", this.getPage);
    }

    getPage = (_request: Request, response: Response): void => {
        response.status(404);
        response.redirect("back"); // TODO show error
    }
}
