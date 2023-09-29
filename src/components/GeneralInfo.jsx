import React, { useState } from 'react';

const GeneralInfo = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [submit, setSubmit] = useState(true);

  return (
    <div>
      <div>
        {submit ? (
          <><>
            <div>{name}</div>
            <div>{email}</div>
            <div>{phoneNumber}</div>
          </><button type='submit' onClick={() => { setSubmit(false); } }>Edit</button></>
        ) : (
          <>
            <form onSubmit={(e) => {e.preventDefault(), setSubmit(true)}} >
              <div>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
              </div>
              <button type='submit'>Submit</button>
            </form>
          </>
        )}
      </div>
      <p>sonick</p>
    </div>
  );
};

export default GeneralInfo;
