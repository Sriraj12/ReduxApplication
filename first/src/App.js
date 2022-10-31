import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/Login";
import Userdetails, { Information, Status } from "./component/Userdetails";
import Signup from './component/Signup';
import {Provider} from 'react-redux';
import store from './service/store';


function App() {
  // const decode = localStorage.getItem("token");

  return (
    <Provider store={store}>
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={(<Login/>)}/>
          <Route exact path="/home" element={(<Home />)}/> 
          <Route exact path="/home/userdetails" element={(<Userdetails />)}/>
          <Route exact path="/home/information" element={<Information/>}/>
          <Route exact path="/home/status" element={<Status/>}/>
          <Route exact path="/signup" element={<Signup/>}/>


          {/* <Route exact path="/" element={<Login/>}/>
          <Route exact path="/home" element={
            localStorage.getItem("token") ? (<Home />) :  (<Navigate replace to={"/"} />)
            }/> 
          <Route exact path="/home/userdetails" element={
            localStorage.getItem("token") ? (<Userdetails />) :  (<Navigate replace to={"/"} />)
            }/>
          <Route exact path="/home/information" element={
            localStorage.getItem("token") ? (<Information/>) :  (<Navigate replace to={"/"} />)
            }/>
          <Route exact path="/home/status" element={
            localStorage.getItem("token") ? (<Status/>) :  (<Navigate replace to={"/"} />)
            }/>
          <Route exact path="/signup" element={<Signup/>}/> */}
        </Routes>
      </Router>  
    </>
    </Provider>
  );
}

export default App;


//  <Route exact path="/home" element={() =>{
//   var a = localStorage.getItem('token')
//   return(
//     (a === 'user' ? <Home /> :  <Navigate replace to={"/"} />)
//   )
// }
// } />  
