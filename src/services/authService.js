
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  FacebookAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';


export const loginService = async (email, password) => {
  const auth = getAuth();
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;
  const token = user.stsTokenManager.accessToken;
  await AsyncStorage.setItem("userToken", token);
  return { user, token };
};

export const registerService = async (email, password) => {
  const auth = getAuth();
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;
  const token = user.stsTokenManager.accessToken;
  await AsyncStorage.setItem("userToken", token);
  return { user, token };
};

export const logoutService = async () => {
  const auth = getAuth();
  await signOut(auth);
  await AsyncStorage.removeItem("userToken");
  return true;
};

export const autoLoginService = async () => {
  const token = await AsyncStorage.getItem("userToken");
  if (!token) throw new Error("No token found");
  return token;
};

export const resetPasswordService = async (email) => {
  const auth = getAuth();
  await sendPasswordResetEmail(auth, email);
  return "Password reset email sent";
};

 export const googleSignInService = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const response = await GoogleSignin.signIn();
    if (isSuccessResponse(response)) {
      setState({ userInfo: response.data });
    } else {
    }
  } catch (error) {
    if (isErrorWithCode(error)) {
      switch (error.code) {
        case statusCodes.IN_PROGRESS:
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          break;
        default:
      }
    } else {
    }
  }
};

export const facebookSignInService = async () => {


  const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

  if (result.isCancelled) {
    throw 'User cancelled the login process';
  }

  const data = await AccessToken.getCurrentAccessToken();

  if (!data) {
    throw 'Something went wrong obtaining access token';
  }

  const facebookCredential = FacebookAuthProvider.credential(data.accessToken);

  return signInWithCredential(getAuth(), facebookCredential);

}

