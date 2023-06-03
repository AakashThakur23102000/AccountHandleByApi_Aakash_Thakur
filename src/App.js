import './App.css';
import Form from './components/Form';
import DataTable from "./components/DataTable"
import { useState } from 'react';

function App() {
  //state for refreshing table
  var [newUser,setNewUser] = useState(false);
  //function for refreshing table
  function newUserSubmitButtonPressed(){
    setNewUser(true);
  }
  function changingBacktoFalse(){
    setNewUser(false);
  }
  
  return (
    <div className="App">
      <marquee>This webpage is made by Aakash Thakur for more details contact aakashthakur20001972@gmail.com</marquee>
      <Form usr={newUserSubmitButtonPressed}/>
      <DataTable usrStateValue={newUser} returningChangeinState={changingBacktoFalse}/>
    </div>
  );
}

export default App;
