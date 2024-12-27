import React from 'react';

const Writing = () => {
  return (
    <main className="wrapper">
      {/* Writing Step */}
      <section className="writing-steps-area py-5">
        <div className="container">
          <div className="writing-steps-wrapper" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-4">
                <div className="writing-step">
                  <img
                    src="assets/img/icons/Add-User.svg"
                    className="writing-step-icon"
                    alt=""
                  />
                  <h3 className="writing-step-title">Chọn mẫu viết</h3>
                  <p className="writing-step-desc">
                    Đơn giản chỉ cần chọn một mẫu từ danh sách có sẵn để viết nội dung.
                  </p>
                  <div className="writing-step-arrow d-none d-lg-grid">
                    <svg
                      width="13"
                      height="20"
                      viewBox="0 0 13 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L11.4211 9.52632L1 19"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="writing-step">
                  <img
                    src="assets/img/icons/Home.svg"
                    className="writing-step-icon"
                    alt=""
                  />
                  <h3 className="writing-step-title">Mô tả chủ đề của bạn</h3>
                  <p className="writing-step-desc">
                    Cung cấp cho người viết nội dung AI của chúng tôi vài câu.
                  </p>
                  <div className="writing-step-arrow d-none d-lg-grid">
                    <svg
                      width="13"
                      height="20"
                      viewBox="0 0 13 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L11.4211 9.52632L1 19"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="writing-step border-0 pe-0">
                  <img
                    src="assets/img/icons/Wallet.svg"
                    className="writing-step-icon"
                    alt=""
                  />
                  <h3 className="writing-step-title">Tạo nội dung chất lượng</h3>
                  <p className="writing-step-desc">
                    Các công cụ AI mạnh mẽ của chúng tôi sẽ tạo ra nội dung trong vài giây.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Writing Step End */}
    </main>

  );
};

export default Writing;
