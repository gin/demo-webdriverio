describe('the-internet.herokuapp.com login form', () => {
    it('should deny access with wrong creds', () => {
        browser.url('http://the-internet.herokuapp.com/login');
        $('#username').setValue('test Wrong Name');
        $('#password').setValue('test Wrong Password');
        $('form button[type="submit"]').click();

        expect($('#flash')).toHaveTextContaining('Your username is invalid!');

    });
    it('should accept access with correct creds', () => {
        browser.url('http://the-internet.herokuapp.com/login');
        $('#username').setValue('tomsmith');
        $('#password').setValue('SuperSecretPassword!');
        $('form button[type="submit"]').click();

        expect($('#flash')).toHaveTextContaining('You logged into a secure area!');
    });
});

