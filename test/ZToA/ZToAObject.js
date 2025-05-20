
class ZToAobject {
   
    get usernameInput() { return $('#user-name'); }
    get passwordInput() { return $('#password'); }
    get loginButton() { return $('#login-button'); }
    
   
    get burgerMenu() { return $('#react-burger-menu-btn'); }
    get resetAppState() { return $('#reset_sidebar_link'); }
    get logoutLink() { return $('#logout_sidebar_link'); }
    
  
    get sortDropdown() { return $('.product_sort_container'); }
    get firstProduct() { return $('.inventory_item:first-child .inventory_item_name'); }
    get firstProductAddToCart() { return $('.inventory_item:first-child .btn_inventory'); }
    get cartIcon() { return $('.shopping_cart_link'); }
    
   
    get checkoutButton() { return $('#checkout'); }
    
 
    get firstName() { return $('#first-name'); }
    get lastName() { return $('#last-name'); }
    get postalCode() { return $('#postal-code'); }
    get continueButton() { return $('#continue'); }
    
  
    get productName() { return $('.inventory_item_name'); }
    get productPrice() { return $('.inventory_item_price'); }
    get subtotalPrice() { return $('.summary_subtotal_label'); }
    get taxPrice() { return $('.summary_tax_label'); }
    get totalPrice() { return $('.summary_total_label'); }
    get finishButton() { return $('#finish'); }
    

    get successMessage() { return $('.complete-header'); }
}

module.exports = new ZToAobject();