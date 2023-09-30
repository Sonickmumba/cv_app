import { useEffect, useState } from 'react';
import '../../App.css';

const GeneralInfo = () => {
  const [submit, setSubmit] = useState(true);

  const [generalInfo, setGeneralInfo] = useState({
    name: 'Sonick',
    email: 'ke@gmail.com',
    phoneNumber: '00000000',
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setGeneralInfo({
      ...generalInfo,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGeneralInfo = {
      id: new Date().getTime(),
      name: generalInfo.name,
      email: generalInfo.email,
      phoneNumber: generalInfo.phoneNumber,
    };
    localStorage.setItem('generalinform', JSON.stringify(newGeneralInfo));
    setSubmit(true);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('generalinform')) || [];
    if (data.length > 0) {
      const latestData = data[data.length - 1];
      setGeneralInfo(latestData);
    }
  }, [submit]);
  console.log(generalInfo);
  return (
    <div className="container">
      <div className="info-section">
        {submit ? (
          <>
            <div className="display-main-container">
              <p className="title-p">General Information</p>

              <div className="display-div" key={generalInfo.id}>
                <div id="info">
                  Name:
                  {generalInfo.name}
                </div>
                <div className="info">
                  Email:
                  {generalInfo.email}
                </div>
                <div className="info">
                  Phone:
                  {generalInfo.phoneNumber}
                </div>
              </div>

              <button className="edit-button" type="submit" onClick={() => { setSubmit(false); }}>Edit</button>
            </div>
          </>
        ) : (
          <>
            <form className="form-container" onSubmit={handleSubmit}>
              <div className="input-div">
                <input type="text" name="name" value={generalInfo.name} onChange={handleChange} required />
                <input type="text" name="email" value={generalInfo.email} onChange={handleChange} required />
                <input type="number" name="phoneNumber" value={generalInfo.phoneNumber} onChange={handleChange} required />
              </div>
              <button className="submit-button" type="submit" onClick={() => { setSubmit(false); }}>Submit</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default GeneralInfo;
