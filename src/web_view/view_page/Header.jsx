import React, { useEffect } from "react";
import { Link } from "react-router-dom";


export default function Header() {
  function hasStickyMenu(){
    var header = document.querySelector('.header-primary');
  
    if(header){
    //Sticky Menu
    window.addEventListener('scroll', function() {
    
    if (window.scrollY > 100) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
  });
    }
  }
  useEffect (()=>{
    hasStickyMenu()
  },[])
  return (
    <header className="header-primary">
      <div className="container">
        <nav className="navbar navbar-expand-xl justify-content-between">
          <Link to="/">
            <img src="assets/img/logo/bricktech.svg" alt="" />
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="d-block d-xl-none">
                <div className="logo">
                  <Link to="/">
                    <img src="assets/img/logo/bricktech.svg" alt="" />
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="false"
                >
                  Trang chủ
                </Link>
                <div className="dropdown-menu">
                  <div className="d-flex flex-column flex-xl-row">
                    <ul>
                      <li>
                        <Link to="/" className="dropdown-item">
                          <span>Trang chủ</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="index-2.html" className="dropdown-item">
                          <span>Trang chủ 2</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about.html">
                  Về chúng tôi
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="services.html">
                  Dịch vụ
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="false"
                >
                  Trang
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="services-details.html" className="dropdown-item">
                      <span>Chi tiết dịch vụ</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="features.html" className="dropdown-item">
                      <span>Đặc trưng</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="prices.html" className="dropdown-item">
                      <span>Định giá</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="404.html" className="dropdown-item">
                      <span>404 trang</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="signin.html" className="dropdown-item">
                      <span>Đăng nhập</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="signup.html" className="dropdown-item">
                      <span>Đăng ký</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                  aria-expanded="false"
                >
                  Tin tức
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="Blog" className="dropdown-item">
                      <span>Tin tức</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="blog-details.html" className="dropdown-item">
                      <span>Chi tiết tin tức</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact.html">
                  Liên hệ
                </Link>
              </li>
            </ul>
            <div className="d-flex align-items-center gap-4 mt-4">
              <div className="align-items-center aai-signup-in-links d-flex d-lg-none">
                <Link to="signin.html">Đăng nhập</Link>
                <Link to="signup.html" className="aai-gradient-outline-btn">
                  Đăng ký
                </Link>
              </div>
            </div>
          </div>
          <div className="navbar-right d-flex align-items-center gap-4">
            <div className="align-items-center aai-signup-in-links d-none d-lg-flex">
              <Link to="signin.html">Đăng nhập</Link>
              <Link to="signup.html" className="aai-gradient-outline-btn">
                Đăng ký
              </Link>
            </div>
            <button
              className="navbar-toggler d-block d-xl-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span></span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
