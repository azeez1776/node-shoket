# node-shoket

A simple node wrapper for the shoket payment API, for more information on the API visit [Shoket Official website](https://developers.shoket.co/).

## Getting Started

### Prerequisites

- Install [Node.js](https://nodejs.org/) which includes [Node Package Manager](https://www.npmjs.com/get-npm)


### Installation
Installing with npm:

```shell
npm install node-shoket
```

### Usage
```js
const {makePayment} = require('node-shoket');

makePayment(API_KEY,'5000','Sam Smith','user@mail.com','255612345678','Halotel');

```

### Testing
```js
npm test
```

## Documentation
The makePayment function is used to accept payments, the function has 6 parameters which are API_KEY, amount, customer_name, email, number_used and channel. 
The parameters as follows in the function:
```js
makePayment(API_KEY, amount, customer_name, email, number_used, channel);
```
| Parameter       | Required | Description                                                                                                 |
|-----------------|----------|-------------------------------------------------------------------------------------------------------------|
| API_KEY         | Yes      | This is the secret API key given on registering at the [Shoket Official site](https://dashboard.shoket.co/) |
| Amount          | Yes      | This is an amount in Tanzania shilling.                                                                     |
| Customer Number | Yes      | This is a customer phone number which will be used to charge a customer.                                    |
| Email           | Yes      | This is a customer Email                                                                                    |
| Channel         | Yes      | Mobile-provider name which is used by the customer phone number.                                            |
| Customer names  | Yes      | This is a customer full name                                                                                |

## Contributing

Please see [CONTRIBUTING](CODE_OF_CONDUCT.md) for details.


## Credits

-   [Abdulaziz(Samatar) Abdi](https://github.com/azeez1776)
-   [All Contributors](../../contributors)


## License

This project is licensed under the [MIT](LICENSE.md) License.
