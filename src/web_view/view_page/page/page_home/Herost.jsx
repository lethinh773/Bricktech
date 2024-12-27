import React, { useEffect } from 'react';
import Typed from 'typed.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

const Herost = () => {
  useEffect(() => {
    // Khởi tạo AOS
    AOS.init({
      duration: 1500,
      offset: 120,
      mobile: false,
      once: false,
    });

    // Khởi tạo hiệu ứng typing
    const typedElement = document.querySelector(".typing-animation");
    let typedInstance;  // Khai báo biến để lưu đối tượng Typed

    if (typedElement) {
      typedInstance = new Typed(typedElement, {
        strings: ["Kỹ thuật", "Blog", "Nội dung AI"],
        typeSpeed: 80,
        backSpeed: 40,
        backDelay: 3000,
        startDelay: 1000,
        fadeOut: true,
        loop: true,
      });
    }

    // Sticky Menu
    const header = document.querySelector(".header-primary");
    if (header) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
        }
      });
    }

    // Cleanup function to destroy Typed instance
    return () => {
      if (typedInstance) {
        typedInstance.destroy();  // Gọi destroy() trên đối tượng Typed
      }
    };
  }, []);

  return (
    <main className="wrapper">
      {/* Hero Start */}
      <section
        className="aai-hero-one position-relative"
        style={{
          background:
            "url('assets/img/hero/hero-bg-1.jpg') no-repeat center center/cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-xl-7">
              <div className="aai-hero-one-content">
                <h1 className="aai-hero-one-title">
                  Cách chất lượng cao để viết <br />
                  <span
                    className="gradient-text typing-animation"
                  >
                    {/* Text will be dynamically replaced by Typed.js */}
                  </span>
                </h1>
                <p className="aai-hero-one-desc">
                  AI Copywriting đang cách mạng hóa cách tạo nội dung.
                  AI có thể tạo nội dung cho blog, bài viết, trang web, mạng xã hội
                  phương tiện truyền thông và hơn thế nữa.
                </p>
                <div className="mt-5 d-flex flex-column flex-md-row aai-btns-group">
                  <a href="prices.html" className="aai-btn btn-pill-solid">
                    Bắt Đầu
                  </a>
                  <a href="about.html" className="aai-gradient-outline-btn">
                    Tìm hiểu thêm
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-10 col-xl-5 mt-5 mt-lg-0">
              <div className="aai-hero-one-img">
                <img
                  src="assets/img/hero/dashboard-img.png"
                  className="img-fluid aai-hero-img d-none d-xl-block"
                  alt=""
                />
                <img
                  src="assets/img/hero/dashboard-img-2.png"
                  className="img-fluid aai-hero-img d-xl-none"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero End */}
    </main>
  );
};

export default Herost;
