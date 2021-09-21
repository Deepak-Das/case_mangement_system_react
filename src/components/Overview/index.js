<<<<<<< HEAD
import React from 'react';

export const Overview = () => {
  const customeMargin = {
    marginLeft: '($spacer * .16) !important',
    marginRight: '($spacer * .16) !important',
  };
=======
import React from "react";
import OverviewBottom from "./OverviewBottom";
import OverviewMid from "./OverviewMid";
import OverviewUpper from "./OverviewUpper";

export const Overview = () => {
>>>>>>> c4726955016afd1c019eb820f46f2293a019ea12
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
