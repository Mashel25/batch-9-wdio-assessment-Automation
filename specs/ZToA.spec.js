

  const ZToAAction = require('../test/ZToA/ZToAAction');
  const { expect } = require('@wdio/globals');

 describe('Sauce Demo Z to A Sort and Checkout Test', () => {
    it('should login with performance_glitch_user, reset app state, sort Z to A, and checkout', async () => {
       
        await browser.url('https://www.saucedemo.com/');
        console.log('Navigated to Sauce Demo website');
       
        await ZToAAction.login('performance_glitch_user', 'secret_sauce');
        await ZToAAction.resetAppState();    
        await ZToAAction.sortZToA();
        
        const selectedProduct = await ZToAAction.addFirstProductToCart();     
        await ZToAAction.goToCheckout();     
        await ZToAAction.fillCheckoutInfo('Zia', 'Abrar', '8300');
        const details = await ZToAAction.getCheckoutDetails();
        expect(details.name).toBe(selectedProduct);
        console.log('✓ Product name verified');
        
        const priceValue = parseFloat(details.price.replace('$', ''));
        const subtotalValue = parseFloat(details.subtotal.split('$')[1]);
        const taxValue = parseFloat(details.tax.split('$')[1]);
        const totalValue = parseFloat(details.total.split('$')[1]);
        
       
        expect(subtotalValue).toBeCloseTo(priceValue, 2);
        console.log('✓ Subtotal verified');
        
    
        expect(totalValue).toBeCloseTo(subtotalValue + taxValue, 2);
        console.log('✓ Total price verified');
  
        const message = await ZToAAction.completeOrder();
        
      
        expect(message).toBe('Thank you for your order!');
        console.log('✓ Order completed successfully');
        
        await browser.url('https://www.saucedemo.com/inventory.html');
        await ZToAAction.resetAppState();
        await ZToAAction.logout();
        
        console.log('Test completed successfully!');
        
    });
});