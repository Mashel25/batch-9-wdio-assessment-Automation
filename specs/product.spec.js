const productAction = require("../test/product/productAction");
//const ProductActions = require("../test/product/productAction");
const size = "M";
const color = "Red";
const qty = 4;


describe("Demo QA-Product Test Suite",() =>{

xit ("suceessfully product Add To cart",async () =>{
                 //await browser.url("https://demo.evershop.io/men/nike-air-zoom-pegasus-35-146");
                 await productAction.selectVriation(size, color);
                 await productAction.enterproductQty(qty);
                 await productAction.clickAddToCartButton();
                 await browser.pause(10000);
                 
            });
            
  
});
