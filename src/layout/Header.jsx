import { Col, Row } from "react-bootstrap-v5";
import "./Header.css";

function Header() {
  return (
    <div className="header">
    <Row className="header-container m-0">
      <Col className="header-left">
        <div>
          <a href="/">
            <img className="logo" src="./assets/fb_icon.png" alt="Facebook" />
          </a>
        </div>
        <div>
          {" "}
          <input
            className=" find"
            type="text"
            placeholder="Tìm kiếm trên Facebook "
          />
        </div>
      </Col>
      <Col className="header-mid m-0">
      <a href="/"> <i className="fa-solid fa-house fa-xl icon-mid" style={{color: "#e0e6f0"}}></i> </a>
       <a> <i className="fa-solid fa-tv fa-xl icon-mid" style={{color: "#e0e6f0"}}></i> </a>
       <a> <i className="fa-solid fa-store fa-xl icon-mid" style={{color: "#e0e6f0"}}></i> </a>
       <a> <i className="fa-solid fa-gamepad fa-xl icon-mid" style={{color: "#e0e6f0"}}></i> </a>
      </Col>
      <Col className="header-right justify-item-center">
      <i className="fa-solid fa-bars fa-xl icon-mid" style={{color: "#e0e6f0"}}></i>
        <i className="fa-brands fa-facebook-messenger fa-xl icon-mid" style={{color: "#e0e6f0"}}></i> 
       <i className="fa-solid fa-bell fa-xl icon-mid" style={{color: "#e0e6f0"}}></i> 
        <a href="/">
          <img className="logo" src="./assets/fb_icon.png" alt="Facebook" />
        </a>
      </Col>
      <hr style={{color: "white"}} />
    </Row>
    </div>
  );
}

export default Header;
