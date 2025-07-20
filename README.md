# LoginProject

Warning:

### ⚠️ Folder Name Notice

If you downloaded this project as a `.zip` file from GitHub, the extracted folder may be named something like:
LoginProject-master

To avoid any issues while working with the project, please rename the folder to:
LoginProject

# About the Project

This is a basic login application developed with React Native and Expo. It provides essential components and navigation infrastructure for user authentication.

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

Expo Build:

- npm install expo

Expo packages:

Included with Expo SDK:

expo

expo-status-bar

expo-web-browser

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



This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
