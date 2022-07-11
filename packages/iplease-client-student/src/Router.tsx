import { BrowserRouter, Route, Routes } from 'react-router-dom';

const AppRouter: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<div>router test</div>} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
