# HR Management System

## Description

- This project uses Express.js, MySQL, JWT to create RESTFUL APIs.
- This is my first backend project using Node.js.
- I have learned the efficiency of using Express.js to create RESTFUL APIs by working on this project.
- This project uses MVC architecture and you can simply perform CRUD operations using the API tester of your choice. I recommend POSTMAN API TESTER. Please follow the usage below.

## Installation

run -npm install

## Usage

- This project uses MVC architecture for each part of an HR Management System.
- There are 8 different parts, admins, countries, departments, employees, jobhistory, jobs, locations, regions.
- You can perform CRUD operations on each part by visiting the specific routes defined for them.
- Check out router registrations in App.js to determine what routes you should visit.
- For example, if you want to test something out on employees route, you can look up which route you should visit in App.js, and then you could look up nested routes in api/employees/employees.route.js
- This project uses JWT as an authentication method. You will need admin token to perform Create, Update, Delete operations. In order to get admin token, you will need to log in with admin credentials at api/admin (Check admins/admins.route.js for details). You will also need employee token to perform Retrive operation. You will need to log in with employee credentials at api/employees/login (Check api/employees/employees.route.js for more details).
- Please check out auth/tokenvalidation.js for better understanding of the authentication flow.
