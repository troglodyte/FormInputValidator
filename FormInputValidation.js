
var FormInputValidation = {

    /** regex */
    ruleRegex: /^(.+?)\[(.+)\]$/,
    numericRegex: /^[0-9]+$/,
    integerRegex: /^\-?[0-9]+$/,
    decimalRegex: /^\-?[0-9]*\.?[0-9]+$/,
    emailRegex: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
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


    /** error messages */
    messages: {
        invalid_email: "This is not a valid email address.",
        invalid_date: "This is not a valid date format, please use mm/dd/(yy)yy.",
        invalid_alphanum: "You may only use letters and numbers",
        invalid_phone: "Not a valid phone number, phone number must be at least 10 digits."
    },

    isValidEmail: function(email) {
        return this.validate(this.emailRegex, email);
    },

    isValidDate: function(date) {
        // mm-dd-(yy)yy or mm/dd/(yy)yy
        return this.validate(this.dateRegex, date);
    },

    isValidAlphaNumeric: function(alphanum) {
        return this.validate(this.alphaNumericRegex, alphanum);
    },

    isValidPhoneNumber: function (phone) {
        if (typeof phone === 'string')phone = phone.replace(/\D/g,'');
        return !(phone == '' || phone.length < 10);
    },

    validate: function(regex, subject, msg) {
        if (!this.isEmpty(subject)) return false;
        var result = regex.test(subject);
        return result === true;
    },

    isEmpty: function(subject) {
        if (typeof subject === 'undefined'
            || subject === ''
            || subject === null) {
            this.setMessage("This field is required");
            return false;
        }
        return true;
    }

};