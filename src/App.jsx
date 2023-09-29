import { useState } from 'react';
import './App.css';
import EducationExp from './components/EducationExp';
import GeneralInfo from './components/GeneralInfo';
import PracticalExp from './components/PracticalExp';
import Header from './components/Header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is
          {' '}
          {count}
        </button>
        <Header />
        <EducationExp />
        <GeneralInfo />
        <PracticalExp />
      </div>
    </>
  );
}

export default App;
