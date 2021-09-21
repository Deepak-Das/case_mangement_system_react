import React from "react";

export const Overview = () => {
  const customeMargin = {
    "margin-left": "($spacer * .16) !important",
    "margin-right": "($spacer * .16) !important",
  };
  return (
    <>
      <section className="container-fluid border-bottom border-1 border-dark">
        <div className="container p-3 ">
          <div className="row mb-5">
            <img
              src="./images/lawyer1.jpg"
              alt="director"
              className="col-md-6 h-75"
            />
            <p className="col-md-6 text-center align-self-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sint
              nihil beatae reprehenderit tenetur asperiores perferendis
              praesentium distinctio dignissimos delectus qui aliquam error a,
              quasi voluptas, ratione facilis, natus unde.
            </p>
          </div>
          <div className="row">
            <p className="col-md-6 text-center align-self-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis sint
              nihil beatae reprehenderit tenetur asperiores perferendis
              praesentium distinctio dignissimos delectus qui aliquam error a,
              quasi voluptas, ratione facilis, natus unde.
            </p>
            <img
              src="./images/lawyer2.jpg"
              alt="director"
              className="col-md-6 h-75"
            />
          </div>
        </div>
        <div className="container-fluid bg-light">
          <div className="row text-center gx-5">
            <div className="col-1 bg-warning" style={customeMargin}>
              col-1
            </div>
            <div className="col bg-warning" style={customeMargin}>
              col-2
            </div>
            <div className="col bg-warning" style={customeMargin}>
              col-3
            </div>
            <div className="col bg-warning" style={customeMargin}>
              col-4
            </div>
            <div className="col-1 bg-warning" style={customeMargin}>
              col-5
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
