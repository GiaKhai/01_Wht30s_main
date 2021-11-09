import "./happened.css";
import video from "../../image/video.png";
import img1 from "../../image/happened/video-object-01.png";
import img2 from "../../image/happened/video-object-02.png";
import img3 from "../../image/happened/video-object-03.png";
import img4 from "../../image/happened/video-object-04.png";
import img5 from "../../image/happened/video-object-05.png";
import img6 from "../../image/happened/video-object-06.png";
import img7 from "../../image/happened/video-object-07.png";
import img8 from "../../image/happened/video-object-08.png";
import img9 from "../../image/happened/video-object-09.png";

const Happened = () => {
  return (
    <div className="happened-area">
      <div className="description">
        <div className="title-happened">what happened</div>
        <div className="content-happened">
          How to create mobile-optimized videos in minutes. Not a designer,
          every team makes a lot of videos Can be trimmed. Take the first
        </div>
      </div>
      <div className="text-center mx-auto">
        <button className="btn-see">see more</button>
      </div>
      <div className="windown-happened container">
        <img src={video} class="img-video mx-auto d-block" alt="..." />
      </div>
      <img className="oj1" src={img1} alt="" />
      <img className="oj2" src={img2} alt="" />
      <img className="oj3" src={img3} alt="" />
      <img className="oj4" src={img4} alt="" />
      <img className="oj5" src={img5} alt="" />
      <img className="oj6" src={img6} alt="" />
      <img className="oj7" src={img7} alt="" />
      <img className="oj8" src={img8} alt="" />
      <img className="oj9" src={img9} alt="" />
    </div>
  );
};
export default Happened;
