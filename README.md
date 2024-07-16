Zakaat Calculator
A simple and intuitive Zakaat Calculator application built with React for the frontend and Firebase for the backend. This project demonstrates how to sign up, sign in, and calculate Zakaat using mock data and Firebase for user authentication.

Features
User Authentication: Sign up and login using Firebase Authentication.
Zakaat Calculation: Calculate your Zakaat with an easy-to-use form.
Responsive Design: Works on both desktop and mobile devices.
Firebase Hosting: Hosted on Firebase for seamless deployment and access.
Technologies Used
React: A JavaScript library for building user interfaces.
Firebase:
Authentication: For user sign-up and login.
Firestore: For storing and managing user data.
Hosting: For deploying the application.
React Router: For navigation between different pages.
React Toastify: For user-friendly notifications.
Tailwind CSS: For styling the application.
Screenshots
Home Page
<img src="./screenshots/HomePage.PNG" alt="Home Page" width="400">
Sign UP Page
<img src="./screenshots/SignUp.PNG" alt="Sign In Page" width="400">
Sign In Page
<img src="./screenshots/SignIn.PNG" alt="Sign In Page" width="400">
Demo
Check out the live demo of the app here: Live Demo

Getting Started
Follow these instructions to set up the project locally.

Prerequisites
Node.js and npm installed
Firebase account
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/mohashafici/Zakaat_Calculator.git
cd zakaat-calculator
Install dependencies:

bash
Copy code
npm install
Create a .env file in the root directory and add your Firebase configuration:

env
Copy code
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
Start the development server:

bash
Copy code
npm start
Open your browser and go to http://localhost:3000.