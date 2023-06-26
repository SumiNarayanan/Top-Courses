import axios from 'axios';
import React, { useEffect, useState } from 'react';
import live from './image/live.jpg';
import Heart from './image/Heart.jpg';
import HeartFilled from './image/HeartFilled.jpg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Courses = ({ category }) => {
  const [course, setCourse] = useState([]);
  const [like, setLike] = useState([]);

  const getRandomColor = () => {
    const colors = ['yellow', 'black'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

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
        setLike(new Array(res.data.length).fill(false));
      })
      .catch((error) => console.log(error));
  }, [category]);



    const handleClick = (index) => {
      const newLike = [...like];
      newLike[index] = !newLike[index];
      setLike(newLike);


    if (!newLike[index]) {
      toast.success('Liked Successfully');
    } else {
      toast.warning('Like Removed');
    }
    
  };

  return (
    <>
      <div className='container'>
        {course.map((courses,index) => {
          const container1Background = getRandomColor();

          return (
            <div className='course-card' key={index}>
              <div
                className='course-container1'
                style={{
                  backgroundColor: container1Background,
                  color: container1Background === 'black' ? 'white' : 'black',
                }}
              >
                <div className='title'>
                  <img src={live} alt='live' />
                  <div className='Heading'>
                    <h5>{courses.title}</h5>
                  </div>
                  <div className='button'>
                    <button
                      style={{
                        backgroundColor:
                          container1Background === 'black' ? 'yellow' : 'blue',
                        color:
                          container1Background === 'black' ? 'black' : 'white',
                      }}
                    >
                      {courses.category}
                    </button>
                  </div>
                </div>
                <div className='image'>
                  <img src={courses.image} alt='course' />
                </div>
                <div className='card-icons'>
                  <img
                    src={like[index] ? HeartFilled : Heart}
                    alt='heart'
                    onClick={()=>handleClick(index)}
                  />
                  <ToastContainer />
                </div>
              </div>

              <div className='course-container2'>
                <h4>{courses.title_repeated}</h4>
                <p>{courses.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Courses;
