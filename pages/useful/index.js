import React from "react";

function UseFul() {
  return (
    <div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div
              style={{ cursor: "pointer" }}
              className="card"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              <img
                src="https://ulearning.com/wp-content/uploads/2018/03/studying-tips.jpeg"
                className="card-img-top"
                alt="..."
              />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://www.sunhome.ru/i/wallpapers/198/kabinet-oboi.orig.jpg"
                className="card-img-top"
                alt="..."
              />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://franchetti.com/wp-content/uploads/2017/05/technology-to-enhance-meetings-and-presentations.jpg"
                className="card-img-top"
                alt="..."
              />
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://franchetti.com/wp-content/uploads/2017/05/technology-to-enhance-meetings-and-presentations.jpg"
                className="card-img-top"
                alt="..."
              />
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered ">
            <div className="modal-content m-style">
              <div className="modal-header">
                <h1 className="modal-title fs-2" id="staticBackdropLabel">
                  Modal title
                </h1>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  X
                </button>
              </div>
              <div className="modal-body">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                  <div className="col">
                    <div
                      className="card"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    >
                      <img
                        src="https://ulearning.com/wp-content/uploads/2018/03/studying-tips.jpeg"
                        className="card-img-top al-img"
                        alt="..."
                      />
                    </div>
                  </div>
                  <div className="col">
                    <div className="card">
                      <img
                        src="https://www.sunhome.ru/i/wallpapers/198/kabinet-oboi.orig.jpg"
                        className="card-img-top al-img"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UseFul;