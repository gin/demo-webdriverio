const login = require('../page-objects/login.page.js');

describe('the-internet.herokuapp.com login form', () => {
    it('should deny access with wrong creds', () => {
        browser.url('http://the-internet.herokuapp.com/login');
        $(login.username).setValue('test Wrong Name');
        $(login.password).setValue('test Wrong Password');
        $(login.btnSubmit).click();

        expect($(login.banner)).toHaveTextContaining('Your username is invalid!');

    });
    it('should accept access with correct creds', () => {
        browser.url('http://the-internet.herokuapp.com/login');
        $(login.username).setValue('tomsmith');
        $(login.password).setValue('SuperSecretPassword!');
        $(login.btnSubmit).click();

        expect($(login.banner)).toHaveTextContaining('You logged into a secure area!');
    });
});
