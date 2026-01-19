# Shikchya – Learning Management System (LMS)

## 📘 Project Overview

**Shikchya** is a web-based **Learning Management System (LMS)** designed to provide users with an easy and structured way to **browse, purchase, and learn online courses**.
The platform supports user authentication, role-based access, and dynamic course management, making it suitable for modern e-learning needs.

This project is built as a **full-stack web application** using **React for the frontend** and a **separate backend server** to handle data, authentication, and business logic.

## 🎯 Objectives

* Provide a user-friendly platform for online learning
* Allow users to purchase and access courses securely
* Implement role-based authentication (Student / Instructor)
* Practice full-stack development with modern technologies
  
## ✨ Key Features

* User authentication (Login & Signup)
* Role selection during registration (Student / Instructor)
* Email and phone number validation (Nepali phone number supported)
* Course browsing and listing
* Course purchase system
* Student-specific course view
* Filters and sorting for course listings
* Secure access to purchased courses only
* Responsive and clean UI

## 🧠 User Roles

### 👨‍🎓 Student

* Register and log in
* Browse available courses
* Purchase courses
* View purchased courses
* Access learning content

### 👨‍🏫 Instructor (Optional/Future Scope)

* Create and manage courses
* Upload course content

## 🛠️ Technologies Used

### Frontend

* **React.js**
* JavaScript (ES6+)
* HTML5 / CSS3
* React Hooks
* Component-based architecture

### Backend

* Node.js
* Express.js
* RESTful APIs

### Database

* MongoDB (or applicable database)

### Other Tools

* Axios (API calls)
* JWT (Authentication)
* Git & GitHub (Version Control)

## 🔄 Project Workflow

1. **User Registration & Login**
   Users sign up with role selection and validated credentials.

2. **Course Browsing**
   Students can view all available courses with filtering and sorting options.

3. **Course Purchase**
   Users can purchase courses and gain access to learning content.

4. **Student View Courses**
   Displays courses based on purchase status using:

   * `fetchStudentViewCourseListService`
   * `checkCoursePurchaseInfoService`

5. **Learning Access**
   Students can read and learn from purchased courses only.

## 📊 Future Enhancements

* Payment gateway integration
* Instructor dashboard
* Video-based course content
* Certificate generation
* Admin panel
* Mobile responsiveness improvements

## 📌 Conclusion

**Shikchya** demonstrates a complete full-stack LMS solution with real-world features such as authentication, role-based access, and course purchasing.
It reflects practical experience in **React**, **backend APIs**, and **application architecture**.

## 👨‍💻 Author

**Anish Karki**
BSc Computer Science
