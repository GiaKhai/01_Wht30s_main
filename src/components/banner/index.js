import "./banner.css";
import banner from "../../image/main-banner.png";
const Banner = () => {
  return (
    <div>
      <img className="banner" src={banner} alt="banner" />
    </div>
  );
};

export default Banner;
