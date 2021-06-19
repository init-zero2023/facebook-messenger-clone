import './App.css';
import React, {useState, useEffect}  from 'react';
import {Button, FormControl, Input, InputLabel} from "@material-ui/core";
import Message from './components/Message';

function App() {

  const [input, setInput] = useState(" ");    
  const [messages, setMessages] = useState([{username:"Sonny", text: "Hey Guys!!"}, {username:"Qazi", text:"What's up?"}]);
  const [username, setUsername] = useState('');

  // useState =  variable i REACT
  // useEffect =  run code on a condition in REACT

  useEffect(()=>{
    // run code here
    // If its blank inside [], this code runs ONCE when the app component loads
    var user = prompt("Please Enter Your Name")
    if(user!=="" && user!==" ")
      setUsername();
  },[]) // condition

  // everytime condition changes the code runs inside the useEffect



  const sendMessage = (event)=>{
    event.preventDefault();
    if(input!==""){
      setMessages([{username:username, text:input}, ...messages]);
      setInput(""); 
    }
  }


  return (
    <div className="App">
      <h1>Hello Programmers</h1>
      <h2>Welcome {username} </h2>

      {/* Input for message */}
      <form>
        <FormControl>
          <InputLabel >Enter message </InputLabel>
          <Input value={input} onChange={event=>setInput(event.target.value)} />
          <Button variant="contained" color="primary" onClick={sendMessage}>Send message</Button>
        </FormControl>
      </form>

      {/* messages themselves */}
      {
        messages.map(message =>(
          <Message username={username} message={message}/>
        ))
      }
      
    </div>
  );
}

export default App;
