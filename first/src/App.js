import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
  // var a = localStorage.getItem('token')
  // console.log("aaaa",localStorage.getItem("Token"));
  return (
    <Provider store={store}>
    <>
      <Router>
        <Routes>
        <Route exact path="/" element={<Login/>}/>
          <Route exact path="/home" element={<Home />}/> 
          <Route exact path="/home/userdetails" element={<Userdetails />}/>
          <Route exact path="/home/information" element={<Information/>}/>
          <Route exact path="/home/status" element={<Status/>}/>
          <Route exact path="/signup" element={<Signup/>}/>


          {/* <Route exact path="/" element={<Login/>}/>
          <Route exact path="/home" element={
            localStorage.getItem("token") === "ticket" ? (<Home />) :  (<Navigate replace to={"/"} />)
            }/> 
          <Route exact path="/home/userdetails" element={
            localStorage.getItem("token") === "ticket" ? (<Userdetails />) :  (<Navigate replace to={"/"} />)
            }/>
          <Route exact path="/home/information" element={
            localStorage.getItem("token") === "ticket" ? (<Information/>) :  (<Navigate replace to={"/"} />)
            }/>
          <Route exact path="/home/status" element={
            localStorage.getItem("token") === "ticket" ? (<Status/>) :  (<Navigate replace to={"/"} />)
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
