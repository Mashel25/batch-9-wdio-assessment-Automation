<<<<<<< HEAD
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
	npm run allSuites

##  Allure Report Generation & Viewing	
After each test run, generate and view the Allure report using:
---
	npm run getResult
