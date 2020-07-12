# sql-join-to-json

> Convert 1d sql query results to nested javascript object

[![NPM](https://img.shields.io/npm/v/sql-join-to-json.svg)](https://www.npmjs.com/package/sql-join-to-json) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

#### npm

```sh
$ npm install --save sql-join-to-json
```

## Getting Started

```javascript
const sqlJoinToJson = require('sql-join-to-json');

const sqlResults = [
    {
        userName: 'Kusi Musah Hussein',
        age: 24,
        street: 'Fatih',
        apartment: 'CK11',
        phone: '24242424242',
        email: 'eg@email.com'
    },
    {
        userName: 'Kusi Musah Hussein',
        age: 24,
        street: 'Cari',
        apartment: 'YA11',
        phone: '242532535353',
        email: 'eg2@gmail.com'

    }
];

const resultStructure = {
    userName: 1,
    age: 1,
    address: {
        street: 1,
        apartment: 1
    },
    contact: {
        phone: 1,
        email: 1
    }
}

const result = sqlJoinToJson(resultStructure, sqlResults)

console.log(result);

/* 

    Prints

    [
        {
            userName: "Kusi Musah Hussein",
            age: 24,
            address: [
            { street: "Fatih", apartment: "CK11" },
            { street: "Cari", apartment: "YA11" },
            ],
            contact: [
            { phone: "24242424242", email: "eg@email.com" },
            { phone: "242532535353", email: "eg2@gmail.com" },
            ],
        },
];

*/


```


### Pull Requests

Pull requests are welcome