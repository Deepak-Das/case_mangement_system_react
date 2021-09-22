import React from "react";

export default function OverviewUpper() {
  return (
    <>
      <div className="container p-3">
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
    </>
  );
}
