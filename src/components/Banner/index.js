import React from "react";

export const Banner = () => {
  return (
    <>
      <div className="container">
        <div className="d-md-flex flex-md-row justify-content-md-end text lead fw-bold">
          <div className="text-end me-4">
            <i className="fa fa-envelope-o me-2" aria-hidden="true"></i>
            <span>adv.dks@gmail.com</span>
          </div>
          <div className="text-end">
            <i className="fa fa-phone-square me-2" aria-hidden="true"></i>
            <span>1800-526-562</span>
          </div>
        </div>
      </div>
    </>
  );
};
