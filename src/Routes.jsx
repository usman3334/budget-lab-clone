import React from 'react';
import { Routes as AppRoutes, Route } from 'react-router-dom';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import UserSetting from './pages/user/GeneralSettings';
import ResetPassword from './pages/auth/ResetPassword';


const Routes = () => {
  return (
    <AppRoutes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/user/Setting" element={<UserSetting />} />
      <Route path="/reset-password" element={<ResetPassword />} /> 
    </AppRoutes>
  );
};

export default Routes;
