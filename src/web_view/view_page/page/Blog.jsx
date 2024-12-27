import React from "react";

const Blog = () => {
  return (
    <main className="wrapper">
      <section
        className="aai-breadcrumb"
        style={{
          background: "url('assets/img/bg/bread-crumb-bg.jpg') no-repeat center center/cover",
        }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-auto">
              <div className="text-center">
                <h2 className="aai-page-title">Blog</h2>
                <ul
                  className="aai-breadcrumb-nav d-flex align-items-center justify-content-center"
                >
                  <li>
                    <a
                      href="#"
                      className="aai-breadcrumb-link text-decoration-underline"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 16L18 12M18 12L14 8M18 12L6 12"
                        stroke="#DADADA"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </li>
                  <li>
                    <a href="#" className="aai-breadcrumb-link">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Start */}
      <section className="aai-blog-posts pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-xl-8">
              <article
                className="aai-post-wrapper"
                data-aos="fade-up"
                data-aos-delay="50"
              >
                <div className="aai-post-item">
                  <a href="blog-details.html" className="aai-post-thumb-wrapper d-block">
                    <img
                      src="assets/img/blog/bp-1.webp"
                      className="img-fluid aai-post-thumb"
                      alt=""
                    />
                  </a>
                  <div className="aai-post-content">
                    <div className="aai-post-meta d-flex flex-wrap gap-3">
                      <a href="#" className="d-flex align-items-center gap-2">
                        <i className="fa-regular fa-user"></i>
                        <span>Admin</span>
                      </a>
                      <a href="#" className="d-flex align-items-center gap-2">
                        <i className="fa-regular fa-clock"></i>
                        <span>13 July, 2023</span>
                      </a>
                      <a href="#" className="d-flex align-items-center gap-2">
                        <i className="fa-regular fa-folder"></i>
                        <span>AI Revolution</span>
                      </a>
                    </div>
                    <h3 className="aai-post-title">
                      <a href="blog-details.html">
                        Balancing Innovation and Responsibility With AI.
                      </a>
                    </h3>
                    <p className="aai-post-exerpt mb-3">
                      Artificial Intelligence (AI) is a groundbreaking field of computer science that aims to create intelligent machines capable of performing tasks that typically require human intelligence. By simulating human cognitive processes…
                    </p>
                    <a
                      href="blog-details.html"
                      className="aai-post-readmore d-flex align-items-center gap-2"
                    >
                      <span>Read More</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </article>

              {/* Các bài viết còn lại có cấu trúc giống như trên */}
            </div>

            <div className="col-lg-5 col-xl-4">
              <aside className="aai-blog-sidebar">
                {/* Search Widget */}
                <div className="aai-sidebar-widget mb-4">
                  <form action="#">
                    <div className="aai-sidebar-search-from">
                      <input
                        type="text"
                        className="form-control shadow-none"
                        placeholder="Search Here"
                      />
                      <button className="aai-sidebar-search-button">
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </button>
                    </div>
                  </form>
                </div>

                {/* Recent Post Widget */}
                <div className="aai-sidebar-widget mb-4">
                  <h3 className="aai-sidebar-title">Recent Post</h3>
                  <ul className="mt-4 aai-blog-lists d-flex flex-column gap-2">
                    <li className="aai-blog-list-item">
                      <a href="blog-details.html" className="d-flex align-items-center gap-3">
                        <i className="fa-solid fa-angle-right"></i>
                        <span>Balancing Innovation and Responsibility With AI.</span>
                      </a>
                    </li>
                    <li className="aai-blog-list-item">
                      <a href="blog-details.html" className="d-flex align-items-center gap-3">
                        <i className="fa-solid fa-angle-right"></i>
                        <span>Shaping the Future of Work and Society.</span>
                      </a>
                    </li>
                    <li className="aai-blog-list-item">
                      <a href="blog-details.html" className="d-flex align-items-center gap-3">
                        <i className="fa-solid fa-angle-right"></i>
                        <span>Exploring Trends, Challenges, and Opportunities.</span>
                      </a>
                    </li>
                    <li className="aai-blog-list-item">
                      <a href="blog-details.html" className="d-flex align-items-center gap-3">
                        <i className="fa-solid fa-angle-right"></i>
                        <span>The Evolution of Artificial Intelligence.</span>
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Category Widget */}
                <div className="aai-sidebar-widget">
                  <h3 className="aai-sidebar-title">Category</h3>
                  <ul className="mt-4 aai-blog-lists d-flex flex-column gap-3">
                    <li className="aai-blog-list-item">
                      <a href="#" className="d-flex align-items-center gap-3">
                        <i className="fa-solid fa-angle-right"></i>
                        <span>AI Revolution(4)</span>
                      </a>
                    </li>
                    <li className="aai-blog-list-item">
                      <a href="#" className="d-flex align-items-center gap-3">
                        <i className="fa-solid fa-angle-right"></i>
                        <span>New AI(2)</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
      {/* Blog End */}
    </main>
  );
};

export default Blog;
