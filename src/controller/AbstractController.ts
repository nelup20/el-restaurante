import {Router} from "express";

export abstract class AbstractController {
    private readonly _router: Router;

    protected constructor() {
        this._router = Router();
    }

    get router(): Router {
        return this._router;
    }
}
