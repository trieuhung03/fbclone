import "./login.css";
import { Col, Row } from "react-bootstrap-v5";
import { useNavigate } from "react-router-dom";

function Login() {
  let navigate = useNavigate();
  const handleOnSubmit = () => {
    return navigate("/");
  };

  return (
    <Row className=" m-0 align-items-center login-container">
      {/* ===== bên trái========== */}
      <Col lg={6} className="img-text">
        <img className="img-fb" src="./assets/fb.svg" />
        <h4>
          Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của
          bạn.
        </h4>
      </Col>
      {/* ===== bên trái========== */}

      {/* ===== bên phải========== */}
      <Col lg={6} className=" form-container">
        {/* ======form====== */}
        <form
          className="form-main"
          onSubmit={() => {
            handleOnSubmit();
          }}
        >
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Email hoặc số điện thoại"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Mật khẩu"
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              className="btnSubmit form-control"
              value="Đăng nhập "
            />
          </div>
          <div className="form-group">
            <a href="#" className="ForgetPwd">
              Quên mật khẩu?
            </a>
          </div>
          <hr />
          <div className="form-group ">
            <button className="btn btn-success"> Tạo tài khoản mới </button>
          </div>
        </form>
        {/* ======form====== */}
        <div className="text-right ">
          <a href="#">Tạo Trang </a> dành cho người nổi tiếng, thương hiệu hoặc
          doanh nghiệp.
        </div>
      </Col>
      {/* ===== bên phải========== */}
    </Row>
  );
}

export default Login;
