import TopImage from "../../Components/HomeTopImagesCompo/TopImageArticle";
import BlogPost from "../../Components/BlogPost";
import './Home.css'
import LatestArticle from "./HomeLatestArticle";
import MiddleImage from "../../TopPostData/middleimg";

const Home = () => {
  return (
    <>
   
    <section>
      <div id="home-main-container">
        <div>
          <TopImage />
        </div>

        <div id="the-latest">
          <div className="text">The Latest</div>   
          <BlogPost title="The Latest.." />
        </div>

        <div id="Latest-aricle">
        <LatestArticle title="Latest Article.."/>
        <MiddleImage />
        </div>

        <br/><br/>
       
        <div id="down-side">
          <div className="text">Latest Stories</div>
          <BlogPost title="Latest Stories.."/>
        </div>

      </div>
    </section>
    </>
  );
};

export default Home;
