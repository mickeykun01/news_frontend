// import {data} from '../TopPost APIDATA/FitnessTopApi'
// import {data} from '../APIDATA/Fitnessapi'
import { useNavigate } from 'react-router-dom'
import '../Pages/Bollywood/bollywood.css'
import { useState , useEffect } from 'react'
import axios from 'axios'

const FitnessTop=() =>{
    const navigate = useNavigate();
 
     const handleOnNavigate=(item , id)=>{
         navigate(`fitness/${id}` , {state : {item}})
     }

     const [data, setdata] = useState([])
     
     useEffect(()=>{
        axios
            .get("https://authorization-27k4.onrender.com")
            .then(res=>{
                setdata(res.data);
                console.log(res.data);
            })
    }, [])
     return(
         <div id='rightSideContent'>
             <div id="title">Top Post</div>
             <div className='right-post-gap'>
                 <div>
                     <div id='topStartpost'>
                         <img className='top-post-responsive'
                         src={"https://thumbs.dreamstime.com/z/working-out-home-online-fitness-course-workout-video-personal-trainer-service-phone-health-sport-mobile-app-144081381.jpg"}
                         alt="data not opened .."
                         width={435}
                         height={250}
                         />
                         <div className='img-title'>{'Working out at home with online fitness course, workout video or personal trainer service in phone. Health or sport mobile app.'}</div>
                         <span>{"healthy Food"}<span>{"September 20, 2015."}</span></span> 
                     </div>
                 </div>
 
                 {data.map((item) =>{
                     return(
                         <div id='con-right-gap' key={item.id}>
                             <div id='con-right-display' >
                                 <img 
                                 className='topBelowPost'
                                 onClick={()=> handleOnNavigate(item.id , item)}
                                 width={150}
                                 height={120}
                                 src={item.url}
                                 alt={"your data will show in high range..."}
                                 />
                                <div className='img-data1'>
                                    <div className='image-title1'>{item.title}</div>
                                    <div className='image-content1'>{item.content}</div>
                                    <div className='responsive1'><span className='image1-category'>{item.category}{" /"} </span> <span className='image1-date'>{item.date}</span></div>
                                </div>
                             </div>
                         </div>
                     )
                 })}
             </div>
 
         </div>
     )
 }
 export default FitnessTop