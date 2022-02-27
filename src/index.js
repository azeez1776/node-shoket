const fetch = require('node-fetch');

const makePayment = async(api_key, amount, customer_name, email, number_used, channel) => {
    try{
        const response = await fetch('https://api.shoket.co/v1/charge/',{
            method:'post',
            body:JSON.stringify({
                amount:amount,
                customer_name:customer_name,
                email:email,
                number_used:number_used,
                channel:channel
            })
        })
    }
}