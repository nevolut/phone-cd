# Phone CD

Handle DRC phone number validation

## Installation

```bash
npm install phone-cd
```

## Usage

```javascript
import phone from "phone-cd";
```

Or

```javascript
const phone = require("phone-cd");
```

### Return phone number to a national format

```javascript
const { national } = require("phone-cd");

const phone = national(00243832044091);
// const phone = national(243832044091);
// const phone = national(+243832044091);
// const phone = national(0832044091);

console.log(phone);
// 832044091
```

### Return phone number to a international format

```javascript
const { international } = require("phone-cd");
const phone = international(0832044091);
// const phone = local(+243832044091);

console.log(phone);
// 243832044091
```

### Return phone number operator

```javascript
const { operator } = require("phone-cd");
let operator = operator(0832044091);
console.log(operator);
// vodacom

operator = operator(243850964008);
console.log(operator);
// orange

operator = operator(243978491245);
console.log(operator);
// airtel

operator = operator(243902248661);
console.log(operator);
// africel

operator = operator(243721412335);
console.log(operator);
// null
```

## Validate phone number

```javascript
let phone = isValid(832044091);
console.log(phone);
// true

phone = isValid(0850964008);
console.log(phone);
// true

phone = isValid(243978491245);
console.log(phone);
// true

phone = isValid(+243902248661);
console.log(phone);
// true

phone = isValid(243721412335);
console.log(phone);
// false
```

#### Biso Nde Bana Kin
