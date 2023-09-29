import { useState } from 'react';
import './App.css';
import EducationExp from './components/EducationExp';
import GeneralInfo from './components/GeneralInfo';
import PracticalExp from './components/PracticalExp';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is
          {' '}
          {count}
        </button>
      </div>
      <Heade />
      <EducationExp />
      <GeneralInfo />
      <PracticalExp />
    </>
  );
}

export default App;
