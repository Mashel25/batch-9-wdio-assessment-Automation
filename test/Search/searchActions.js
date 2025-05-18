
const searchObject = require("./searchObject");

class searchActions {
    async clickSearchIcon() {
        await searchObject.searchIcon.click();
    }
    async enterProductName(productName){
        await searchObject.searchInputField.setValue(productName);

    }
    
    async search(productName) {
        await this.clickSearchIcon();
        await this.enterProductName(productName);
        await browser.keys("Enter");
    }
}

module.exports = new searchActions();