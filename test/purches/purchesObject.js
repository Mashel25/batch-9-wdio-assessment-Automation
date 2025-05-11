

class PurchesObject {

    get username() { return $('#user-name'); }
    get password() { return $('#password'); }
    get loginBtn() { return $('#login-button'); }

   
    get menuBtn() { return $('#react-burger-menu-btn'); }
    get resetAppState() { return $('#reset_sidebar_link'); }
    get logoutLink() { return $('#logout_sidebar_link'); }


    get addToCartBtns() { return $$('button.btn_inventory'); }
    get cartIcon() { return $('.shopping_cart_link'); }

   
    get checkoutBtn() { return $('#checkout'); }
    get firstName() { return $('#first-name'); }
    get lastName() { return $('#last-name'); }
    get postalCode() { return $('#postal-code'); }
    get continueBtn() { return $('#continue'); }
    get finishBtn() { return $('#finish'); }

    get successMsg() { return $('.complete-header'); }
    get itemNames() { return $$('.inventory_item_name'); }
    get itemTotal() { return $('.summary_subtotal_label'); }
}

module.exports = new PurchesObject();
