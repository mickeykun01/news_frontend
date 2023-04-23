// import {data , data1} from '../../Utility/ApiHomeTop'
import { useNavigate } from 'react-router-dom'
import {useState, useEffect} from 'react'
import axios from 'axios';
import './TopImage.css'

function TopImage(){
    const navigate = useNavigate();
    const handleOnNavigate=(id , item) =>{
        navigate(`/bollywood/${id}` , {state :{item}})
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
        <div id='pic-main-cont'>
            <div id='pic1'>
                {data.slice(0,1).map((item)=>{
                    return(
                        <div id='img1' key={item.id}>
                            <img 
                            className='image1'
                            src={item.url}
                            alt={'404 page not found..'}
                            onClick={() => handleOnNavigate(item.id , item)}
                            width={1000}
                            height={600}
                            />
                            <div id='imgs1'>
                            <div id="img1-text1">{item.title}</div>
                            <div id='img1-text2'>Travel {" /"} {item.date}</div>
                             </div>                                 

                        </div>
                    )
                })}
            </div>
            
            <div>
            <div id='pic2'>
                {data.slice(1,2).map((item)=>{
                    return(
                        <div id='img2' key={item.id}>
                            <img 
                            className='image2'
                            src={item.url}
                            alt={'404 page not found..'}
                            onClick={() => handleOnNavigate(item.id , item)}
                            width={410}
                            height={250}
                            />

                            <div id='imgs2'>
                            <div id="img2-text1">Title is here</div>
                            <div id='img2-text2'>Travel {" /"} {item.date}</div>
                            </div>

                        </div>
                    )
                })}
            </div>

            <div id='pic3 '>
                {data.slice(1,2).map((item)=>{
                    return(
                        <div id='img2' key={item.id}>
                            <img 
                            className='image2'
                            src={item.url}
                            alt={'404 page not found..'}
                            onClick={() => handleOnNavigate(item.id , item)}
                            width={410}
                            height={250}
                            />

                            <div id='imgs2'>
                            <div id="img2-text1">Title is here</div>
                            <div id='img2-text2'>Travel {" /"} {item.date}</div>
                             </div>

                        </div>
                    )
                })}
            </div>
            </div>
        </div>
    )
}

export default TopImage