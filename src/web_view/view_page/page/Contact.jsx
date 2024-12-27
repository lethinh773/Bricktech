import React from "react";

const Contact = () => {
  return (
    <main className="wrapper">
      {/* Contact Form Start */}
      <section className="aai-contact-form">
        <div className="container">
          <div className="row g-5 align-items-center justify-content-between">
            <div className="col-xl-6 col-lg pe-lg-5">
              <div>
                <h2 className="section-title mb-5">
                  We love to collab with, Let’s do great together!
                </h2>
                <div>
                  <div className="aai-contact-widget mb-4">
                    <div className="aai-contact-widget-inner d-flex">
                      <div>
                        <img src="assets/img/icons/contact-1.svg" alt="Contact Icon" />
                      </div>
                      <div>
                        <h3 className="aai-contact-widget-title">Our Address</h3>
                        <address className="aai-contact-address">
                          1012 Pebda Parkway, Mirpur 2 <br />
                          Dhaka, Bangladesh
                        </address>
                      </div>
                    </div>
                  </div>
                  <div className="aai-contact-widget mb-4">
                    <div className="aai-contact-widget-inner d-flex">
                      <div>
                        <img src="assets/img/icons/contact-2.svg" alt="Contact Icon" />
                      </div>
                      <div>
                        <h3 className="aai-contact-widget-title">Contact Info</h3>
                        <p className="aai-contact-support">Open a chat or give us call at</p>
                        <a href="tel:3108415500" className="aai-contact-address">
                          310 841 5500
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg">
              <div className="aai-contact-form">
                <form>
                  <div className="row align-items-center justify-content-between">
                    <div className="col-xl-6">
                      <div className="aai-form-input">
                        <input type="text" className="form-control shadow-none" placeholder="Full Name" />
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="aai-form-input">
                        <input type="text" className="form-control shadow-none" placeholder="Email" />
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="aai-form-input">
                        <textarea
                          className="form-control shadow-none text-area"
                          placeholder="Message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-xl-12">
                      <div className="d-flex justify-content-start">
                        <button type="submit" className="aai-btn btn-pill-solid">
                          Send A Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Form End */}

      {/* Faq Start */}
      <section className="aai-faq py-120">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 col-lg">
              <div>
                <h2 className="section-title mb-4">
                  Any <span className="gradient-text">Questions?</span> <br />
                  We have Answers!
                </h2>
                <p className="section-desc">
                  Don’t find your answer here? just send us a message for any query.
                </p>
                <div className="mt-5">
                  <a href="contact.html" className="aai-gradient-outline-btn">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg mt-5 mt-xl-0" data-aos="fade-up" data-aos-delay="100">
              <div className="aai-accordions">
                <div className="accordion accordion-flush" id="accordionFlushExample">
                  {/* Accordion Items */}
                  {[
                    {
                      id: "flush-collapseOne",
                      question: "What is AI content writing tool?",
                      answer:
                        "They not only understand what I say but read between the lines and also give me ideas of my own. AI technology is perfect for best business solutions.",
                    },
                    // Additional items here...
                  ].map((item) => (
                    <div className="accordion-item" key={item.id}>
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button shadow-none collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#${item.id}`}
                          aria-expanded="false"
                          aria-controls={item.id}
                        >
                          {item.question}
                        </button>
                      </h2>
                      <div
                        id={item.id}
                        className="accordion-collapse collapse"
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
      {/* Faq End */}

      {/* Cta Start */}
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
                  Be part of the future of{" "}
                  <span className="position-relative">
                    <span className="position-relative aai-cta-line z-3">AI Writing</span>
                  </span>{" "}
                  tools
                </h2>
                <p className="section-desc">
                  Unleash the power of AI within Brainwave. Upgrade your productivity with Brainwave,
                  the open AI chat app.
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
            <div className="col-xl-7 col-lg mt-5 mt-xl-0" data-aos="fade-up" data-aos-delay="80">
              <div className="aai-cta-img">
                <img src="assets/img/cta/cta-screen.png" className="img-fluid" alt="CTA Screen" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Cta End */}
    </main>
  );
};

export default Contact;
