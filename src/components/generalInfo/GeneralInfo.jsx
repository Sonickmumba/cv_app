import React, { useState } from 'react';
// import styles from "./generalInfo.css?inline";
import '../../App.css'

const GeneralInfo = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [submit, setSubmit] = useState(true);

  return (
    <div className="container">
      <div className="info-section">
        {submit ? (
          <>
            <div className="display-main-container">
              <div className="display-div">
                <div id="info">{name}</div>
                <div className="info">{email}</div>
                <div className="info">{phoneNumber}</div>
              </div>
              <button className="edit-button" type='submit' onClick={() => { setSubmit(false) } }>Edit</button>
            </div>
          </>
        ) : (
          <>
            <form className="form-container" onSubmit={(e) => {e.preventDefault(), setSubmit(true)}} >
              <div className="input-div">
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}  required />
                <input type="number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
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
