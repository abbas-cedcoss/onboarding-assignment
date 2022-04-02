import 'antd/dist/antd.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Onboarding from './Components/Onboarding/Onboarding';

function App() {
  return (
    <Routes>
      <Route path='*' element={<Navigate to={"/registration"} replace />} />
      <Route path='/registration' element={<Onboarding />} />
    </Routes>
  );
}

export default App;
