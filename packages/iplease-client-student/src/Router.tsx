import { Link, Route, Routes } from 'react-router-dom';

import SignInPage from './pages/auth/signin';

const AppRouter: React.FC = () => (
  <Routes>
    <Route path="/" element={<Link to="/auth/signin">로그인 페이지</Link>} />
    <Route path="/auth/signin" element={<SignInPage />} />
  </Routes>
);

export default AppRouter;
