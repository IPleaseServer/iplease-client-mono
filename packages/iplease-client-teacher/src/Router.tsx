import { Route, Routes } from 'react-router-dom';

import URL from 'src/config/url';

import ChangePassword from './pages/changePassword';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';

const AppRouter: React.FC = () => (
  <Routes>
    <Route path={URL.signUp} element={<SignUp />} />
    <Route path={URL.signIn} element={<SignIn />} />
    <Route path={URL.changePassword} element={<ChangePassword />} />
  </Routes>
);

export default AppRouter;
