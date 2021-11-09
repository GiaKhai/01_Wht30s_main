import "./issue.css";
import skip from "../../image/issue/news-img-01.png";
import branda from "../../image/issue/news-img-05.png";
import brandb from "../../image/issue/news-img-03.png";
import brandc from "../../image/issue/news-img-04.png";

const Issue = () => {
  return (
    <div className="issue-area">
      <div className="description">
        <div className="title-issue">Happened’s issue</div>
        <div className="content-issue">
          How to create mobile-optimized videos in minutes. Not a designer,
          every team makes a lot of videos Can be trimmed. Take the first
        </div>
      </div>
      <div className="text-center mx-auto">
        <button className="btn-see">see more</button>
      </div>

      <div className="show-brand">
        <div class="row">
          <div class="col-3 skip">
            <div className="text-skip">whpn issue</div>
            <img className="img-skip" src={skip} alt="" />
          </div>
          <div class="col brand-item">
            <div className="name-brand">b brand</div>
            <img className="img-brand" src={branda} alt="" />
          </div>
          <div class="col brand-item">
            <div className="name-brand">c brand</div>
            <img className="img-brand" src={brandb} alt="" />
          </div>
          <div class="col brand-item">
            <div className="name-brand" style={{ backgroundColor: "#ff5500" }}>
              d brand
            </div>
            <img className="img-brand" src={brandc} alt="" />
          </div>
          <div class="col brand-item">
            <div className="name-brand">e brand</div>
            <img className="img-brand" src={branda} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Issue;
