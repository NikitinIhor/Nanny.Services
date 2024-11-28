Nanny.Services

Nanny.Services is a web application designed to help parents find the perfect nanny for their children. The platform allows users to register, log in, and filter available nannies based on specific criteria. The app supports real-time communication and easy contact submission via a form for detailed requests. Whether you're looking for a nanny who is highly rated, available at specific times, or offers services under a certain price range, Nanny.Services makes it simple to connect with the right caregivers.

Features

User Authentication: Register and log in securely using Firebase authentication.
Nanny Search: Filter nannies based on various criteria:
A to Z sorting
Z to A sorting
Price range: Less than $10 and Greater than $10
Popularity: Show popular and not popular nannies
Show all available nannies
Nanny Form: Fill out a detailed contact form to inquire about nannies, including:
Name
Email
Address
Phone number
Child’s age and meeting time
Comments and special requests
Redux for State Management: The app uses Redux to manage global state and authentication.
Formik & Yup: The app uses Formik for managing form state and Yup for validation.
Technologies
Frontend:

React
Redux
Firebase Authentication
Formik (for form handling)
Yup (for form validation)
CSS Modules for styling
Backend:

Firebase Firestore (for storing user data and nanny details)
State Management:

Redux for handling application state
Installation
Clone the Repository
bash

git clone https://github.com/NikitinIhor/Nanny.Services
Install Dependencies
Navigate to the project folder:

bash

cd nanny.services
Install dependencies using npm or yarn:

bash

npm install

# or

yarn install
Firebase Setup
Create a project in Firebase Console (https://console.firebase.google.com/).
Set up Firebase Authentication and Firestore.
Add Firebase configuration to your app by creating a firebaseConfig.ts file.
