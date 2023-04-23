import { useNavigate } from 'react-router-dom'

import { useState , useEffect } from 'react';
import axios from 'axios';


function BlogPost(props){
const navigate = useNavigate();
const handleOnNavigate=(item , id)=>{
    navigate(`/bollywood/${id}` , {state : {item}})
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
        <>
        <div id='related-post'>{props.Title}</div>
        <div id='blog-container'>
            <div id='Blog'>
                {data.slice(2,3).map((item) =>{
                    return(
                        <div key={item.id}>
                            <img 
                            className='img-width-responsiv'
                            onClick={()=> handleOnNavigate(item.id , item)}
                            src={item.url}
                            alt={'404 page not found'}
                            width={380}
                            height={210}
                            />

                            <div className='abc'>
                                <div id='BlogContent' onClick={()=> handleOnNavigate(item.id , item)}></div>
                                <div className='img-title'>{item.title}</div>
                                <div className='img-content'>{item.content}</div>
                                <span className='img1-category'>{item.category}{" /"} </span> <span className='img1-date'>{item.date}</span>
                            </div>
                        </div>
                    )
                })}
             </div>
            
            <div id='Blog'>
                {data.slice(3,4).map((item) =>{
                    return(
                        <div key={item.id}>
                            <img 
                            className='img-width-responsiv'
                            onClick={()=> handleOnNavigate(item.id , item)}
                            src={item.url}
                            alt={'404 page not found'}
                            width={380}
                            height={210}
                            />

                            <div className='abc'>
                                <div id='BlogContent' onClick={()=> handleOnNavigate(item.id , item)}></div>
                                <div className='img-title'>{item.title}</div>
                                <div className='img-content'>{item.content}</div>
                                <span className='img1-category'>{item.category}{" /"} </span> <span className='img1-date'>{item.date}</span>
                            </div>
                        </div>
                    )
                })}

            </div>

            <div id='Blog'>
                {data.slice(4,5).map((item) =>{
                    return(
                        <div key={item.id}>
                            <img 
                            className='img-width-responsiv'
                            onClick={()=> handleOnNavigate(item.id , item)}
                            src={item.url}
                            alt={'404 page not found'}
                            width={380}
                            height={210}
                            />

                            <div className='abc'>
                                <div id='BlogContent' onClick={()=> handleOnNavigate(item.id , item)}></div>
                                <div className='img-title'>{item.title}</div>
                                <div className='img-content'>{item.content}</div>
                                <span className='img1-category'>{item.category}{" /"} </span> <span className='img1-date'>{item.date}</span>
                            </div>
                        </div>
                    )
                })}

            </div>

        </div>
        
        </>
    )
}
export default BlogPost;