
import { useNavigate } from 'react-router-dom'
import '../Pages/Bollywood/bollywood.css'
import { useState , useEffect } from 'react';
import axios from 'axios';

const BollywoodTop=() =>{
   const navigate = useNavigate();

    const handleOnNavigate=(item , id)=>{
        navigate(`bollywood/${id}` , {state : {item}})
    }
    const [data, setdata] = useState([])


useEffect(()=>{
    axios
        .get("https://authorization-27k4.onrender.com")
        .then(res=>{
            setdata(res.data)
            console.log(res.data)
        })
},[])

console.log(data)

    return(
        <div id='rightSideContent'>
            <div id="title">Top Post</div>
            <div className='right-post-gap'>
                <div>
                    <div id='topStartpost'>
                        <img className='top-post-responsive'
                        src={"https://thumbs.dreamstime.com/b/bollywood-star-shahrukh-khan-showing-gratitude-to-his-fans-bhopal-bollywood-star-shahrukh-khan-fans-131126290.jpg"}
                        alt="data not opened .."
                        width={365}
                        height={220}
                        />
                        <div className='text-down'>
                            <div className='img-title'>{"Bollywood star Shahrukh khan with fans"}</div>
                            <span>{"Stage Perfomance"}<span>{"December 21,2021"}</span></span> 
                      </div>
                    </div>
                </div>

                {data.map((item , index) =>{
                    return(
                        <div id='con-right-gap' key={index}>
                            <div id='con-right-display'>
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
export default BollywoodTop