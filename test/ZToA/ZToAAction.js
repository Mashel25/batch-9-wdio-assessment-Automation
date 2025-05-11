
const ZToAobject = require('./ZToAobject');

class ZToAAction {
   
    async login(username, password) {
        await ZToAobject.usernameInput.setValue(username);
        await ZToAobject.passwordInput.setValue(password);
        await ZToAobject.loginButton.click();
        console.log(`Logged in as: ${username}`);
        await browser.pause(5000);
    }

   async resetAppState() {
    await ZToAobject.burgerMenu.waitForClickable({ timeout: 5000 });
    await ZToAobject.burgerMenu.click();

    const resetLink = await ZToAobject.resetAppState;

    await resetLink.waitForDisplayed({ timeout: 5000 });
    await resetLink.scrollIntoView();
    await resetLink.waitForClickable({ timeout: 5000 });
    await resetLink.click();

    console.log('App state has been reset');

    // Ensure the menu closes cleanly
    await $('body').click();
    await browser.pause(500);
}

    
async logout() {
    try {
        console.log("Starting logout process...");
        
       
        await browser.execute(function() {
            document.getElementById('react-burger-menu-btn').click();
        });
        
        
        const logoutLink = await $('#logout_sidebar_link');
        await logoutLink.waitForClickable({ timeout: 5000 });
        
       
        await logoutLink.click();
        
      
        await browser.waitUntil(
            async () => (await browser.getUrl()).includes('saucedemo.com'),
            { timeout: 5000, timeoutMsg: 'Failed to redirect to login page after logout' }
        );
        
        console.log("Logout successful!");
    } catch (error) {
        console.error('Error during logout:', error);
        throw error;     
    }
    await browser.pause(5000);
}

    async sortZToA() {
        await ZToAobject.sortDropdown.selectByVisibleText('Name (Z to A)');
        
        await browser.pause(1000); 
        console.log('Products sorted from Z to A');
        await browser.pause(5000);
    }

    
    async addFirstProductToCart() {
        const productName = await ZToAobject.firstProduct.getText();
        await ZToAobject.firstProductAddToCart.click();
        console.log(`Added to cart: ${productName}`);
        return productName;
        await browser.pause(5000);
    }

    
    async goToCheckout() {
        await ZToAobject.cartIcon.click();
        console.log('Navigated to cart page');
        
        await ZToAobject.checkoutButton.click();
        console.log('Started checkout process');
    }

   
   async fillCheckoutInfo(firstName, lastName, postalCode) {
    await ZToAobject.firstName.setValue(firstName);
    await ZToAobject.lastName.setValue(lastName);
    await ZToAobject.postalCode.setValue(postalCode);
    
  
    await browser.pause(2000);

    await ZToAobject.continueButton.click();
    console.log('Checkout information filled');
}

  
    async getCheckoutDetails() {
        const name = await ZToAobject.productName.getText();
        const price = await ZToAobject.productPrice.getText();
        const subtotal = await ZToAobject.subtotalPrice.getText();
        const tax = await ZToAobject.taxPrice.getText();
        const total = await ZToAobject.totalPrice.getText();
        await browser.pause(5000);
        
        console.log(`Product: ${name}, Price: ${price}`);
        console.log(`Subtotal: ${subtotal}, Tax: ${tax}, Total: ${total}`);
        
        return { name, price, subtotal, tax, total };
        await browser.pause(5000);
    }

    async completeOrder() {
        await ZToAobject.finishButton.click();
        const message = await ZToAobject.successMessage.getText();
        console.log(`Order completed: ${message}`);
        return message;
        await browser.pause(5000);
    }
    
}

module.exports = new ZToAAction();