const productObject = require("./productObject");
const ProductObject = require("./productObject");
class ProductActions{
    async selectProduct(productName){
        await productObject.productFromList(productName).click();
    }
    async selectVriation(size, color){
        await productObject.productVariation(size).click();
        await browser.pause(2000);
        await productObject.productVariation(color).click();
    }
    async enterproductQty(qty){
        await productObject.productQty.setValue(qty);
    }
    async clickAddToCartButton(){
        await productObject.buttonAddToCart.click();

    }

    }
module.exports= new ProductActions();