import { useState } from 'react'
import './App.css'
import RegistrationForm from './components/RegistrationForm'
import SuccessMessage from './components/SuccessMessage'

function App() {
  const [validated, setValidated] = useState(false)
  const [email, setEmail] = useState('')


  return (
    <>
    
      {validated  ? 
        <div className='content-container-success'>
          <SuccessMessage email={email} />
        </div>
        : 
        <div className='content-container-registration'>
          <RegistrationForm setValidated={setValidated} email={email} setEmail={setEmail}/>
        </div>}
    <div className="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="#">Mona Granerud</a>.
    </div>
  </>
  )
}

export default App
