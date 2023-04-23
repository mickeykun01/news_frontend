
import { useNavigate } from 'react-router-dom'
import Ads from '../../Commons/Ads';
import BollywoodTop from '../../TopPostData/Bollywoodtop';
import '../Bollywood/bollywood.css'
import { useState , useEffect } from 'react';
import axios from 'axios';



function LatestArticle(props){
    const navigate = useNavigate();
    const handleOnNavigate=(item , id)=>{
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
        <>
        <section>
            <div id='leftside'>
                <div id='main-container'>
                    <h2 id='title'>{props.title}</h2>
                    
                    {data.slice(6,12).map((item) =>{
                        return(
                            <div id='container1' key={item.id}>
                                <div id='container2' >
                                    <img className='img' 
                                        onClick={()=> handleOnNavigate(item.id , item)} 
                                        src={item.url} 
                                        alt={"your data will show when connection is high ..."}
                                        width={300}
                                        height={200}
                                    />
                                    <div id='img-data'>
                                        <div className='image-title'>{item.title}</div>
                                        <div className='image-content'>{item.content}</div>
                                        <div className='responsive'><span className='image1-category'>{item.category}{" /"} </span> <span className='image1-date'>{item.date}</span></div>
                                    </div>
                                    <br/> <hr/>
                                    
                                </div>
                            </div>
                           
                        );
                    })}
                    <br/><br/>
                    <span className="downarrow">Load more ....</span>
                    <br/><br/><br/>
                </div>
            </div>
    
            <div id='right-side'>
                 <Ads/>
                <BollywoodTop /> 
            </div>
        
        </section>
        </>
)
}

export default LatestArticle