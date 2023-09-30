import { useEffect, useState } from 'react';
import '../../App.css';

const EducationExp = () => {
  const [submits, setSubmits] = useState(true);

  const [practicalExp, setPracticalExp] = useState({
    name: 'ABC BANK',
    position: 'Teller',
    date: '2009-07-20',
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setPracticalExp({
      ...practicalExp,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPracticalInfo = {
      id: new Date().getTime(),
      schoolName: practicalExp.schoolName,
      titleStudy: practicalExp.titleStudy,
      date: practicalExp.date,
    };
    localStorage.setItem('educationInfo', JSON.stringify(newPracticalInfo));
    setSubmits(true);
  };
  
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('educationInfo')) || [];
    if (data.length > 0) {
      const latestData = data[data.length - 1];
      setPracticalExp(latestData);
    }
  }, [submits]);

  return (
    <div className="container">
      <div className="info-section">
        {submits ? (
          <>
            <div className="display-main-container">
              <p className="title-p">Practical Information</p>
              <div className="display-div" key={practicalExp.id}>
                <div id="info">
                  Name:
                  {practicalExp.name}
                </div>
                <div className="info">
                  Position:
                  {practicalExp.position}
                </div>
                <div className="info">
                  Date:
                  {practicalExp.date}
                </div>
              </div>
              <button className="edit-button" type="submit" onClick={() => { setSubmits(false) }}>Edit</button>
            </div>
          </>
        ) : (
          <>
            <form className="form-container" onSubmit={handleSubmit}>
              <div className="input-div">
                <input type="text" name="name" value={practicalExp.name} onChange={handleChange} required />
                <input type="text" name="position" value={practicalExp.position} onChange={handleChange} required />
                <input type="date" name="date" value={practicalExp.date} onChange={handleChange} required />
              </div>
              <button className="submit-button" type="submit" onClick={() => { setSubmits(false) }}>Submit</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default EducationExp;
