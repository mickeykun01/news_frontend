import { useLocation} from "react-router-dom"
// import { useEffect } from "react"
import BlogPost from "../BlogPost";
import './Article.css'
import '../BlogPost/Blogstyle.css'


const Articles=() =>{
    const location = useLocation();
    // const Params = useParams();
    // useEffect(() =>{
    //   async  function getArticles() {
    //         const response = await fetch(`https://thumbs.dreamstime.com/b/images/${Params.id}` ,{
    //             method : 'GET',
    //         })
    //         const data = await response.json();
    //     }
    //     getArticles();
    // }, [Params.id])

    const item = location.state.item;

    return(
        <div id="full-container">
            <div className="article-centre" >
                <h1><span> {item.title}</span></h1>

                <div id="profile-container">
                    <div id="profile">
                        <div>
                            <img src={item.url} width={80} height={80} style={{borderRadius : '50%'}} alt="404 error"/>
                        </div>
                        <div id="names">
                        <div id="title-bold">Albert Einstein</div>
                        <div id="date-style">{item.date}- 10 min. read</div>
                        </div>
                    </div>

                    <div id="icons">
                    <div onClick={()=> alert('Facebook')}>Facebook</div>
                    <div onClick={()=> alert('Twitter')}>Twitter</div>
                    <div onClick={()=> alert('Instagram')}>Instagram</div>
                    <div onClick={()=> alert('Youtube')}>Youtube</div>
                    </div>

                </div>
                <br/><br/>

                <img id="img-decor" src={item.url} width={1000} height={550} alt={'404 error'} />
                <div id="img-content-para">{item.content}{item.content} <br/>{item.content}<br/>{item.content}{item.content}<br/><br/>{item.content}{item.content}{item.content}</div>

                <div id="author">
                    <div id="btn">
                        <button style={{marginRight : "16px" , backgroundColor : "aqua"}}>HTML</button>
                        <button style={{marginRight : "16px" , backgroundColor : "aqua"}}>CSS</button>
                        <button style={{marginRight : "16px" , backgroundColor : "aqua"}}>REACT</button>
                        <button style={{marginRight : "16px" , backgroundColor : "aqua"}}>NODE</button>
                    </div>
                    <div id="claps">9.3K claps</div>

                    <div>
                        <div id="profile-container1">
                          <div id="profile1">
                            <div>
                                <img src={item.url} width={80} height={80} style={{borderRadius : '50%'}} alt="404 error"/>
                            </div>
                            
                            <div id="names1">
                                <div id="writenBy">Written by</div>
                                <div id="name">Albert Einstein</div>
                                <div id="date-style">{item.date}- 10 min. read</div>
                            </div>
                           </div>
                        </div>
                    </div>

                </div>
                <div id="Blog-container">
                <BlogPost Title="Related Post"/>
                </div>
            </div>
        </div>
    )
}

export default Articles