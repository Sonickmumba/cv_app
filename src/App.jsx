import { useState } from 'react';
import './App.css';
import EducationExp from './components/educationExp/EducationExp';
import GeneralInfo from './components/generalInfo/GeneralInfo';
// import PracticalExp from './components/PracticalExp';
// import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        {/* <Header /> */}
        <EducationExp />
        <GeneralInfo />
        {/* <PracticalExp /> */}
      </div>
    </>
  );
}

export default App;
