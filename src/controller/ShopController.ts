import path from 'path';
import * as paypal from "paypal-rest-sdk";
import {getPaypalPaymentData} from "../config";
import {Request, Response} from "express";
import {AbstractController} from "./AbstractController";

export class ShopController extends AbstractController {
    constructor() {
        super();
        this.router.get("/", this.getPage);
        this.router.post("/buy", this.buyItem);
    }

    getPage = (_request: Request, response: Response): void => {
        response.sendFile(path.join(__dirname, '../view/shop.html'))
    }

    buyItem = (request: Request, response: Response): void => {
        paypal.payment.create(getPaypalPaymentData(request.body.price, request.body.quantity), (error, payment) => {
            if (error) throw error; // TODO: better error handling (logging, show errorMsg to user)

            response.redirect(payment.links.find(link => link.rel === "approval_url").href);
        });
    }
}
