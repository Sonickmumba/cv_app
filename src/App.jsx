import { useState } from 'react';
import './App.css';
import EducationExp from './components/educationExp/EducationExp';
import GeneralInfo from './components/generalInfo/GeneralInfo';
import PracticalExp from './components/practicalExp/PracticalExp';
// import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        {/* <Header /> */}
        <GeneralInfo />
        <EducationExp />
        <PracticalExp />
      </div>
    </>
  );
}

export default App;
