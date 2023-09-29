import React, { useState } from 'react';

const EducationExp = () => {
  const [schoolName, setSchoolName] = useState('');
  const [date, setDate] = useState('');
  const [titleStudy, setTitleStudy] = useState('');
  const [submit, setSubmit] = useState(true);

  return (
    <div className="container">
      <div className="info-section">
        {submit ? (
          <>
            <div className="display-main-container">
              <div className="display-div">
                <div>{schoolName}</div>
                <div>{titleStudy}</div>
                <div>{date}</div>
              </div>
              <button className="edit-button" type='submit' onClick={() => { setSubmit(false) } }>Edit</button>
            </div>
          </>
        ) : (
          <>
            <form className="form-container" onSubmit={(e) => {e.preventDefault(), setSubmit(true)}} >
              <div className="input-div">
                <input type="text" value={schoolName} onChange={(e) => setSchoolName(e.target.value)} required />
                <input type="text" value={titleStudy} onChange={(e) => setTitleStudy(e.target.value)}  required />
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
              </div>
              <button className="submit-button" type='submit'>Submit</button>
            </form>
          </>
        )}
      </div>
    </div>
  )
        };

export default EducationExp;
