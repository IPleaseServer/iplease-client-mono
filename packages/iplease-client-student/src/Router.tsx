import { Route, Routes } from 'react-router-dom';

import ResetPasswordPage from './pages/auth/reset-password';
import SignInPage from './pages/auth/signin';
import SignUpPage from './pages/auth/signup';
import HomePage from './pages/home';

const AppRouter: React.FC = () => (
  <Routes>
    <Route path="/" element={<SignInPage />} />
    <Route path="/auth/signup" element={<SignUpPage />} />
    <Route path="/auth/signin" element={<SignInPage />} />
    <Route path="/auth/reset-password" element={<ResetPasswordPage />} />
    <Route path="/home" element={<HomePage />} />
  </Routes>
);

export default AppRouter;
