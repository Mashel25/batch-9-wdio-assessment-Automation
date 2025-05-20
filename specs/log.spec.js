const loginActions = require('../test/login/LoginAction');

describe('Locked Out User Login Test', () => {
    it('login with locked_out_user and verify the error message.', async () => {
        await browser.url('https://www.saucedemo.com/');

        await loginActions.loginWithCredentials('locked_out_user', 'secret_sauce');

        const error = await loginActions.getErrorMessage();
        const expected = 'Epic sadface: Sorry, this user has been locked out.';
        expect(error).toBe(expected);
        await browser.pause(3000);
    });
});
