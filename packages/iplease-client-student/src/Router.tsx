import { Route, Routes } from 'react-router-dom';

import SignInPage from './pages/auth/signin';
import SignUpPage from './pages/auth/signup';

const AppRouter: React.FC = () => (
  <Routes>
    <Route path="/" element={<SignUpPage />} />
    <Route path="/auth/signin" element={<SignInPage />} />
  </Routes>
);

export default AppRouter;
