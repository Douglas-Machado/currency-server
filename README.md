# CURRENCY CONVERTER NODE

#### Languages, Frameworks

* [JS](https://www.javascript.com)

* [NODE](https://nodejs.org/en/)

* [Express](https://expressjs.com)

* [Axios](https://axios-http.com)

### Using

 Run `npm install` or `yarn` to get the packages

 Run `npm run dev` or `yarn dev` to start the application

### Request examples
    
  ## GET

  list all currencies

  [`localhost:3333/currencies`](http://localhost:3333/currencies)

  ## POST

  - from(string)
  - to(string)
  - amount(integer)

  [`localhost:3333/swap`](http://localhost:4000/swap)
```JSON
  {
    "from": "usd",
    "to": "brl",
    "amount": 5
  }
```
