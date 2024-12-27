import React, { useState } from "react";

function Fap() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="wrapper">
      <section className="aai-faq pb-120">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 col-lg">
              <div>
                <h2 className="section-title mb-4">
                  Bất kì <span className="gradient-text"> Câu hỏi? </span> <br />
                  Chúng tôi có câu trả lời!
                </h2>
                <p className="section-desc">
                  Không tìm thấy câu trả lời của bạn ở đây? Chỉ cần gửi tin nhắn
                  cho chúng tôi cho bất kỳ truy vấn.
                </p>
                <div className="mt-5">
                  <a href="contact.html" className="aai-gradient-outline-btn">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg mt-5 mt-xl-0"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="aai-accordions">
                <div className="accordion accordion-flush" id="accordionFlushExample">
                  {[
                    {
                      id: "flush-collapseOne",
                      question: "Công cụ viết nội dung AI là gì?",
                      answer:
                        "Họ không chỉ hiểu những gì tôi nói mà còn đọc giữa các dòng và cũng cho tôi ý tưởng của riêng tôi. AI Công nghệ là hoàn hảo cho các giải pháp kinh doanh tốt nhất.",
                    },
                    {
                      id: "flush-collapseTwo",
                      question: "Làm thế nào để bạn khác nhau tiêu chí trong quá trình của bạn?",
                      answer:
                        "Họ không chỉ hiểu những gì tôi nói mà còn đọc giữa các dòng và cũng cho tôi ý tưởng của riêng tôi. AI Công nghệ là hoàn hảo cho các giải pháp kinh doanh tốt nhất.",
                    },
                    {
                      id: "flush-collapseThree",
                      question: "Làm thế nào có thể đầu tư tiền vào đây?",
                      answer:
                        "Họ không chỉ hiểu những gì tôi nói mà còn đọc giữa các dòng và cũng cho tôi ý tưởng của riêng tôi. AI Công nghệ là hoàn hảo cho các giải pháp kinh doanh tốt nhất.",
                    },
                    {
                      id: "flush-collapseFour",
                      question: "Làm cách nào để giao dịch tiền điện tử của tôi sang các loại tiền tệ khác?",
                      answer:
                        "Họ không chỉ hiểu những gì tôi nói mà còn đọc giữa các dòng và cũng cho tôi ý tưởng của riêng tôi. AI Công nghệ là hoàn hảo cho các giải pháp kinh doanh tốt nhất.",
                    },
                    {
                      id: "flush-collapseFive",
                      question: "Làm thế nào tôi có thể chấp nhận thẻ tín dụng trực tuyến?",
                      answer:
                        "Họ không chỉ hiểu những gì tôi nói mà còn đọc giữa các dòng và cũng cho tôi ý tưởng của riêng tôi. AI Công nghệ là hoàn hảo cho các giải pháp kinh doanh tốt nhất.",
                    },
                  ].map((item, index) => (
                    <div className="accordion-item" key={item.id}>
                      <h2 className="accordion-header">
                        <button
                          className={`accordion-button shadow-none ${
                            activeIndex === index ? "" : "collapsed"
                          }`}
                          type="button"
                          aria-expanded={activeIndex === index}
                          onClick={() => toggleAccordion(index)}
                          aria-controls={item.id}
                        >
                          {item.question}
                        </button>
                      </h2>
                      <div
                        id={item.id}
                        className={`accordion-collapse collapse ${
                          activeIndex === index ? "show" : ""
                        }`}
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div className="accordion-body">
                          <p className="aai-accordion-text">{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section
        className="aai-cta pb-120"
        style={{
          background: "url('assets/img/bg/cta-bg.jpg') no-repeat center center/cover",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg">
              <div>
                <h2 className="section-title mb-4">
                  Hãy là một phần của tương lai của
                  <span className="position-relative">
                    <span className="position-relative aai-cta-line z-3" style={{ marginLeft: "10px" }}>Ai viết</span>
                  </span>
                  <span style={{ marginLeft: "10px" }}>tools</span>
                </h2>
                <p className="section-desc">
                  Giải phóng sức mạnh của AI trong Brainwave. Nâng cấp
                  năng suất với Brainwave, ứng dụng trò chuyện AI mở.
                </p>
                <div className="mt-5 d-flex flex-column flex-md-row aai-btns-group">
                  <a href="prices.html" className="aai-btn btn-pill-solid">
                    Get Started
                  </a>
                  <a href="about.html" className="aai-gradient-outline-btn">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-xl-7 col-lg mt-5 mt-xl-0"
              data-aos="fade-up"
              data-aos-delay="80"
            >
              <div className="aai-cta-img">
                <img
                  src="assets/img/cta/cta-screen.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Fap;
