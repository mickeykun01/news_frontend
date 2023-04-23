// import {data} from '../TopPost APIDATA/HollywoodTopApi'
// import {data} from '../APIDATA/Hollywoodapi'
import { useNavigate } from 'react-router-dom'
import '../Pages/Bollywood/bollywood.css'
import { useState , useEffect } from 'react'
import axios from 'axios'

const HollywoodTop=() =>{
   const navigate = useNavigate();

    const handleOnNavigate=(item , id)=>{
        navigate(`hollywood/${id}` , {state : {item}})
    }

    const [data, setdata] = useState([])

    useEffect(()=>{
       axios
           .get("https://authorization-27k4.onrender.com/food")
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
                        src={"https://thumbs.dreamstime.com/z/hollywood-actress-style-vintage-lady-posing-authentic-lighting-57095453.jpg"}
                        alt="data not opened .."
                        width={435}
                        height={250}
                        />
                        <div className='img-title'>{'Hollywood actress style'}</div>
                        <span>{"Hollywood"}<span>{"october 15,2016"}</span></span> 
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
export default HollywoodTop