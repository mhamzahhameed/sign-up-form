import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState } from "react";
import "./App.css";
import app from "./Firebase";

function App() {
  const auth = getAuth(app);

  const [email, setEmail] = useState();

  const [password, setPassword] = useState();

  const signUp = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("Successfully Created An Account");
        // ...
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode);
        // ..
      });
  };
  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("This User Has Successfully Signed In");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
      });
  };

  return (
    <div className='main'>
      <div className='App'>
        <input
          className='input'
          type='email'
          placeholder='please add valid email'
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className='input'
          type='password'
          placeholder='please enter password'
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className='btn' onClick={signUp}>
          Create Account
        </button>
        <button className='btn' onClick={signIn}>
          {" "}
          Sign in
        </button>
      </div>
    </div>
  );
}

export default App;
