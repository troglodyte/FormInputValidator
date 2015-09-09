describe('Testing Form Input Validation', function () {

    it("can correctly identify an email address", function () {
        expect(FormInputValidation.isValidEmail('test@gmail.com')).toBe(true);
    });

    it("can correctly identify an incorrect email address", function () {
        expect(FormInputValidation.isValidEmail("bademailaddress")).toBe(false);
    });

    it("can correctly identify an no .___ email address", function () {
        expect(FormInputValidation.isValidEmail("asdf@asdf")).toBe(false);
    });

    it("can correctly identify another incorrect email address", function () {
        expect(FormInputValidation.isValidEmail("asdf@asdf.")).toBe(false);
    });

    it("can correctly identify a xx/xx/xxxx date", function () {
        expect(FormInputValidation.isValidDate('02/23/2015')).toBe(true);
    });

    it("can correctly identify a xx/xx/xx date", function () {
        expect(FormInputValidation.isValidDate('02/23/15')).toBe(true);
    });

    it("can correctly identify a dashed date", function () {
        expect(FormInputValidation.isValidDate('02-23-2015')).toBe(true);
    });

    it("can validate alpha num characters", function () {
        expect(FormInputValidation.isValidAlphaNumeric('asdf1234')).toBe(true);
    });

    it("can find non alpha num characters", function () {
        expect(FormInputValidation.isValidAlphaNumeric('#asdf1234')).toBe(false);
    });

    it("can accept valid phone number", function () {
        expect(FormInputValidation.isValidPhoneNumber(123412341234)).toBe(true);
    });

    it("can catch short phone numbers", function () {
        expect(FormInputValidation.isValidPhoneNumber('asdfasdfasdfasdf1234')).toBe(false);
    });

    it('can catch undefined', function () {
        expect(FormInputValidation.isEmpty(undefined)).toBe(true);
    });

    it('can catch null', function () {
        expect(FormInputValidation.isEmpty(null)).toBe(true);
    });

    it('can catch empty string', function () {
        expect(FormInputValidation.isEmpty('')).toBe(true);
    });

    it('can catch is not empty', function(){
        expect(FormInputValidation.isNotEmpty('1')).toBe(true);
    });

    it('can catch is not not empty', function(){
        expect(FormInputValidation.isNotEmpty('')).toBe(false);
    });

    it('can identify a valid password', function () {
        expect(FormInputValidation.isValidPassword('Dilbert1!')).toBe(true);
    });

    it('can invalidate password missing special character', function () {
        expect(FormInputValidation.isValidPassword('Dilbert1')).toBe(false);
    });

    it('can invalidate password missing number', function () {
        expect(FormInputValidation.isValidPassword('Dilbert!')).toBe(false);
    });

    it('can invalidate password missing capital letter', function () {
        expect(FormInputValidation.isValidPassword('ilbert1!')).toBe(false);
    });

    it('can invalidate password missing lower case', function () {
        expect(FormInputValidation.isValidPassword('DILBERT1!')).toBe(false);
    });

    it('can invalidate password that is too short', function () {
        expect(FormInputValidation.isValidPassword('Dilbe1!')).toBe(false);
    });

    it('can invalidate password that is too long', function () {
        expect(FormInputValidation.isValidPassword('Dilbert1!Dilbert1!Dilbert1!sDil')).toBe(false);
    });

    it('can validate an expiration date', function(){
        expect(FormInputValidation.isValidExpirationDate('10/18')).toBe(true);
    });

    it('can validate a long expiration date', function(){
        expect(FormInputValidation.isValidExpirationDate('10/2018')).toBe(true);
    });

    it('can invalidate an expiration date', function(){
        expect(FormInputValidation.isValidExpirationDate('10/8')).toBe(false);
    });

    it('can identify a valid credit card number', function() {
        expect(FormInputValidation.isValidCreditCard('1234123412341234')).toBe(true);
    });

    it('can identify an invalid credit card number', function() {
        expect(FormInputValidation.isValidCreditCard('234123412341234')).toBe(false);
    });

    it('can identify a valid credit card number', function() {
        expect(FormInputValidation.isValidCreditCard('a234123412341234')).toBe(false);
    });
});
