import Header from "../../layout/Header";
import { Col, Row } from "react-bootstrap-v5";
// import { useNavigate } from "react-router-dom";
import "./home.css";
function Home() {
  // let navigate = useNavigate();
  // const handleOnSubmit = () => {
  //   return navigate("/Hungtrieu");
  // };
  return (
    <>
      <Header />
      <Row className="home-container m-0">
        <Col lg={3} className="home-left">
        <a href="/Hungtrieu">
          <div className="home-left1" >
           <h6 >
              <img className="logo" src="./assets/fb_icon.png" alt="Facebook" />
              Hưng Triệu
            </h6>
          </div>
          </a>
          <div className="home-left1 ">
            <h6>
              <i className="fa-solid fa-user-group p5"></i>
              Bạn bè
            </h6>
          </div>
          <div className="home-left1">
            <h6>
              <i className="fa-solid fa-newspaper p5"></i>
              Bảng feed(Gần đây nhất)
            </h6>
          </div>
          <div className="home-left1">
            <h6>
              <i className="fa-solid fa-users-rectangle p5"></i>
              Nhóm
            </h6>
          </div>
          <div className="home-left1">
            <h6>
              <i className="fa-solid fa-store p5"></i>
              Marketplace
            </h6>
          </div>
          <div className="home-left1">
            <h6>
              <i className="fa-solid fa-tv p5"></i>
              Watch
            </h6>
          </div>
          <div className="home-left1">
            <h6>
              <i className="fa-solid fa-chevron-down p5"></i>
              Xem thêm
            </h6>
          </div>
          <hr style={{ color: "white" }} />
          <h5 className="home-left1">Lối tắt của bạn</h5>
        </Col>
        <Col lg={6} className="home-mid ">
          <div className="home-mid-container">
            <div className="home-mid-1">
              <Col className="home-mid-1-a">
                <div>
                <i className="fa-solid fa-book-open p5"></i>
                Tin
                </div>
              </Col>
              <Col className="home-mid-1-a">
                <div>
                <i className="fa-solid fa-book p5"></i>
                Reels
                </div>
              </Col>
              <Col className="home-mid-1-a">
                <div>
                <i className="fa-solid fa-video p5"></i>
                Phòng họp mặt
                </div>
              </Col>
            </div>
            <hr style={{ color: "white" }} />
            <div>
              <img className="logo" src="./assets/fb_icon.png" alt="Facebook" />{" "}
              <img className="logo" src="./assets/fb_icon.png" alt="Facebook" />{" "}
              <img className="logo" src="./assets/fb_icon.png" alt="Facebook" />
            </div>
          </div>
          <div className="home-mid-2">
            <img className="logo" src="./assets/fb_icon.png" alt="Facebook" />
            <input
              className="status"
              type="text"
              placeholder="Hưng ơi, bạn đang nghĩ gì?"
            ></input>
            <hr style={{ color: "white" }} />
            <div className="home-mid-1">
              <div className="home-mid-1-a">
                <div>
                <i className="fa-solid fa-video p5"></i>
                Video trực tiếp
                </div>
              </div>
              <div className="home-mid-1-a">
                <div>
                <i className="fa-regular fa-image  p5"></i>
                Ảnh/video
                </div>
              </div>
              <div className="home-mid-1-a">
                <div>
                <i className="fa-solid fa-face-grin p5"></i>
                 Cảm xúc/hoạt động
                 </div>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="content-header">
              <img className="logo" src="./assets/fb_icon.png" alt="Facebook" />{" "}
              <div className="content-ifm">
                <h6>Hưng Triệu</h6>
                <p>3 tháng 2 lúc 17:23</p>
              </div>
              <button className="content-btn">...</button>
            </div>
            <div className="content-mid">
              <p>Đẹp trai có rì wrong ?</p>
              <div className="content-mid-img">
                <img className="img" src="./assets/Đà Nẵng.jpg" alt="." />
              </div>
              <div className="content-bottom">
                <div className="like-left">
                  {" "}
                  <i className="fa-regular fa-thumbs-up "></i>100K
                </div>
                <div className="cmt-right">
                  <div>
                    <i className="fa-regular fa-message "></i>10K
                  </div>
                  <div>
                    {" "}
                    <i className="fa-solid fa-share ml-10"></i>99K
                  </div>
                </div>
              </div>
              <hr style={{ color: "white" }} />
              <Row className="home-mid-1">
                <Col className="home-mid-1-b">
                  <i className="fa-regular fa-thumbs-up icon-like"></i>Thích
                </Col>
                <Col className="home-mid-1-b">
                  {" "}
                  <i className="fa-regular fa-message icon-like"></i>Bình luận
                </Col>
                <Col className="home-mid-1-b">
                  {" "}
                  <i className="fa-solid fa-share icon-like"></i>Chia sẻ
                </Col>
              </Row>
            </div>
          </div>
        </Col>
        <Col lg={3} className="home-right">
          <div className="home-righht-1">Được tài trợ</div>
          <img className="logo" src="./assets/fb_icon.png" alt="Facebook" />
          <hr style={{ color: "white" }} />
          <div className="home-righht-1">
            <div>Sinh nhật </div>
            <div>Hôm nay là sinh nhật của </div>
          </div>
          <hr style={{ color: "white" }} />
          <div className="home-righht-1">Người liên hệ</div>
          <div></div>
        </Col>
      </Row>
    </>
  );
}

export default Home;
