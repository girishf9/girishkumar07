import React from "react";

const GetInTouch = ({ heading, message }) => {
  return (
    <>
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <p className="lead text-center pb-3">
        {message},<a className="btn btn-sm btn-outline-primary" target=" _blank" href="https://www.younginflux.com/post/leadership-journey-p-girish-kumar-sasi-institute-of-technology-and-engineering-tadepalligudem">read</a>.
      </p>
    </>
  );
};

export default GetInTouch;
