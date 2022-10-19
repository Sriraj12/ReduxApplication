import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useState } from 'react';
import Home from "./component/Home";
import Login from "./component/Login";
import Userdetails, { Information, Status } from "./component/Userdetails";
import Signup from './component/Signup';
import {Provider} from 'react-redux';
import store from './service/store';


function App() {
  // const[token,setToken] = useState();
  // if(!token){
  //   return<Login setToken={setToken}/>
  // }
  return (
    <Provider store={store}>
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/home/userdetails" element={<Userdetails />}/>
          <Route path="/home/information" element={<Information/>}/>
          <Route path="/home/status" element={<Status/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </Router>  
    </>
    </Provider>
  );
}

export default App;
