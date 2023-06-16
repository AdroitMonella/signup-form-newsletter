import mobileImage from '../assets/images/illustration-sign-up-mobile.svg';
import computerImage from '../assets/images/illustration-sign-up-desktop.svg';
import './RegistrationForm.css';
import { useState } from 'react';

const RegistrationForm = ({setValidated, email, setEmail}) => {
    const isMobile = window.innerWidth < 1440;
    const imageUrl = isMobile ? mobileImage : computerImage;

    const [emailError, setEmailError] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();

        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!emailRegex.test(email)) {
            setEmailError('Valid Email required');
        }
        else{
            setValidated(true);
        }
    };


    return(
        <div className='registration-form-container'>
            <img className="illustration-sign-up" src={imageUrl}/>
            <div className='form-text-container'>
                <div className='registration-text-container'>
                    <h1>Stay updated!</h1>

                    <p>Join 60,000+ product managers receiving monthly updates on:</p>
                    <ul>
                        <li>Product discovery and building what matters</li>
                        <li>Measuring to ensure updates are a success</li>
                        <li>And much more!</li>
                    </ul>
                </div>          
                <form onSubmit={handleSubmit}>
                    <div className='input-container'>
                        <div className='label-container'>
                            <label htmlFor="email"><strong>Email address</strong></label>
                            <span className='email-error'>{emailError}</span>
                        </div>
                        <input 
                                id="email" 
                                placeholder="email@company.com" 
                                autoComplete='email'
                                className={emailError === '' ? 'input-field' : 'input-field error'}
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                />
                    </div>
                    <button className='submit-button'>Subscribe to monthly newsletter</button>
                </form>  
            </div>
        </div>
    );
};

export default RegistrationForm;