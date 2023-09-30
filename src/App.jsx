import './App.css';
import EducationExp from './components/educationExp/EducationExp';
import GeneralInfo from './components/generalInfo/GeneralInfo';
import PracticalExp from './components/practicalExp/PracticalExp';
// import Header from './components/Header';

function App() {
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
