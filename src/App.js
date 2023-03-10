import './App.css';
import Navbar from './Components/Navbar';
import Body1 from './Components/Body1';
import Body2 from './Components/Body2';
import { Route, Routes } from 'react-router-dom';
import Context from './Components/Context';
import Use from './Components/use';
import LiftUp from './Components/LiftUp';
import CreateLogin from './Components/CreateLogin';
import FirstComponent from './Components/FirstComponent';
import SecondComponent from './Components/SecondComponent';
import DiaryForm from './Components/DairyForm';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/usecontext' element = {<Context/>}/>
      <Route path='/usestate' element = {<Use/>}/>
      <Route path='/liftstate' element = {<LiftUp/>}/>
      <Route path='/login' element = {<CreateLogin/>}/>
      <Route path='/customhook1' element = {<FirstComponent/>}/>
      <Route path='/customhook2' element = {<SecondComponent/>}/>
      <Route path='/dairy' element={<DiaryForm/>}/>
    </Routes>
    </>
  );
}

export default App;
