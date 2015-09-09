# FormInputValidator
Simple JS object to validate form input values

I was looking for a simple Javascript Object that I could ask questions against, 
without any other form magic/bloat that comes with some other more fully featured frameworks or libraries.

Usage: 
```javascript
if(FormInputValidation.isValidPhoneNumber('not a phone number')) {
  console.log('bad phone number');
}
```

There's some other regex's defined here that aren't exposed via a method, these aren't tested yet.
