

const searchActions = require("../test/Search/searchActions"); 
const productAction = require("../test/product/productAction")  
const productName = "Nike air zoom pegasus 35";
const size = "M";
const color = "Red";
const qty = 4;



describe("Evershop website Automation Test suite", () => {
    it("Successfully Search a valid product", async () => {
       
        await browser.url("https://demo.evershop.io/");
        await searchActions.search(productName)
       // await searchActions.clickSearchIcon();
       // await searchActions.enterProductName(productName);
       // await browser.keys("Enter");
        await browser.pause(5000);
                   
    });

    it ("suceessfully product Add To cart",async () =>{
        await productAction.selectProduct(productName);
        await productAction.selectVriation(size, color);
        await productAction.enterproductQty(qty);
        await productAction.clickAddToCartButton();
        await browser.pause(5000);
        
            });
});
