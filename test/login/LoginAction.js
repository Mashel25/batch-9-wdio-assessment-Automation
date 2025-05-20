const  loginObject = require('./loginObject');

class LoginActions {
    async loginWithCredentials(username, password) {
        await  loginObject.usernameInput.setValue(username);
        await  loginObject.passwordInput.setValue(password);
        await  loginObject.loginButton.click();
    }

    async getErrorMessage() {
        return await  loginObject.errorMessage.getText();
    }
}

module.exports = new LoginActions();
