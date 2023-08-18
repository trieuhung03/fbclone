import Header from "../../layout/Header";
import "./Ppage.css";
import { Col, Row } from "react-bootstrap-v5";
// import { Col, Row } from "react-bootstrap-v5";
// import { useNavigate } from "react-router-dom";

function Ppage() {
  return (
    <div>
      <Header />
      <div className="header-page-container">
        <div className="cover-img-container">
          <img className="cover-img" src="./assets/anh bia.jpg" alt="Anh bia" />
        </div>
        <div className="information">
          <div className="avt-main">
            <img className="avt" src="./assets/anh bia.jpg" alt="Avt" />
            {/* <i className="fa-solid fa-camera fa-2xl" style={{color: "#9ea2a9"}}></i> */}
          </div>
          <div className="name-container">
            <div className="name">
              <h2>Hưng Triệu </h2> <h3>(Hưngg Suy)</h3>
            </div>
            <div className="vv">
              <p>727 bạn bè</p>
              <div className="btn">
                <div className="name-btn">
                  <button type="button" className="btn btn-primary">
                    Thêm vào tin
                  </button>
                </div>
                <div className="name-btn">
                  <button type="button" className="btn btn-secondary">
                    <i
                      className="fa-solid fa-pen p5"
                      style={{ color: " #e4e5e7" }}
                    ></i>{" "}
                    Chỉnh sửa trang cá nhân
                  </button>
                </div>
              </div>
            </div>
            <div className="img-friend">
              <img className="img-1" src="./assets/anh bia.jpg" alt="Avt" />
              <img className="img-1" src="./assets/anh bia.jpg" alt="Avt" />
              <img className="img-1" src="./assets/anh bia.jpg" alt="Avt" />
              <div className="name-btn-down">
                <button type="button" className="btn btn-secondary">
                  <i
                    className="fa-solid fa-chevron-down"
                    style={{ color: " #e4e5e7" }}
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr className="hr" />
        <div className="pagee">
          <div className="page-bt">
            <div className="page-ct page-ct-1">Bài viết</div>
            <div className="page-ct">Giới thiệu</div>
            <div className="page-ct">Bạn bè</div>
            <div className="page-ct">Ảnh</div>
            <div className="page-ct">Video</div>
            <div className="page-ct">Reels</div>
            <div className="page-ct">
              Xem thêm
              <i
                className="fa-solid fa-caret-down p5"
                style={{ color: " #e4e5e7" }}
              ></i>
            </div>
          </div>
          <div className="name-btn-down mr">
            <button type="button" className="btn btn-secondary">
              <i
                className="fa-solid fa-ellipsis"
                style={{ color: " #e4e5e7" }}
              ></i>
            </button>
          </div>
        </div>
      </div>
      <div className="page-container">
        <div className="left">
          <div className="left-1">
            <h4>Giới thiệu</h4>
            <div className="text">abcd</div>
            <button type="button" className="btn btn-secondary">
              Chỉnh sửa tiểu sử
            </button>
            <div>
              <i
                className="fa-solid fa-location-dot p5"
                style={{ color: " #e4e5e7" }}
              ></i>
              Đến từ Phú Thọ
            </div>
            <button type="button" className="btn btn-secondary">
              Chỉnh sửa chi tiết
            </button>
            <button type="button" className="btn btn-secondary">
              Thêm sở thích
            </button>
            <button type="button" className="btn btn-secondary">
              Thêm nội dung đáng chú ý
            </button>
          </div>
          <div className="left-2">
            <div className="left-2-img">
              <h4>Ảnh</h4>
              <div className="textimg">
                <>Xem tất cả ảnh</>
              </div>
            </div>
          </div>
          <div className="left-2">
            <div className="left-2-img">
              <h4>Bạn bè</h4>
              <div className="textimg">
                <>Xem tất bạn bè</>
              </div>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="right-1">
            <img className="logo" src="./assets/fb_icon.png" alt="Facebook" />
            <input
              className="status-1"
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
          <div className="right-2">
            <div className="right-2-a">
              <h4>Bài viết</h4>
              <div className="right-2-a-btn">
                <button type="button" className="btn btn-secondary mr5">
                  <i
                    className="fa-solid fa-sliders p5"
                    style={{ color: " #e4e5e7" }}
                  ></i>
                  Bộ lọc
                </button>
                <button type="button" className="btn btn-secondary ">
                  <i
                    className="fa-solid fa-gear p5"
                    style={{ color: " #e4e5e7" }}
                  ></i>
                  Quản lý bài viết
                </button>
              </div>
            </div>
            <hr style={{ color: "white" }} />
            <div className="home-mid-1">
              <div className="right-2-b">
                <div>
                  <i className="fa-solid fa-bars p5"></i>
                  Xem theo danh sách
                </div>
              </div>
              <div className="right-2-b-1">
                <div>
                  {/* <i className="fa-regular fa-image  p5"></i> */}
                  Chế độ xem lưới
                </div>
              </div>
            </div>
          </div>

          <div className="right-3">
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
              <hr style={{ color: "white" }} />
              <div className="right-3-a">
            <img className="logo-1" src="./assets/fb_icon.png" alt="Facebook" />
            <input
              className="status-1"
              type="text"
              placeholder="Viết bình luận..."
            ></input>
            </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ppage;
