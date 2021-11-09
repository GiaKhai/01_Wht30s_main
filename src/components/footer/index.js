import "./footer.css";
import icon1 from "../../image/snsicon-01.png";
import icon2 from "../../image/snsicon-02.png";
import icon3 from "../../image/snsicon-03.png";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="row">
        <div className="col-sm-12 col-sm-4 col-md-2">
          <h6>what happened</h6>
          <p className="text-justify">
            [공지] 개인 정보 처리 방침 변경 사전 안내 [공지] 29CM 강남 스토어
            영업 종료 [공지] 개인 정보 처리 방침 변경 사전 안내 [공지] iOS 10
            이하 버전 지원 중단 안내 [공지] 개인 정보 처리 방침 변경 사전 안내
          </p>
        </div>
        <div class="col-sm-12 col-md-1 col-lg-2"></div>
        <div className="col-xs-6 col-sm-6 col-md-2">
          <h6>about us</h6>
          <ul className="footer-links">
            <li>
              <a href="/">회사 소개 </a>
            </li>
            <li>
              <a href="/">인재 채용</a>
            </li>
            <li>
              <a href="/">상시 할인 혜택</a>
            </li>
          </ul>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-2">
          <h6>my order</h6>
          <ul className="footer-links">
            <li>
              <a href="/">내 주문</a>
            </li>
            <li>
              <a href="/">주문 배송</a>
            </li>
            <li>
              <a href="/">취소 / 교환 / 반품 내역</a>
            </li>
            <li>
              <a href="/">상품 리뷰 내역 </a>
            </li>
            <li>
              <a href="/">증빙 서류 발급</a>
            </li>
          </ul>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-2">
          <h6>my account</h6>
          <ul className="footer-links">
            <li>
              <a href="/">회원 정보 수정 </a>
            </li>
            <li>
              <a href="/">회원 등급</a>
            </li>
            <li>
              <a href="/">마일리지 현황</a>
            </li>
            <li>
              <a href="/">쿠폰</a>
            </li>
          </ul>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-2">
          <h6>help</h6>
          <ul className="footer-links">
            <li>
              <a href="/">1 : 1 상담 내역 </a>
            </li>
            <li>
              <a href="/">상품 Q & A 내역</a>
            </li>
            <li>
              <a href="/">공지 사항</a>
            </li>
            <li>
              <a href="/">자주하는 질문</a>
            </li>
            <li>
              <a href="/"> 고객의 소리</a>
            </li>
          </ul>
        </div>
        <hr />
      </div>
      <div class="row">
        <div class="col-md-6 col-sm-12 col-xs-12">
          <p class="copyright-text">
            © 2020-2021 what happened corp l (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜
            사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr
            서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000 l 서비스
            이용약관 l 개인정보처리방침
          </p>
        </div>
        <div class="col-md-6 col-sm-12 col-xs-12">
          <ul class="social-icons">
            <li>
              <a class="facebook" href="/">
                <img src={icon1} alt="" />
              </a>
            </li>
            <li>
              <a class="facebook" href="/">
                <img src={icon2} alt="" />
              </a>
            </li>
            <li>
              <a class="facebook" href="/">
                <img src={icon3} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
