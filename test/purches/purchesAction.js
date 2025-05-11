
const purchesObject = require('./purchesObject');

class PurchesAction {

    async login(username, password) {
        await purchesObject.username.setValue(username);
        await purchesObject.password.setValue(password);
        await purchesObject.loginBtn.click();
               
    }

    async addItemsToCart(count = 3) {
        const items = await purchesObject.addToCartBtns;
    
        for (let i = 0; i < count; i++) {
            await items[i].click();
            await browser.pause(2000); 
        }
    }
    

    async resetAppState() {
            if (await $('.bm-menu-wrap').isDisplayed()) {
            await browser.keys('Escape'); 
            await browser.pause(2000); 
        }
    
        await purchesObject.menuBtn.waitForClickable({ timeout: 2000 });
        await purchesObject.menuBtn.click();
    
        await purchesObject.resetAppState.waitForDisplayed({ timeout: 10000 });
        await purchesObject.resetAppState.click();
        await browser.pause(2000);
    } 
    async checkoutFlow() {
        await purchesObject.cartIcon.click();
        await browser.pause(2000);
    
       
        await purchesObject.checkoutBtn.waitForDisplayed({ timeout: 10000 });
    
        await purchesObject.checkoutBtn.click();
        await browser.pause(5000);
        await purchesObject.firstName.setValue("Zia");
        await purchesObject.lastName.setValue("Abrar");
        await purchesObject.postalCode.setValue("8300");
        await purchesObject.continueBtn.click();
        await browser.pause(10000);
        
    }
    
    async verifyProductDetails() {
        
        const itemElements = await purchesObject.itemNames;
        await browser.pause(2000);
    
        
        if (!Array.isArray(itemElements) || itemElements.length === 0) {
            console.error();
            return;
        }
    
        
        const itemTexts = [];
        for (const item of itemElements) {
            const name = await item.getText();
            itemTexts.push(name);
        }
    
        
        const totalElement = await purchesObject.itemTotal;
        const totalText = await totalElement.getText();
    
       
        console.log("Selected Items:", itemTexts.join(', '));
        console.log("Total Price:", totalText);

    }
    
    async finishPurchase() {
        await purchesObject.finishBtn.click();
        const msg = await purchesObject.successMsg.getText();
        console.log(`Order Success Message: ${msg}`);
    }

    async logout() {
    
    if (await $('.bm-menu-wrap').isDisplayed()) {
        await browser.keys('Escape');
        await browser.pause(2000);
    }

    await purchesObject.menuBtn.waitForClickable({ timeout: 2000 });
    await purchesObject.menuBtn.click();

    await purchesObject.logoutLink.waitForDisplayed({ timeout: 2000 });
    await purchesObject.logoutLink.click();
}

}

module.exports = new PurchesAction();
