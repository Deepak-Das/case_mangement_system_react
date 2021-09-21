import React from "react";

function OverviewMid() {
  return (
    <>
      <div className="container-fluid bg-light text-uppercase text-white">
        <div className="row text-center gx-5">
          <div className="col-md-1 bg-secondary bg-gradient me-md-1"></div>
          <div className="col bg-secondary bg-gradient me-md-1 p-3">
            <span className="fs-1 fw-bold">10</span>
            <br />
            years of experence
          </div>
          <div className="col bg-secondary bg-gradient p-3">
            <span className="fs-1 fw-bold">300+</span>
            <br />
            associates
          </div>
          <div className="col-md bg-secondary bg-gradient ms-md-1 p-3">
            <span className="fs-1 fw-bold">22+</span>
            <br />
            type of cases
          </div>
          <div className="col-md-1 bg-secondary bg-gradient ms-md-1"></div>
        </div>
      </div>
    </>
  );
}

export default OverviewMid;
