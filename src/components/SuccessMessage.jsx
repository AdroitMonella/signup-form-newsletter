import React from 'react'
import './SuccessMessage.css'
import succesIcon from '../assets/images/icon-success.svg';


const SuccessMessage = ({email}) => {
  return (
    <div className='success-message-container'>
      <img className="illustration-success" src={succesIcon}/>
      <div className='text-container'>
          <h1>Thanks for subscribing!</h1>
          <p className='success-message'>
              A confirmation email has been sent to <span className='bold'>{email}</span>. 
              Please open it and click the button inside 
              to confirm your subscription.
          </p>
      </div>          

    <button className='dismiss-button'>Dismiss message</button>

    </div>


  )
}

export default SuccessMessage
