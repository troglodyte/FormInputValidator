var FormInputValidation;
FormInputValidation = {
    /** regex */
    ruleRegex: /^(.+?)\[(.+)\]$/,
    numericRegex: /^[0-9]+$/,
    integerRegex: /^\-?[0-9]+$/,
    decimalRegex: /^\-?[0-9]*\.?[0-9]+$/,
    emailRegex: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    alphaRegex: /^[a-z]+$/i,
    alphaNumericRegex: /^[a-z0-9]+$/i,
    alphaDashRegex: /^[a-z0-9_\-]+$/i,
    naturalRegex: /^[0-9]+$/i,
    naturalNoZeroRegex: /^[1-9][0-9]*$/i,
    ipRegex: /^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/i,
    base64Regex: /[^a-zA-Z0-9\/\+=]/i,
    numericDashRegex: /^[\d\-\s]+$/,
    urlRegex: /^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
    dateRegex: /\d{1,2}[-/]\d{1,2}[-/]\d{2,4}/,
    passwordRegex: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,30}$/,
    expirationDateRegex: /^(1[0-2]|0[1-9]|\d)\/(20\d{2}|19\d{2}|0(?!0)\d|[1-9]\d)$/,


    /** error messages */
    messages: {
        invalid_email: "This is not a valid email address.",
        invalid_date: "This is not a valid date format, please use mm/dd/(yy)yy.",
        invalid_alphanum: "You may only use letters and numbers",
        invalid_phone: "Not a valid phone number, phone number must be at least 10 digits."
    },

    // @todo validate first character with valid card formats
    isValidCreditCard: function(cc) {
        return cc.length == 16 && this.validate(this.integerRegex, cc);
    },


    // typical pw, Upper, lower, number and special character required 8-30 characters long
    isValidPassword: function (pw) {
        return this.validate(this.passwordRegex, pw)
    },

    // 10/15 or 10/2015
    isValidExpirationDate: function (date) {
        return this.validate(this.expirationDateRegex, date)
    },

    isValidEmail: function (email) {
        return this.validate(this.emailRegex, email);
    },

    // mm-dd-(yy)yy or mm/dd/(yy)yy
    isValidDate: function (date) {
        return this.validate(this.dateRegex, date);
    },

    isValidAlphaNumeric: function (alphanum) {
        return this.validate(this.alphaNumericRegex, alphanum);
    },

    isValidPhoneNumber: function (phone) {
        if (typeof phone === 'string')phone = phone.replace(/\D/g, '');
        return !(phone == '' || phone.length < 10);
    },

    validate: function (regex, subject) {
        if (this.isEmpty(subject)) return false;
        return regex.test(subject) === true;
    },

    isNotEmpty: function (subject) {
        return this.isEmpty(subject) === false;
    },

    isEmpty: function (subject) {
        return (typeof subject === 'undefined'
        || subject === ''
        || subject === null);

    }
};