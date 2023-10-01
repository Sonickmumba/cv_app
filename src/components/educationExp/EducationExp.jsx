import { useEffect, useState } from 'react';
import '../../App.css';

const EducationExp = () => {
  const [submits, setSubmits] = useState(true);

  const [educationExp, setEducationExp] = useState({
    schoolName: 'Mano',
    titleStudy: 'Maths',
    date: '2007-07-20',
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setEducationExp({
      ...educationExp,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEducationInfo = {
      id: new Date().getTime(),
      schoolName: educationExp.schoolName,
      titleStudy: educationExp.titleStudy,
      date: educationExp.date,
    };
    localStorage.setItem('educationInfo', JSON.stringify(newEducationInfo));
    setSubmits(true);
  };
  
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('educationInfo')) || [];
    if (data.length > 0) {
      const latestData = data[data.length - 1];
      setEducationExp(latestData);
    }
  }, [submits]);
  return (
    <div className="container">
      <div className="info-section">
        {submits ? (
          <>
              <div className="display-main-container">
                <p className="title-p">Educational Information</p>
                <div className="display-div" key={educationExp.id}>
                  <div className="info">
                    School: {" "}
                    <span className='span-ta'>{educationExp.schoolName}</span>
                  </div>
                  <div className="info">
                    Programme: {" "}
                    <span className='span-ta'>{educationExp.titleStudy}</span>
                  </div>
                  <div className="info">
                    Date: {" "}
                    <span className="span-ta">{educationExp.date}</span>
                  </div>
                </div>
                <button className="edit-button" type="submit" onClick={() => { setSubmits(false) }}>Edit</button>
              </div>
          </>
        ) : (
          <>
            <p className="title-p">Educational Information</p>
            <form className="form-container" onSubmit={handleSubmit}>
              <div className="input-div">
                <input type="text" name="schoolName" value={educationExp.schoolName} onChange={handleChange} required />
                <input type="text" name="titleStudy" value={educationExp.titleStudy} onChange={handleChange} required />
                <input type="date" name="date" value={educationExp.date} onChange={handleChange} required />
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
