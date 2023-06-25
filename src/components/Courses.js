import axios from 'axios'
import React, { useEffect, useState } from 'react'
import live from './image/live.jpg'
import Heart  from './image/Heart.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



//  http://localhost:3000/courses

const Courses = ({category}) => {
  const[course,setCourse]=useState([])


//   useEffect(()=>{
// axios
// .get( ' http://localhost:3000/courses')
// .then((res)=>{
//   console.log(res.data)
//   setCourse(res.data)
// })
// .catch((error)=>console.log(error))
//   }
//   )
useEffect(() => {
  let apiUrl = ' http://localhost:3000/courses';
  if (category) {
    apiUrl += `?category=${category}`;
  }

  axios
    .get(apiUrl)
    .then((res) => {
      console.log(res.data);
      setCourse(res.data);
    })
    .catch((error) => console.log(error));
}, [category]);



const handleAddLike=()=>{
  toast.success('success !',{position:toast.POSITION.TOP_RIGHT})
}



  return (
    <>
    <div className='container'>
      {course.map((courses)=>(
           <div className='course-card'>
           <div className='course-container1'>
             <div className='title'>
               <img src={live} alt='live'/>
               <div className='Heading'>
               <h5>{courses.title}</h5>
               </div>
               <div className='button'>
               <button>{courses.category}</button>
               </div>
             </div>
             <div className='image'>
               <img src={courses.image} alt='course'/>
             </div>
             <div className='card-icons'>
             <img src={Heart} alt='heart' onClick={handleAddLike}/>
             <ToastContainer />
             </div>
           </div>

           <div  className='course-container2'>
       <h4>{courses.title_repeated}</h4>
       <p>{courses.description}</p>
           </div>
           </div>


      ))}
   
    </div>

    
    </>
  )
}

export default Courses
