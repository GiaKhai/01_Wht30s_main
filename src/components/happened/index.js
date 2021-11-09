import "./happened.css";
import video from "../../image/video.png";

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
    </div>
  );
};
export default Happened;
