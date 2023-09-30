import { useState } from 'react';
import '../../App.css';

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
            {!schoolName && !date && !titleStudy ? (
              <>
                <p>No Entries yet!!</p>
                <button className="edit-button" type="submit" onClick={() => { setSubmit(false); }}>Edit</button>
              </>
            ) : (
              <div className="display-main-container">
                <p className="title-p">Educational Information</p>
                <div className="display-div">
                  <div id="info">
                    School:
                    {schoolName}
                  </div>
                  <div className="info">
                    Programme:
                    {titleStudy}
                  </div>
                  <div className="info">
                    Date:
                    {date}
                  </div>
                </div>
                <button className="edit-button" type="submit" onClick={() => { setSubmit(false); }}>Edit</button>
              </div>
            )}
          </>
        ) : (
          <>
            <form className="form-container" onSubmit={() => { setSubmit(true); }}>
              <div className="input-div">
                <input type="text" value={schoolName} onChange={(e) => setSchoolName(e.target.value)} placeholder="School Name" required />
                <input type="text" value={titleStudy} onChange={(e) => setTitleStudy(e.target.value)} placeholder="Study Title" required />
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="Date" required />
              </div>
              <button className="submit-button" type="submit">Submit</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default EducationExp;
