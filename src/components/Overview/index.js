import React from "react";
import OverviewBottom from "./OverviewBottom";
import OverviewMid from "./OverviewMid";
import OverviewUpper from "./OverviewUpper";

export const Overview = () => {
  return (
    <>
      <section className="container-fluid border-bottom border-1 border-dark mb-5">
        <OverviewUpper />
        <OverviewMid />
        <OverviewBottom />
      </section>
    </>
  );
};
