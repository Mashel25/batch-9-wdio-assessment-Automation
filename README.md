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
=======
# Batch 9: WebdriverIO Automation Assessment

This project contains three test scenarios built using **WebdriverIO**.  
Each test can be run **individually**, and all tests can also be executed **sequentially**.  
After every execution, an **Allure** report is generated automatically.

---

##  Prerequisites

- Framework: **Mocha**
- Language: **JavaScript**
- **Node.js** (v18 or higher)
- **Git**
- **Firefox browser**
- **VS Code**
- **Allure Commandline** (to view reports)

---

##  Setup Instructions

### 1. Clone the repository:
```bash
git clone https://github.com/Mashel25/batch-9-wdio-assessment-Automation.git
cd batch-9-wdio-assessment-Automation


##  Install dependencies
	npm install

 
##  Test Scenario Summary
	**singleItemZToA.spec.js — should login with performance_glitch_user, reset app state, sort Z to A, and checkout.
	**purches.spec.js — should login, reset, purchase items, verify details, finish and logout.
	**log.spec.js —login with locked_out_user and verify the error message.

##  Run individual test scenarios:
	npm run ZToA
	npm run purches
	npm run login


##  Run all test scenarios sequentially
	npm run allScenarios

##  Allure Report Generation & Viewing	
After each test run, generate and view the Allure report using:
---
	npm run getResult


>>>>>>> 327317afa4d52ccd32108380a3591111a57e2498
