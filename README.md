# AuthGoogleFacebook

Warning:

### ⚠️ Folder Name Notice

If you downloaded this project as a `.zip` file from GitHub, the extracted folder may be named something like:
AuthGoogleFacebook-main

To avoid any issues while working with the project, please rename the folder to:
AuthGoogle

### ⚠️  Note:
Please ensure to properly set up and monitor Google and Facebook integrations in your Firebase console and developer accounts to enable smooth authentication and avoid any disruptions.

# About the Project

This is a basic login application developed with React Native CLI. It provides essential components and navigation infrastructure for user authentication.

# Dependencies and Setup

This project uses the following main libraries and packages as specified in package.json:

Redux Toolkit & React Redux: For efficient global state management.

- npm install @reduxjs/toolkit react-redux
  
React Navigation: For handling navigation between screens.
Core navigation and native dependencies:

- npm install @react-navigation/native react-native-screens react-native-safe-area-context

- npm install @react-navigation/native-stack

Firebase & React Native Firebase: For backend services and authentication.

- npm install firebase @react-native-firebase/app @react-native-firebase/auth

AsyncStorage: For persistent local storage in React Native apps.

- npm install @react-native-async-storage/async-storage

Google Sign-In: For Google login

- npm install @react-native-google-signin/google-signin

React Native:

- npm install react react-native

Facebook SDK: For facebook login

- npm install react-native-fbsdk-next

# Important Note: Firebase Setup Required

To use this package properly, you need to provide your own firebaseConfig file and set up Firebase integrations.

The example configuration file is included in the project as a template.

The package itself does not contain any real Firebase configuration or credentials.

Please make sure to create your Firebase project and add your configuration before running the app

# Technologies and Concepts Used

React Navigation: For handling navigation between screens.

Redux: Used for global state management.

Props: For passing data between components.

Services: Dedicated files for API calls and business logic.

Firebase: Backend infrastructure for authentication and data management.

Components: Reusable UI components used throughout the app.

Themes: Definitions of colors and styles for consistent UI design.

Flexbox

# Project Structure

/src

  /components      # Reusable UI components
  
  /navigation      # Screen navigation setup
  
  /redux           # Redux store, reducers, and actions
  
  /services        # API and business logic services
  
  /screens         # Application screens
  
  /themes          # Color and style themes
  
  /utils           # Utility functions

# Example Design

 <img width="1275" height="957" alt="ExmpDesign" src="https://github.com/user-attachments/assets/c733f30d-4395-4f8b-aad7-dfdfc8eeee20" />

  
# Design

<img width="1543" height="865" alt="RealDesign" src="https://github.com/user-attachments/assets/afe8af51-9906-4544-bf95-39c5219fa9e5" />
