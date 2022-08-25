import { Navigate, Route, Routes } from 'react-router-dom';

import SignInPage from './pages/auth/signin';
import SignUpPage from './pages/auth/signup';
import HomePage from './pages/home';

const AppRouter: React.FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/home" replace />} />
    <Route path="/auth/signup" element={<SignUpPage />} />
    <Route path="/auth/signin" element={<SignInPage />} />
    <Route path="/home" element={<HomePage />} />
  </Routes>
);

export default AppRouter;
