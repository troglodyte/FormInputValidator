describe('Testing Form Input Validation', function () {

    it("It can correctly identify an email address", function () {
        var correct = FormInputValidation.isValidEmail('test@gmail.com');
        expect(correct).toBe(true);
    });

    it("It can correctly identify an incorrect email address", function () {
        var bad = FormInputValidation.isValidEmail("bademailaddress");
        expect(bad).toBe(false);
        expect(FormInputValidation.message).toBe(FormInputValidation.messages.invalid_email);
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
});