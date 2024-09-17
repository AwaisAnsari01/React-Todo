import { createUserWithEmailAndPassword } from "firebase/auth"
import { useRef } from "react"
import { auth } from "../config/firebase/FirebaseConfig"
import { useNavigate } from "react-router-dom"


function Register() {

  const navigate = useNavigate()

  const name = useRef()
  const email = useRef()
  const password = useRef()


  const FormValue = (e)=>{
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    navigate('/Login')
    
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
  });


  name.current.value = ''
  email.current.value = ''
  password.current.value = ''


  }

  return (
    <>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      margin : '0 auto',
      borderRadius: '10px',
      padding: '20px',
      flexDirection : 'column',
      height : 'auto',
      marginTop : '60px',
    }}>
      <h4>Register</h4>
    <form onSubmit={FormValue}>
        <input style={{
          width: '100%',
          padding: '10px 60px',
          margin: '5px 0',
          borderRadius: '5px',
          border: '1px solid #ccc',
          outline: 'none',
          fontSize: '16px',
          color: '#333',
          backgroundColor: '#f1f1f1'
        }} type="text" placeholder="Enter Your Name" ref={name} />
        <br />
        <input style={{
          width: '100%',
          padding: '10px 60px',
          margin: '5px 0',
          borderRadius: '5px',
          border: '1px solid #ccc',
          outline: 'none',
          fontSize: '16px',
          color: '#333',
          backgroundColor: '#f1f1f1'
        }} type="email" placeholder="Enter Your Email"  ref={email} />
        <br />
        <input style={{
          width: '100%',
          padding: '10px 60px',
          margin: '5px 0',
          borderRadius: '5px',
          border: '1px solid #ccc',
          outline: 'none',
          fontSize: '16px',
          color: '#333',
          backgroundColor: '#f1f1f1'
        }} type="password" placeholder="Enter Your Password" ref={password} />
        <br />
        <button style= {{
          width: '100%',
          padding: '10px 20px',
          borderRadius: '5px',
          backgroundColor: '#000000',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          fontSize: '16px',
          fontWeight: 'bold'
        }}>
          Register
        </button>
    </form>
    </div>
    </>
  )
}

export default Register