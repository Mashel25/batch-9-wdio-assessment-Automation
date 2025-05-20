
const purchesAction = require('../test/purches/purchesAction');

describe(' Full Purchase Journey', () => {
    
    it('should login, reset, purchase items, verify details, finish and logout', async () => {
        
        await browser.url('https://www.saucedemo.com/');

        await purchesAction.login('standard_user', 'secret_sauce');

        await purchesAction.resetAppState();
       
        await purchesAction.addItemsToCart(3);

        await purchesAction.checkoutFlow();

        await purchesAction.verifyProductDetails();

        await purchesAction.finishPurchase();

        await purchesAction.resetAppState();

        await purchesAction.logout();

        await browser.pause(5000);
    });

});
