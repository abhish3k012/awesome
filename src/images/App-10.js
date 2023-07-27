import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [valid, setvalid] = useState(false);
  const [isError, setError] = useState('');
  function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  function next() {
    if (pass.length > 5 && validateEmail(email)) {
      if (validateEmail(email)) {
        let data = {name: name, email: email, userpass: pass};
        let userData = JSON.parse(localStorage.getItem('userInfo'));
        let list = [];
        if (userData) {
          list = [...userData, data];
        } else {
          list = list.concat(data);
        }
        localStorage.setItem('userInfo', JSON.stringify(list));
        setError('correct');
      } else {
        setError('');
      }
    } else {
      setError('please type valid email');
    }
  }
  return (
    <div className="App">
      <label style={{fontSize: 40, textAlign: 'center'}}>Name</label>
      <input
        style={{
          width: '20%',
          marginTop: 20,
          marginBottom: 15,
          borderRadius: 15,
          height: 20,
          padding: 17,
        }}
        placeholder="Name"
        value={name}
        type="text"
        onChange={e => {
          setName(e.target.value);
        }}
      />
      <br></br>
      <br></br>
      <label style={{fontSize: 40, textAlign: 'center'}}>Email-id</label>
      <input
        style={{
          width: '20%',
          marginTop: 20,
          marginBottom: 15,
          borderRadius: 15,
          height: 20,
          padding: 17,
        }}
        placeholder="email-id"
        value={email}
        type="email"
        onChange={e => {
          setEmail(e.target.value);
        }}
      />
      <br></br>
      <br></br>
      <label style={{fontSize: 40, textAlign: 'center'}}>Password</label>
      <input
        style={{
          width: '20%',
          marginTop: 20,
          marginBottom: 15,
          borderRadius: 15,
          height: 20,
          padding: 17,
        }}
        placeholder="password"
        value={pass}
        type="Password"
        onChange={e => {
          setPass(e.target.value);
        }}
      />
      <br></br>
      {isError}
      <br></br>
      <button
        style={{backgroundColor: 'red', width: 85, height: 50}}
        onClick={() => next()}>
        Next
      </button>
    </div>
  );
}

export default App;
