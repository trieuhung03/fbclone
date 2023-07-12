import Header from "../../layout/Header";
import "./Ppage.css";
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
                    + Thêm vào tin
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
        <div className="left"></div>
        ádasdadasdasd
        <div className="right"></div>
      </div>
    </div>
  );
}

export default Ppage;
