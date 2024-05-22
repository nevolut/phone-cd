# Phone CD

Handle DRC phone number validation and formatting with ease.

## Installation

To install the Phone CD package, run the following command:

```bash
npm install phone-cd
```

## Usage

You can import the package using either ES6 or CommonJS syntax:

### ES6 Import

```javascript
import phone from "phone-cd";
```

### CommonJS Require

```javascript
const phone = require("phone-cd");
```

## Functions

### phoneCD.national()

Formats the phone number to the national DRC format.

#### Examples

```javascript
phoneCD.national("00243832044091"); // returns 832044091
phoneCD.national(243832044091);     // returns 832044091
phoneCD.national(+243832044091);    // returns 832044091
phoneCD.national('0832044091');     // returns 832044091
```

### phoneCD.international()

Formats the phone number to the international DRC format (+243).

#### Examples

```javascript
phoneCD.international("00243832044091"); // returns 243832044091
phoneCD.international(243832044091);     // returns 243832044091
phoneCD.international(+243832044091);    // returns 243832044091
phoneCD.international('0832044091');     // returns 243832044091
```

### phoneCD.isValid()

Checks if a phone number is a valid DRC phone number.

#### Examples

```javascript
phoneCD.isValid(832044091);      // returns true
phoneCD.isValid(0850964008);     // returns true
phoneCD.isValid(243978491245);   // returns true
phoneCD.isValid(+243902248661);  // returns true
phoneCD.isValid(243721412335);   // returns false
```

### phoneCD.operator()

Verifies the operator of a DRC phone number.

#### Examples

```javascript
phoneCD.operator('0832044091');   // returns "vodacom"
phoneCD.operator(243850964008);   // returns "orange"
phoneCD.operator(+243978491245);  // returns "airtel"
phoneCD.operator(00243902248661); // returns "africel"
phoneCD.operator(243721412335);   // returns null
```

## API Reference

### phoneCD.national(value: string | number): number

**Parameters:**
- `value`: The phone number to format. Can be a string or a number.

**Returns:**
- The phone number in national format.

### phoneCD.international(value: string | number): number | null

**Parameters:**
- `value`: The phone number to format. Can be a string or a number.

**Returns:**
- The phone number in international format or `null` if invalid.

### phoneCD.isValid(value: string | number): boolean

**Parameters:**
- `value`: The phone number to validate. Can be a string or a number.

**Returns:**
- `true` if the number is a valid DRC phone number, `false` otherwise.

### phoneCD.operator(value: string | number): string | null

**Parameters:**
- `value`: The phone number to check the operator. Can be a string or a number.

**Returns:**
- The operator name as a string or `null` if no operator matches.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request on GitHub.

## License

This project is licensed under the MIT License. See the LICENSE file for details.