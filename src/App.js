import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Courses from './components/Courses';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Courses category=''/>} />
      <Route path="/courses" element={<Courses category=''/>} />
      {/* <Route  path='/courses' element={ <Courses category=''/>}/> */}
      <Route path='/courses/development' element={<Courses category='Development'/>}/>
      <Route path='/courses/design' element={<Courses category='Design'/>}/>
       <Route path='/courses/business' element={<Courses category='Business'/>}/>   
      
       <Route path='/courses/lifestyle' element={<Courses category='Lifestyle'/>}/>
      </Routes>
    
      </BrowserRouter>
      

    </div>
  );
}

export default App;
