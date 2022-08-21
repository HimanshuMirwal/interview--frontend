import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import DashBoard from './components/Dashboard/DashBoard';
import VideoDashboard from './components/Dashboard/VideoDashboard/VideoDashboard';
import "./components/Css/globalCss.css";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  
  return (
    <div className="App">
                <Router>
                        <Routes>
                        <Route path="/" exact element={<ProtectedRoutes><DashBoard/></ProtectedRoutes>}/>
                        <Route path="/lecture/:id/:title/:subtitle/:videoData" element={<ProtectedRoutes><VideoDashboard/></ProtectedRoutes>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/signup" element={<Signup/>}/>
                        </Routes>
                </Router>
                
            </div>
  );
}
const ProtectedRoutes = ({children})=>{
  if((localStorage.getItem("CURRENT_USER"))){
    return children
  }else{
    return <Login />
  }
}
export default App;
