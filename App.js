import React from 'react'
import RootNavigation from "./src/navigation/RootNavigation"
import store from './src/redux/store'
import { Provider } from 'react-redux'
//import app  from "./firebaseConfig" ---you need to import firebaseConfig.js if you want to use Firebase features
const App = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
};
export default App

