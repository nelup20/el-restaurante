import path from "path";
import {Request, Response} from "express";
import {AbstractController} from "./AbstractController";

export class AboutController extends AbstractController {
    constructor() {
        super();
        this.router.get("/", this.getPage);
    }

    getPage = (_request: Request, response: Response): void => {
        response.sendFile(path.join(__dirname, '../view/about.html'))
    }
}

