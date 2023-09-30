import React, { useState } from 'react';
// import styles from "./generalInfo.css?inline";
import '../../App.css'

const GeneralInfo = () => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [date, setDate] = useState('');
  const [submit, setSubmit] = useState(true);

  return (
    <div className="container">
      <div className="info-section">
        {submit ? (
          <>
            <div className="display-main-container">
              <div className="display-div">
                <div id="info">Name: {name}</div>
                <div className="info">Position: {position}</div>
                <div className="info">Date: {date}</div>
              </div>
              <button className="edit-button" type='submit' onClick={() => { setSubmit(false) } }>Edit</button>
            </div>
          </>
        ) : (
          <>
            <form className="form-container" onSubmit={(e) => {e.preventDefault(), setSubmit(true)}} >
              <div className="input-div">
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="text" value={position} onChange={(e) => setPosition(e.target.value)}  required />
                <input type="number" value={date} onChange={(e) => setDate(e.target.value)} required />
              </div>
              <button className="submit-button" type='submit'>Submit</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default GeneralInfo;

