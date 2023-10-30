import { useState } from 'react'
import './App.css'

export const PersonalInfo = (props) => {
  const [username, setUsername] = useState('');
  const [emailAddress, setEmailAdress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showError, setShowError] = useState(false)

  const errorHandler = () => {
    if (username === "" || emailAddress === "" || phoneNumber === "") {
      setShowError(true)
    }else {
      console.log(errorHandler)
    }
  }

  return (
    <>
    <h1 className={classes['title']}>Personal info</h1>
      <h3 className={classes['under-title']}>Please provide username, email ad</h3>
        <input className={classes['username-input']}
        placeholder="Username"
        type="text"
        />
        <input className={classes['emailaddress-input']}
        placeholder="Email"
        type="text"
        />
        <input className={classes['phonenumber-input']}
        placeholder="phone-number"
        type="text"
        />
        {showError && (
          <div className={classes['error']}>
            <span className={classes['error-message']}>
              Username, email or phone number is empty
            </span>
          </div>
        )}
        <button onClick={errorHandler} className={classes['next-step-btn']}>Next Step</button>

        
    </>
  );
};


