import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="aai-footer pt-120"
      style={{
        background: "url('assets/img/bg/footer-bg.jpg') no-repeat center center/cover",
      }}
    >
      <div className="container">
        <div className="aai-footer-support">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="aai-support-info d-flex align-items-center">
                <div>
                  <img src="assets/img/icons/headset.svg" alt="" />
                </div>
                <div className="aai-support-contact">
                  <p className="aai-support-text mb-1">
                    Bạn có câu hỏi? Gọi cho chúng tôi 24/7
                  </p>
                  <a href="tel:+17077970462" className="aai-support-number">
                    +1 (707) 797 0462
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="aai-newsletter">
                <form>
                  <div className="position-relative">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your email"
                    />
                    <button type="button" className="aai-newsletter-btn">Đăng ký</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="aai-footer-navigation-widgets py-80">
          <div className="row">
            <div
              className="col-xl-4 col-lg-4 col-md-12"
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="50"
            >
              
              <div className="aai-footer-info">
                <Link to="#" className="aai-footer-logo">
                  <img src="assets/img/logo/bricktech.svg" alt="" />
                </Link>
                <p className="aai-footer-desc">
                  Chúng tôi cung cấp các giải pháp một cửa cho tất cả mọi người <br />
                  các hạng mục CNTT; Hạnh phúc của bạn chỉ là một cú nhấp chuột. Star Tech tin tưởng vào
                  Khách hàng chất lượng
                </p>
                <div className="aai-social-links d-flex">
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-12 mt-5 mt-lg-0">
              <div className="row">
                <div
                  className="col-xl-4 col-lg-4 col-md-4 mb-5 mb-lg-0"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-duration="1500"
                >
                  <nav className="aai-footer-nav">
                    <h3 className="aai-footer-nav-title">Links</h3>
                    <ul className="aai-footer-nav-list">
                      <li className="aai-footer-nav-list-item">
                        <Link to="index.html" className="aai-footer-nav-link">Trang chủ</Link>
                      </li>
                      <li className="aai-footer-nav-list-item">
                        <Link to="services.html" className="aai-footer-nav-link">Dịch vụ</Link>
                      </li>
                      <li className="aai-footer-nav-list-item">
                        <Link to="prices.html" className="aai-footer-nav-link">Định giá</Link>
                      </li>
                      <li className="aai-footer-nav-list-item">
                        <Link to="about.html" className="aai-footer-nav-link">Về chúng tôi</Link>
                      </li>
                      <li className="aai-footer-nav-list-item">
                        <Link to="features.html" className="aai-footer-nav-link">Tính năng</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div
                  className="col-xl-4 col-lg-4 col-md-4 mb-5 mb-lg-0"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1500"
                >
                  <nav className="aai-footer-nav">
                    <h3 className="aai-footer-nav-title">Tác phẩm nghệ thuật</h3>
                    <ul className="aai-footer-nav-list">
                      <li className="aai-footer-nav-list-item">
                        <Link to="services.html" className="aai-footer-nav-link">Tác phẩm nghệ thuật 3D</Link>
                      </li>
                      <li className="aai-footer-nav-list-item">
                        <Link to="services.html" className="aai-footer-nav-link">Nhiếp ảnh</Link>
                      </li>
                      <li className="aai-footer-nav-list-item">
                        <Link to="services.html" className="aai-footer-nav-link">Minh họa phẳng</Link>
                      </li>
                      <li className="aai-footer-nav-list-item">
                        <Link to="services.html" className="aai-footer-nav-link">Video giới thiệu</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div
                  className="col-xl-4 col-lg-4 col-md-4"
                  data-aos="fade-up"
                  data-aos-delay="500"
                  data-aos-duration="1500"
                >
                  <nav className="aai-footer-nav">
                    <h3 className="aai-footer-nav-title">Cộng đồng</h3>
                    <ul className="aai-footer-nav-list">
                      <li className="aai-footer-nav-list-item">
                        <Link to="services.html" className="aai-footer-nav-link">Đối tác toàn cầu</Link>
                      </li>
                      <li className="aai-footer-nav-list-item">
                        <Link to="about.html" className="aai-footer-nav-link">Diễn đàn</Link>
                      </li>
                      <li className="aai-footer-nav-list-item">
                        <Link to="services.html" className="aai-footer-nav-link">Thế giới ảo</Link>
                      </li>
                      <li className="aai-footer-nav-list-item">
                        <Link to="about.html" className="aai-footer-nav-link">Cộng đồng</Link>
                      </li>
                      <li className="aai-footer-nav-list-item">
                        <Link to="services.html" className="aai-footer-nav-link">Tài sản thương hiệu</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="aai-footer-copyright text-center">
          <p className="aai-copyright-text">Bản quyền @2024 le_thinh.773</p>
        </div>
      </div>
    </footer>
  );
}
