import React from "react";
import OverviewMid from "./OverviewMid";
import OverviewUpper from "./OverviewUpper";

export const Overview = () => {
  return (
    <>
      <section className="container-fluid border-bottom border-1 border-dark">
        <OverviewUpper />
        <OverviewMid />
      </section>
    </>
  );
};
