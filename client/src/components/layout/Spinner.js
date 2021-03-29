import React, { Fragment } from "react";
import spinner from "../../img/spinner.gif";

const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      style={{
        display: "block",
        margin: "auto",
        width: "auto",
      }}
      alt="loading..."
    />
  </Fragment>
);

export default Spinner;