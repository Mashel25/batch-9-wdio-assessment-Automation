<<<<<<< HEAD
# 🧪 Evershop Automation Test Suite

This project is an automation testing framework for the [Evershop Demo Website](https://demo.evershop.io/) using **WebdriverIO**. It verifies core functionalities like product search and adding items to the cart.

---

## ⚙️ Technologies Used

- **WebdriverIO**
- **JavaScript (Node.js)**
- **Mocha** (Test Framework)
- **Allure Reporter** (for optional reporting)
- **Page Object Model (POM)** Design Pattern

---

## 📁 Project Structure
---

## ✅ Test Scenarios

### 🔍 Scenario 1: Successfully Search a Valid Product

**Steps:**
1. Navigate to the homepage: `https://demo.evershop.io/`
2. Click on the search icon.
3. Enter product name (e.g., `"Nike air zoom pegasus 35"`).
4. Press Enter key.
5. Verify the product list appears with the searched item.

---

### 🛒 Scenario 2: Successfully Add Product to Cart

**Steps:**
1. Select the searched product from the list.
2. Choose product variations:  
   - **Size:** `M`  
   - **Color:** `Red`
3. Enter quantity: `4`
4. Click on the “Add to Cart” button.
5. Verify the product is added to the cart successfully.

---

## 🚀 How to Run the Tests

### 1. Install Dependencies

```bash
npm install
````

### 2. Execute All Tests

```bash
npm run search
```

### 3. Run a Specific Test File

```bash
npm run product
```

---

## 🧪 Sample Test Flow

```js

## 📌 Author

Created with 💻 by **Zia Abrar**

```
