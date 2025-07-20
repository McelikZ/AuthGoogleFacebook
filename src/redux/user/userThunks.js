import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginService,registerService,logoutService,autoLoginService,resetPasswordService,googleSignInService,facebookSignInService} from "../../services/authService"

export const login=createAsyncThunk('user/login',async({email,password})=>{
    try {
      return await loginService(email,password); 
    } catch (error) {
        throw error
    }
});
export const register = createAsyncThunk('user/register', async ({ email, password }) => {
    try {
        return await registerService(email, password);
    } catch (error) {
        throw error;
    }
});
export const logout=createAsyncThunk('user/logout',async()=>{
    try {
        return await logoutService();
    } catch (error) {
        throw error
    }
});
export const autoLogin=createAsyncThunk('user/autoLogin',async()=>{
    try {
        return await autoLoginService();      
    } catch (error) {    
        throw error
    }
});
export const resetPassword = createAsyncThunk('user/resetPassword',async (email) => {
    try {
      return await resetPasswordService(email); 
    } catch (error) {
        throw error
    }
  }
);
export const googleSignIn = createAsyncThunk('user/googleSignIn', async () => {
    try {
        return await googleSignInService();
    } catch (error) {
        throw error;
    }
});
export const facebookSignIn = createAsyncThunk('user/facebookSignIn', async () => {
    try {
        return await facebookSignInService();
    } catch (error) {
        throw error;
    }
});
