import 'antd/dist/antd.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Onboarding from './Components/Onboarding/Onboarding';
import Signup from './Components/Signup/Signup';

function App() {
  return (
    <Routes>
      <Route path='*' element={<Navigate to={"/registration"} replace />} />
      <Route path='/registration' element={<Onboarding />} />
    </Routes>
  );
}

export default App;
