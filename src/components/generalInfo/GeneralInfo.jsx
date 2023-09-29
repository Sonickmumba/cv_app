import React, { useState } from 'react';
import './generalInfo.css'

const GeneralInfo = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [submit, setSubmit] = useState(true);

  return (
    <div className="container">
      <div className="info-section">
        {submit ? (
          <><>
            <div>{name}</div>
            <div>{email}</div>
            <div>{phoneNumber}</div>
          </><button className="edit-button" type='submit' onClick={() => { setSubmit(false) } }>Edit</button></>
        ) : (
          <>
            <form onSubmit={(e) => {e.preventDefault(), setSubmit(true)}} >
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
      <p>sonick</p>
    </div>
  );
};

export default GeneralInfo;
