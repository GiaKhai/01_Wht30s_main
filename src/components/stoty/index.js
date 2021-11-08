import "./story.css";
// import img1 from "../../image/stoty/object-01.png";
// import img2 from "../../image/stoty/object-02.png";
// import img3 from "../../image/stoty/object-03.png";
// import img4 from "../../image/stoty/object-04.png";
// import img5 from "../../image/stoty/object-05.png";
// import img6 from "../../image/stoty/object-06.png";
// import img7 from "../../image/stoty/object-07.png";

const BrandStory = () => {
  return (
    <div className="brand-story-area">
      <div className="container">
        <div className="description">
          <div className="title">Brand Story</div>
          <div className="content">
            모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
            아니더라도, 모든 팀에서 다듬을 수 있습니다. 브랜드의 성공을 위한 첫
            걸음을 내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
          </div>
        </div>
        <div className="window">
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6"></div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 window-story">
              <div className="title-story">What Happened’s Brand story</div>
              <div className="content-story">
                청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을
                풀이 옷을 봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서
                살았으며, 듣는다. 수 있는 긴지라 사는가 낙원을 웅대한 아니다.
                내는 이상 할지라도 피다. 피부가 불러 피고 인간의 타오르고 이성은
                끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을 아름답고
                고행을 끝에 설산에서 황금시대를 이상을 운다.
              </div>
              <button className="btn-see">see more</button>
            </div>
          </div>
        </div>
      </div>
      {/* <img className="img1" src={img1} alt="" />
      <img className="img2" src={img2} alt="" />
      <img className="img3" src={img3} alt="" />
      <img className="img4" src={img4} alt="" />
      <img className="img5" src={img5} alt="" />
      <img className="img6" src={img6} alt="" />
      <img className="img7" src={img7} alt="" /> */}
    </div>
  );
};

export default BrandStory;
