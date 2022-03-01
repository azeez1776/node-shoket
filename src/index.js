const fetch = require('node-fetch');


const makePayment = async(api_key, amount, customer_name, email, number_used, channel) => {

    try{
        const response = await fetch('https://api.shoket.co/v1/charge/',{
            method:'post',
            body:JSON.stringify({
                amount:typeof(amount)==="string"?amount:amount.toString(),
                customer_name:customer_name,
                email:email,
                number_used:typeof(number_used)==="string"?number_used:number_used.toString(),
                channel:channel
            }),
            headers:{'Authorization': 'Bearer '+ api_key, "Content-Type":"application/json"}
        });

        const data = await response.json();
        console.log(data);
        return data;
    }catch(err){
        console.log(err)
    }
};

const verifyPayment = async(api_key, reference) => {
    try{
        const response = await fetch(`https://api.shoket.co/v1/verify/${reference}`,{
            method:'get',
            headers:{'Authorization': 'Bearer '+ api_key, "Content-Type":"application/json"}
        });

        const data = await response.json();
        console.log(data);
        return data;
    }catch(err){
        console.log(err)
    }
}

module.exports={
    makePayment,
    verifyPayment
};