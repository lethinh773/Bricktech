import React, { useEffect } from 'react';
import Header from "./web_view/view_page/Header";
import Footer from "./web_view/view_page/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RouterView from './web_view/router_view';
import 'aos/dist/aos.css'; // Import CSS của AOS
import AOS from 'aos'; // Import thư viện AOS
import Swiper from 'swiper/bundle'; // Import toàn bộ Swiper
import 'swiper/swiper-bundle.css'; // Import CSS của Swiper

function App() {
  useEffect(() => {
    // Khởi tạo AOS
    AOS.init({ duration: 1000 });

    // Khởi tạo slider trên
    const testimoniaslSlider = new Swiper('.testimoniaslSlider', {
      spaceBetween: 30,
      centeredSlides: true,
      freeMode: true,
      speed: 10000,
      autoplay: {
        delay: 1,
        disableOnInteraction: false,
      },
      loop: true,
      slidesPerView: 1,
      allowTouchMove: false,
      breakpoints: {
        1: { slidesPerView: 1.1 },
        768: { slidesPerView: 2 },
        992: { slidesPerView: 2.5 },
        1200: { slidesPerView: 3 },
        1400: { slidesPerView: 3.5 },
        1600: { slidesPerView: 4 },
        1900: { slidesPerView: 4.5 },
      },
    });

    // Khởi tạo slider dưới
    const testimoniaslSliderTwo = new Swiper('.testimoniaslSliderTwo', {
      spaceBetween: 30,
      centeredSlides: true,
      freeMode: true,
      speed: 8000,
      autoplay: {
        delay: 1,
        reverseDirection: true,
        disableOnInteraction: false,
      },
      loop: true,
      slidesPerView: 1,
      allowTouchMove: false,
      breakpoints: {
        1: { slidesPerView: 1.1 },
        768: { slidesPerView: 2 },
        992: { slidesPerView: 2.5 },
        1200: { slidesPerView: 3 },
        1400: { slidesPerView: 3.5 },
        1600: { slidesPerView: 4 },
        1900: { slidesPerView: 4.5 },
      },
    });

    // Cleanup Swiper khi component unmount
    return () => {
      testimoniaslSlider.destroy();
      testimoniaslSliderTwo.destroy();
    };
  }, []); // Chỉ chạy khi component mount

  return (
    <BrowserRouter>
      <Header />
      <Routes>
       <Route path="*" element={<RouterView />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
