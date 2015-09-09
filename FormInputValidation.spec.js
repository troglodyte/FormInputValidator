describe('Testing Form Input Validation', function () {

    it("can correctly identify an email address", function () {
        var correct = FormInputValidation.isValidEmail('test@gmail.com');
        expect(correct).toBe(true);
    });

    it("can correctly identify an incorrect email address", function () {
        var bad = FormInputValidation.isValidEmail("bademailaddress");
        expect(bad).toBe(false);
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
});
