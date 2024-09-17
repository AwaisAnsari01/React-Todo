import { signInWithEmailAndPassword } from "firebase/auth"
import { useRef } from "react"
import { auth } from "../config/firebase/FirebaseConfig"
import { useNavigate } from "react-router-dom"



function Login() {

  const email = useRef()
  const password = useRef()
  const navigate = useNavigate()

  const FormValue = (e)=>{
    e.preventDefault()

    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    navigate('/todo')
    
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
    
  });
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
       <h4>Login</h4>
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
        }} type="email" placeholder="Enter Your Email" ref={email} />
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
          Login
        </button>
    </form>
    </div>
    </>
  )
}

export default Login