# 🚀 GUVI Full Stack Internship Project

## 📌 Project Overview

This project is a **Full Stack Web Application** developed as part of the **GUVI Internship Requirements**.

The application allows users to:

* Register an account
* Login securely
* View and update their profile

---

## 🔄 Application Flow

👉 **Register → Login → Profile**

1. 🧾 User registers with valid details
2. 🔐 User logs in using registered credentials
3. 👤 User is redirected to profile page
4. ✏️ User can update profile details (age, DOB, contact)

---

## 🛠️ Tech Stack Used

### Frontend

* HTML
* CSS (Custom + Bootstrap)
* JavaScript
* jQuery (AJAX)

### Backend

* PHP

### Database

* MySQL → User authentication (Register & Login)
* MongoDB → Profile data storage
* Redis → Session management

---

## ⚙️ Features

### 🔐 Authentication System

* Secure user registration and login
* Only valid Gmail accounts allowed
* Passwords stored using hashing
* Invalid login attempts handled

### 👤 Profile Management

* Displays user information
* Allows updating:

  * Age
  * Date of Birth
  * Contact

### ⚡ Session Handling

* Frontend session using **localStorage**
* Backend session using **Redis**

---

## 📁 Folder Structure

```
guvi_project/
│
├── assets/
│   └── screenshots/
│
├── css/
│   └── style.css
│
├── js/
│   ├── login.js
│   ├── register.js
│   └── profile.js
│
├── php/
│   ├── db.php
│   ├── login.php
│   ├── register.php
│   ├── profile.php
│   ├── mongo.php
│   └── redis.php
│
├── login.html
├── register.html
├── profile.html
└── README.md
```

---

## 📸 Screenshots

### 🧾 Register Page

![Register](assets/screenshots/register.png)

### 🔐 Login Page

![Login](assets/screenshots/login.png)

### 👤 Profile Page

![Profile](assets/screenshots/profile.png)

---

## 🧪 Setup Instructions

### 1️⃣ Start XAMPP

* Start **Apache**
* Start **MySQL**

---

### 2️⃣ Place Project Folder

```
C:\xampp\htdocs\guvi_project
```

---

### 3️⃣ Create Database

Open **phpMyAdmin** and run:

```sql
CREATE DATABASE guvi_project;

USE guvi_project;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255)
);
```

---

### 4️⃣ Install Dependencies

#### MongoDB

* Install MongoDB server
* Install PHP MongoDB library:

```
composer require mongodb/mongodb
```

#### Redis

* Install Redis server
* Enable Redis extension in `php.ini`

---

### 5️⃣ Run Project

Open browser:

```
http://localhost/guvi_project/register.html
```

---

## ⚠️ Important Notes

* All backend calls use **AJAX (jQuery)**
* No form submission is used
* PHP uses **Prepared Statements**
* Session is handled using:

  * localStorage (frontend)
  * Redis (backend)

---

## 🎯 Outcome

This project demonstrates:

* Full Stack Development Skills
* Secure Authentication Implementation
* Database Integration (MySQL + MongoDB)
* Session Handling using Redis
* Clean UI using Bootstrap

---

## 🙌 Author

**Yaswanth S**

* 🎓 Srikrishna Arts and Science College
* 💻 Aspiring Software Developer
* 🤝 NSS Volunteer

---

## 📌 Submission

Submitted as part of **GUVI Internship Program**

🔗 https://guvi.in/intern

---
