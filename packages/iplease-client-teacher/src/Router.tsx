import { Route, Routes } from 'react-router-dom';

import URL from 'src/config/url';
import * as P from 'src/pages';

const AppRouter: React.FC = () => (
  <Routes>
    <Route path={URL.signUp} element={<P.SignUp />} />
    <Route path={URL.signIn} element={<P.SignIn />} />
    <Route path={URL.changePassword} element={<P.ChangePassword />} />
    <Route path={URL.manageIpAssignments} element={<P.ManageIpAssignments />} />
  </Routes>
);

export default AppRouter;
