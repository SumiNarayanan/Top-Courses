import axios from 'axios'
import React, { useEffect, useState } from 'react'
import live from './image/live.jpg'
import Heart  from './image/Heart.jpg'


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
  let apiUrl = 'http://localhost:3000/courses';
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

useEffect(()=>{
  let apiUrl= 'http://localhost:3000/courses';
  if(category){
    apiUrl+=`?category=${category}`
  }
})




  return (
    <>
    <div className='container'>
      {course.map((courses)=>(
           <div className='course-card'>
           <div className='course-container1'>
             <div className='title'>
               <img src={live}/>
               <div className='Heading'>
               <h5>{courses.title}</h5>
               </div>
               <div className='button'>
               <button>{courses.category}</button>
               </div>
             </div>
             <div className='image'>
               <img src={courses.image} alt='photo'/>
             </div>
             <div className='card-icons'>
             <img src={Heart} alt='heart'/>
             </div>
           </div>

           <div  className='course-container2'>
       <h4></h4>{courses.title_repeated}
       <p>{courses.description}</p>
           </div>
           </div>

      ))}
   
    </div>
    
    </>
  )
}

export default Courses
