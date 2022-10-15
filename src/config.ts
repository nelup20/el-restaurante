import {Payment} from "paypal-rest-sdk";

const NODE_MAILER_USER = process.env.NODE_MAILER_USER;
const ATTACHMENT = "ElRestauranteBook.pdf";

export const nodeMailerConfig: unknown = {
    host: process.env.NODE_MAILER_HOST,
    port: process.env.NODE_MAILER_PORT,
    secure: false,
    auth: {
        user: NODE_MAILER_USER,
        pass: process.env.NODE_MAILER_PASSWORD
    }
}

export const paypalConfig = {
    'mode': 'sandbox',
    'client_id': process.env.PAYPAL_ID,
    'client_secret': process.env.PAYPAL_SECRET
}

export const getPaypalPaymentData = (price: string, quantity: string): Payment => {
    return {
    "intent": "sale",
        "payer": {
        "payment_method": "paypal"
    },
    "redirect_urls": {
        "return_url": "http://localhost:3000/shop",
            "cancel_url": "http://localhost:3000/"
    },
    "transactions": [{
        "item_list": {
            "items": [{
                "name": "Souvenir",
                "sku": "001",
                price,
                "currency": "USD",
                quantity: parseInt(quantity)
            }]
        },
        "amount": {
            "currency": "USD",
            "total": `${parseInt(price) * parseInt(quantity)}`
        },
        "description": "Enjoy El Restaurante's Souvenir!."
    }]
};
}

export const getEmailData = (toEmail: string) => {
    return {
    from: NODE_MAILER_USER,
        to: toEmail,
        subject: "El Restaurante Recipe Book !",
        html: "<h2>Please enjoy our attached recipe book ! :)</h2>",
        attachments: [
        {
            filename: ATTACHMENT,
            path: `./attachments/${ATTACHMENT}`
        }
    ]
};
}
