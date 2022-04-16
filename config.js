
const NODE_MAILER_USER = process.env.NODE_MAILER_USER;
const ATTACHMENT = "ElRestauranteBook.pdf";

module.exports = {
    nodeMailerConfig: {
        host: process.env.NODE_MAILER_HOST,
        port: process.env.NODE_MAILER_PORT,
        secure: false,
        auth: {
            user: NODE_MAILER_USER,
            pass: process.env.NODE_MAILER_PASSWORD
        }
    },

    paypalConfig: {
        'mode': 'sandbox',
        'client_id': process.env.PAYPAL_ID,
        'client_secret': process.env.PAYPAL_SECRET
    },

    getPaypalPaymentData: (price, quantity) => {
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
                        quantity
                    }]
                },
                "amount": {
                    "currency": "USD",
                    "total": price * quantity
                },
                "description": "Enjoy El Restaurante's Souvenir!."
            }]
        };
    },

    getEmailData: (toEmail) => {
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
}
