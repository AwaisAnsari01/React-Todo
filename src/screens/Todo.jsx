import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../config/firebase/FirebaseConfig";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TodoApp from "../components/TodoApp";



function Todo() {

  const [NotLogin,setNotLogin] = useState(null)
  const [UserUid, setUserUid] = useState('')
  const navigate = useNavigate()


  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(user)=>{
      if(user){
        setNotLogin(true)
        setUserUid(user.uid)
        console.log('User UID:', user.uid);
      }else{
        setNotLogin(false)
        navigate('/Login')
        alert('user not login');
      }
    });

      
    // Cleanup subscription on unmount
    return ()=> unsubscribe();

  },[navigate])

  if(NotLogin === null){
    return <div>Loading...</div>; 
  }

  if (!NotLogin) {
    return <div>First You Register..</div>; 
  }


const Logout = async ()=>{
  try {
    await signOut(auth);
    console.log("User signed out!");
    navigate('/Login');
  } catch (error) {
    console.error("Error signing out: ", error);
  }
}


  return (
    <>
   <div style={{
    display: 'flex',
    justifyContent: 'center',
    flexDirection : 'column',
    alignItems: 'center',
    textAlign: 'center',
    margin : '0 auto',
    borderRadius: '10px',
    marginTop : '20px'
   }}>
   <p style={{
    fontWeight: 'bold',
   }}>Your Uid : {UserUid}</p>

   <button style={{
            padding: '10px 20px',
            borderRadius: '5px',
            backgroundColor: '#000000',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold'
          }} onClick={Logout}>Logout</button>
   
   </div>
    <TodoApp/>

    </>
  )
}



export default Todo